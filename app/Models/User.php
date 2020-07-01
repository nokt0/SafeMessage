<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property int $id
 * @property character varying $name
 * @property character varying $email
 * @property timestamp without time zone|null $email_verified_at
 * @property character varying $password
 * @property character varying|null $remember_token
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'users';

	protected $casts = [
		'name' => 'character varying',
		'email' => 'character varying',
		'email_verified_at' => 'timestamp without time zone',
		'password' => 'character varying',
		'remember_token' => 'character varying',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'name',
		'email',
		'email_verified_at',
		'password',
		'remember_token'
	];
}
