<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Traits\UniversalFilterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, UniversalFilterable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
            'name',
            'email',
            'password',
            'role',
            'username',
            'otp',
            'type',
            'family_name',
            'given_names',
            'phone',
            'mobile_phone',
            'online_service',
            'organization_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'online_service' => 'array',
    ];

    public function addressDetail() {
        return $this->hasOne(Address::class, 'user_id', 'id')->where('type', 'address_detail');
    }

    public function addressRegisteredOffice() {
        return $this->hasOne(Address::class, 'user_id', 'id')->where('type', 'registered_office');
    }

    public function serviceApplication() {
        return $this->hasOne(ServiceApplication::class, 'user_id', 'id');
    }

    public function secretQuestion() {
        return $this->hasOne(SecretQuestion::class, 'user_id', 'id');
    }
}
