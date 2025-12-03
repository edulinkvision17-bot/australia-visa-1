<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class address extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "address",
        "address2",
        "suburb_town",
        "country",
        "state",
        "postcode_zip",
        "type", // address_detail, registered_office
    ];
}
