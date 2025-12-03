<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class OrganizationRepository {
    public static function save($data) {
        return User::create([
            "name" => $data["name"],
            "email" => $data["email"],
            "role" => "organization",
            "password" => Hash::make($data["password"])
        ]);
    }

    public static function list($filter) {
        $user = User::where("role", "organization")
            ->filter($filter)
            ->paginate(10);
        return $user;
    }
}

?>