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
        Schema::create('service_applications', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('title')->nullable();

            $table->boolean('legendcom')->default(false);
            $table->boolean('online_lodgement')->default(false);
            $table->boolean('organisation_account_administration')->default(false);
            $table->boolean('visa_entitlement_verification_online')->default(false);

            $table->string('country');
            $table->string('organisation_registration_number');
            $table->string('registered_name');
            $table->boolean('same_as_address_details')->default(false);

            $table->boolean('ol_ac_legal_practitioner')->default(false);
            $table->boolean('ol_ac_other_organisation_user')->default(false);
            $table->boolean('ol_ac_registered_migration_agent')->default(false);
            $table->text('ol_reason_for_access')->nullable();
            $table->string('ol_legal_practitioner_number')->nullable();
            $table->string('ol_mern')->nullable();
            
            $table->boolean('oca_ac_organisation_account_administration')->default(false);
            $table->boolean('oca_reason_for_access')->default(false);
            
            $table->boolean('vevo_ac_immigration_status')->default(false);
            $table->boolean('vevo_ac_legal_practitioner')->default(false);
            $table->boolean('vevo_ac_licensing_eligibility')->default(false);
            $table->boolean('vevo_ac_medicare_eligibility')->default(false);
            $table->boolean('vevo_ac_registered_migration_agent')->default(false);
            $table->boolean('vevo_ac_residence_status')->default(false);
            $table->boolean('vevo_ac_study_entitlements')->default(false);
            $table->boolean('vevo_ac_work_entitlements')->default(false);
            $table->text('vevo_reason_for_access')->nullable();
            $table->string('vevo_about_vevo')->nullable();
            $table->string('vevo_industry_type')->nullable();
            $table->string('vevo_legal_practitioner_number')->nullable();
            $table->string('vevo_mern')->nullable();
            $table->string('vevo_cricos')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_applications');
    }
};
