<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string("username")->nullable();
            $table->string("role")->default("client"); // client, organisation, 
            $table->string("otp")->nullable();
            $table->string("type")->nullable(); // register

            $table->string('family_name')->nullable();
            $table->string('given_names')->nullable(); 
            $table->string('phone')->nullable();
            $table->string('mobile_phone')->nullable();
            $table->json('online_service')->nullable(); // legendcom, online_lodgement, organisation_account_administration, visa_entitlement_verification_online
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(["username", "role"]);
        });
    }
};
