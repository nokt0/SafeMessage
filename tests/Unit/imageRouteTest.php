<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class imageRouteTest extends TestCase
{

    function testNotEnough()
    {
        parent::setUp();
        Session::start();
        $this->json('POST', '/image', ['text' => 'adssad'])
            ->assertJson([
                'error' => "Not enough params"
            ]);
    }

    function testPostMessage()
    {
        parent::setUp();
        Session::start();
        $this->json('POST', '/image', [
            'password' => '2412',
            'text' => "daaaaaaaaaaa222asdasf",
            'counter' => 6,
            'expires' => time() + (7 * 24 * 60 * 60),
        ])->assertStatus(201);
    }
}
