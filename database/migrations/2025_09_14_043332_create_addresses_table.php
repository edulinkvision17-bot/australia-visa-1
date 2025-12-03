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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();
            $table->text('address')->nullable();
            $table->text('address2')->nullable();
            $table->string('suburb_town')->nullable();
            $table->string('country')->nullable();
            $table->string('state')->nullable();
            $table->string('postcode_zip')->nullable();
            $table->string('type')->nullable(); //address_detail, registered_office
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
