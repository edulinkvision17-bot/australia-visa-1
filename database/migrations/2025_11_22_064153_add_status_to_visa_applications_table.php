<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('visa_applications', function (Blueprint $table) {
            $table->string('status')->default('Submitted')->after('trn_number');
        });
    }

    public function down()
    {
        Schema::table('visa_applications', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
