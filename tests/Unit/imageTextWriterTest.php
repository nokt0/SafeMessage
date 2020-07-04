<?php


use Illuminate\Support\Facades\Storage;
use PHPUnit\Framework\TestCase;
use App\ImageTextWriter;

class imageTextWriterTest extends TestCase
{
    public function test()
    {
        parent::setUp();
        $font = Storage::disk('public')->path('OpenSans-Regular.ttf');
        $pathToSave = Storage::disk('local')->path('images' . DIRECTORY_SEPARATOR . 'test-image' . '.png');
        ImageTextWriter::TextToImage("aaaaaaaaaaaaaaaaaasdasd,m21142o21o412oaaaaaaaaaaaaaaaaaaaaaa\nasdassssssssssssss2\nad\nasd\nas\nasdsad\naaaa", 40, $font, $pathToSave);
        $this->assertTrue(true);
    }
}
