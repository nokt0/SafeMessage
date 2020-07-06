<?php

namespace App\Http\Controllers;

use App\ImageTextWriter;
use App\Models\Message;
use Exception;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;


class MessageController extends Controller
{
    //Error Const
    const FILE_NOT_FOUND = 'FILE_NOT_FOUND';
    const WRONG_PASSWORD = 'WRONG_PASSWORD';
    const MESSAGE_EXPIRED = 'MESSAGE_EXPIRED';
    const COUNTER_IS_ZERO = 'COUNTER_IS_ZERO';
    const MESSAGE_DOESNT_EXIST = 'MESSAGE_DOESNT_EXIST';
    const NOT_ENOUGH_PARAMS = 'NOT_ENOUGH_PARAMS';
    const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

    public function createMessage(Request $request)
    {
        try {
            $data = $request->json()->all();
            if (!isset($data['counter'], $data['password'], $data['text'], $data['expires'])) {
                return $this->errorResponse('Not enough params', 400,self::NOT_ENOUGH_PARAMS);
            }
            $counter = $data['counter'];
            $password = $data['password'];
            $text = $data['text'];
            $expires = $data['expires'];
            $salt = getenv('SALT');
            $fontPath = Storage::disk('public')->path('OpenSans-Regular.ttf');

            //make uniq id
            $publicId = Uuid::uuid4();

            $image_name = $publicId . ' ' . date('H-i-s--d-m-Y');
            $pathToSave = $path = Storage::disk('local')->path('images') . DIRECTORY_SEPARATOR . $image_name . '.png';

            // Safe image to storage folder
            ImageTextWriter::TextToImage($text, 50, $fontPath, $pathToSave);

            $message = new Message([
                    'image_name' => $image_name,
                    'public_id' => $publicId,
                    'password_hash' => password_hash($password . $salt, PASSWORD_DEFAULT),
                    'open_counter' => $counter,
                    'expires' => $expires,
                ]
            );
            $message->save();

            $resp = [
                'publicId' => $publicId
            ];
            return response($resp, 201);

        } catch (Exception $e) {
            return $this->errorResponse('Unknown error: ' . $e->getMessage(), 500,self::UNKNOWN_ERROR);
        }

    }

    public function getMessage(Request $request)
    {

        $data = $request->json()->all();
        $publicId = $request->route('id');
        $message = Message::query()->firstWhere('public_id', '=', $publicId);

        if ($message->count() < 1) {
            return $this->errorResponse('Message doesn\'t exist', 404,self::MESSAGE_DOESNT_EXIST);
        }

        if ($message->getAttribute('open_counter') < 1) {
            return $this->errorResponse('Number of views exhausted', 404,self::COUNTER_IS_ZERO);
        }

        $expires = $message->getAttribute('expires');
        if ($expires < time()) {
            return $this->errorResponse('Message expired', 404, self::MESSAGE_EXPIRED);
        }

        //Check password
        $password_hash = $message->getAttribute('password_hash');
        $password = $data['password'];
        $salt = getenv('SALT');
        if (!password_verify($password . $salt, $password_hash)) {
            return $this->errorResponse('Wrong password', 403, self::WRONG_PASSWORD);
        }

        $imageName = $message->getAttribute('image_name');
        try {
            $image = Storage::disk('local')->get('images' . DIRECTORY_SEPARATOR . $imageName . '.png');
            $base64Img = base64_encode($image);

            // Change Counter
            $counter = $message->getAttribute('open_counter');
            $message->setAttribute('open_counter', $counter - 1)->save();
            $counter -= 1;
            $resp = [
                'img' => $base64Img,
                'counter' => $counter,
                'expires' => $expires
            ];
            return response($resp, 200)
                ->header('Content-Type', 'application/json');
        } catch (FileNotFoundException $e) {
            return $this->errorResponse('File not found', 404,self::FILE_NOT_FOUND);
        }
    }

    private function errorResponse(string $message, int $code, string $errorConst)
    {
        $resp = [
            'error' => $message,
            'errorConst' => $errorConst
        ];
        return response($resp, $code)
            ->header('Content-Type', 'application/json');
    }

}
