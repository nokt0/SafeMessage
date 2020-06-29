<?php


use PHPUnit\Framework\TestCase;
use App\ImageTextWriter;

class TestImageTextWriter extends TestCase
{
    public function testImageTextWriter(){
        ImageTextWriter::TextToImage("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }
}
