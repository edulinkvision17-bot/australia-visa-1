<?php

namespace App\Models;

use App\Traits\UniversalFilterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisaApplication extends Model
{
    use HasFactory, UniversalFilterable;

    protected $fillable = [
        "organization_id",
        "role",

        'current_location',
        'legal_status',
        'stream',
        'reasons',
        'details_of_significant_dates',

        // Personal Details
        'family_name',
        'given_names',
        'sex',
        'dob',

        // Passport Details
        'passport_number',
        'country_of_passport',
        'nationality_of_passport_holder',
        'date_of_issue',
        'date_of_expiry',
        'place_of_issue',

        // Identity Card
        'have_national_identity_card',
        'id_family_name',
        'id_given_names',
        'identification_number',
        'country_of_issue',

        // Birth & Origin
        'town_or_city',
        'state_or_province',
        'country_of_birth',
        'relationship_status',
        'does_have_other_name',
        'is_citizen_of_passport_country',
        'is_citizen_of_other_country',

        // Travel History
        'has_travelled_to_australia',
        'has_previously_applied_visa',
        'has_australian_visa_grant_number',
        'has_undertaken_health_examination',
        'any_other_person_travelling',

        // Contact Details
        'country_of_residence',
        'country',
        'address',
        'suburb_or_town',
        'postal_code',
        'is_address_same',
        'email_address',

        // Authorization & Group
        'family_unit_not_travelling',

        // Visit Details
        'want_to_enter_more',
        'length_of_stay',
        'planned_arrival_date',
        'planned_final_departure_date',
        'will_undertake_a_course',
        'will_visit_any_relative',

        // Employment
        'employment_status',
        'occupation_grouping',
        'organisation',
        'start_date_with_current_employer',
        'org_country',
        'org_address',
        'org_suburb_or_town',
        'org_state_or_province',
        'org_postal_code',

        // Contact Person in Organisation
        'contact_family_name',
        'contact_given_names',
        'contact_position',
        'contact_business_phone',
        'applicant_email_address',

        // Funding & Declarations
        'funded_details',
        'what_funds',
        'has_any_visited_other',
        'has_australia_or_other_visa',
        'has_visa_refused',

        // System Identifier
        'trn_number',
        'nomination_letter_trn',
        'sponser_letter_trn',

        // Pdf Link Store

        "pdf_refusal",
        "pdf_immi_refusal_notification",
        "pdf_submission_letter",
        "pdf_submission",
        "pdf_tax_invoice",
        "status"
    ];

}
