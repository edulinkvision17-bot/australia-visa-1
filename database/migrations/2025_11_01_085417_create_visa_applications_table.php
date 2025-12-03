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
        Schema::create('visa_applications', function (Blueprint $table) {
            $table->id();
            // Applicant / client info
            $table->string('organization_id', 191)->nullable();
            $table->string('role', 191)->nullable();
            
            $table->string('current_location', 150)->nullable();
            $table->string('legal_status', 100)->nullable();
            $table->longText('stream')->nullable();
            $table->string('reasons', 191)->nullable(); // Text for longer explanations
            $table->longText('details_of_significant_dates')->nullable();

            // Personal Details
            $table->string('family_name', 191)->nullable();
            $table->string('given_names', 191)->nullable();
            $table->string('sex', 191)->nullable();
            $table->string('dob', 191)->nullable();
            
            // Passport Details
            $table->string('passport_number', 191)->nullable();
            $table->string('country_of_passport', 191)->nullable();
            $table->string('nationality_of_passport_holder', 191)->nullable();
            $table->string('date_of_issue', 191)->nullable();
            $table->string('date_of_expiry', 191)->nullable();
            $table->string('place_of_issue', 191)->nullable();
            
            // Identity Card
            $table->string('have_national_identity_card', 191)->nullable(); // Assuming "Yes"/"No" string based on input
            $table->string('id_family_name', 191)->nullable();
            $table->string('id_given_names', 191)->nullable();
            $table->string('identification_number', 191)->nullable();
            $table->string('country_of_issue', 191)->nullable();

            // Birth & Origin
            $table->string('town_or_city', 191)->nullable();
            $table->string('state_or_province', 191)->nullable();
            $table->string('country_of_birth', 191)->nullable();
            $table->string('relationship_status', 191)->nullable();
            $table->string('does_have_other_name', 191)->nullable();
            $table->string('is_citizen_of_passport_country', 191)->nullable();
            $table->string('is_citizen_of_other_country', 191)->nullable();

            // Travel History
            $table->string('has_travelled_to_australia', 191)->nullable(); // Fixed typo "autralia"
            $table->string('has_previously_applied_visa', 191)->nullable();
            $table->string('has_australian_visa_grant_number', 191)->nullable();
            $table->string('has_undertaken_health_examination', 191)->nullable();
            $table->string('any_other_person_travelling', 191)->nullable();

            // Contact Details
            $table->string('country_of_residence', 191)->nullable();
            $table->string('country', 191)->nullable();
            $table->longText('address')->nullable();
            $table->string('suburb_or_town', 191)->nullable();
            $table->string('postal_code', 191)->nullable();
            $table->string('is_address_same', 191)->nullable();
            $table->string('email_address', 191)->nullable();

            // Authorization & Group
            $table->text('family_unit_not_travelling')->nullable();

            // Visit Details
            $table->string('want_to_enter_more', 191)->nullable();
            $table->string('length_of_stay', 191)->nullable();
            $table->string('planned_arrival_date', 191)->nullable();
            $table->string('planned_final_departure_date', 191)->nullable();
            $table->string('will_undertake_a_course', 191)->nullable();
            $table->string('will_visit_any_relative', 191)->nullable();

            // Employment
            $table->string('employment_status', 191)->nullable();
            $table->string('occupation_grouping', 191)->nullable();
            $table->string('organisation', 191)->nullable();
            $table->string('start_date_with_current_employer', 191)->nullable();
            $table->string('org_country', 191)->nullable();
            $table->longText('org_address')->nullable();
            $table->string('org_suburb_or_town', 191)->nullable();
            $table->string('org_state_or_province', 191)->nullable();
            $table->string('org_postal_code', 191)->nullable();
            
            // Contact Person in Organisation
            $table->string('contact_family_name', 191)->nullable();
            $table->string('contact_given_names', 191)->nullable();
            $table->string('contact_position', 191)->nullable();
            $table->string('contact_business_phone', 191)->nullable();
            $table->string('applicant_email_address', 191)->nullable();

            // Funding & Declarations
            $table->string('funded_details', 191)->nullable();
            $table->longText('what_funds')->nullable();
            $table->string('has_any_visited_other', 191)->nullable();
            $table->string('has_australia_or_other_visa', 191)->nullable();
            $table->string('has_visa_refused', 191)->nullable();
            
            // System Identifier
            $table->string('trn_number', 191)->index()->nullable();
            $table->string('nomination_letter_trn', 191)->nullable();
            $table->string('sponser_letter_trn', 191)->nullable();

            // Pdf Doc
            $table->string('pdf_refusal', 191)->nullable();
            $table->string('pdf_immi_refusal_notification', 191)->nullable();
            $table->string('pdf_submission_letter', 191)->nullable();
            $table->string('pdf_submission', 191)->nullable();
            $table->string('pdf_tax_invoice', 191)->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visa_applications');
    }
};
