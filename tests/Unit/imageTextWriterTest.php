<?php


use Illuminate\Support\Facades\Storage;
use PHPUnit\Framework\TestCase;
use App\ImageTextWriter;

class imageTextWriterTest extends TestCase
{
    public function test()
    {
        $path = Storage::disk('local')->path('OpenSans-Regular.ttf');
        $pathToSave = $path = Storage::disk('public')->path('images') . DIRECTORY_SEPARATOR . 'test-image' . '.png';
        ImageTextWriter::TextToImage("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 40, $path, $pathToSave);
        $this->assertTrue(true);
    }
}
