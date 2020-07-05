<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
	protected $table = 'messages';

	protected $casts = [
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone',
		'open_counter' => 'int',
		'expires' => 'int'
	];

	protected $fillable = [
		'image_name',
		'public_id',
		'password_hash',
		'open_counter',
		'expires'
	];
}
