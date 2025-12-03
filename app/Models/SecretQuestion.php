<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SecretQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'question_1',
        'answer_1',
        'question_2',
        'answer_2',
        'question_3',
        'answer_3',
    ];
    
}
