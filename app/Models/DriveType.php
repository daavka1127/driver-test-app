<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DriveType extends Model
{
    use HasFactory;

    protected $table = 'drive_type';
    public $timestamps = false;
}
