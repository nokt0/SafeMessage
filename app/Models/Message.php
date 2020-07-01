<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Builder;

/**
 * Class Message
 *
 * @property int $id
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 * @property string $image_name
 * @property string $public_id
 * @property string $password_hash
 * @property int $open_counter
 * @property int $expires
 *
 * @package App\Models
 */
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
