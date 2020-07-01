<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class FailedJob
 * 
 * @property int $id
 * @property string $connection
 * @property string $queue
 * @property string $payload
 * @property string $exception
 * @property timestamp without time zone $failed_at
 *
 * @package App\Models
 */
class FailedJob extends Model
{
	protected $table = 'failed_jobs';
	public $timestamps = false;

	protected $casts = [
		'failed_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'connection',
		'queue',
		'payload',
		'exception',
		'failed_at'
	];
}
