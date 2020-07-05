<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Session;


class imageRouteTest extends TestCase
{

    function testNotEnough()
    {
        parent::setUp();
        Session::start();
        $this->json('POST', '/message', ['text' => 'adssad'])
            ->assertJson([
                'error' => "Not enough params"
            ]);
    }

    function testSendMessage()
    {
        parent::setUp();
        Session::start();
        $this->json('POST', '/message', [
            'password' => '2412',
            'text' => "aaaaaaaaaaaaaaaaaasdasd,m21142o21o412oaaaaaaaaaaaaaaaaaaaaaa\nasdassssssssssssss2\nad\nasd\nas\nasdsad\naaaa",
            'counter' => 6,
            'expires' => time() + (7 * 24 * 60 * 60),
        ])->assertStatus(201);
    }

    function testGetMessage(){
        parent::setUp();
        Session::start();

        $this->json('POST', '/message/5efcc8239bb6e', [
            'password' => '2412',
        ])->assertStatus(200);
    }

    function testWrongPassword(){
        parent::setUp();
        Session::start();

        $this->json('POST', '/message/5efcc8239bb6e', [
            'password' => 'kk22412',
        ])->assertJson(['error' => 'Wrong password']);
    }
}
