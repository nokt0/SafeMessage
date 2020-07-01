<?php

namespace App\Http\Controllers;

use App\ImageTextWriter;
use App\Models\Message;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MessageController extends Controller
{
    public function create(Request $request)
    {
        try {
            $data = $request->json()->all();
            if (isset($data['counter'], $data['password'], $data['text'], $data['expires'])) {
                $counter = $data['counter'];
                $password = $data['password'];
                $text = $data['text'];
                $expires = $data['expires'];
                $salt = getenv('SALT');
                $fontPath = Storage::disk('public')->path('OpenSans-Regular.ttf');

                //make uniq id
                do {
                    $publicId = uniqid();
                    $equal = Message::query()->where('public_id', '=', $publicId)->get();
                } while ($equal->count() != 0);

                $image_name = $publicId . ' ' . date('s-i-H--d-m-Y');
                $pathToSave = $path = Storage::disk('local')->path('images') . DIRECTORY_SEPARATOR . $image_name . '.png';

                // Safe image to storage folder
                ImageTextWriter::TextToImage($text, 50, $fontPath, $pathToSave );


                $message = new Message([
                        'image_name' => $image_name,
                        'public_id' => $publicId,
                        'password_hash' => password_hash($password . $salt, PASSWORD_DEFAULT),
                        'open_counter' => $counter,
                        'expires' => $expires,
                    ]
                );
                $message->save();

            } else {
                $resp = [
                    'error' => 'Not enough params'
                ];
                return response(json_encode($resp), 400)
                    ->header('Content-Type', 'application/json');
            }

            $resp = [
                'publicId' => $message->public_id
            ];
            return response($resp, 201);

        } catch (Exception $e) {
            $resp = [
                'error' => 'Unknown error'
            ];
            return response($resp, 500);
        }

    }
}
