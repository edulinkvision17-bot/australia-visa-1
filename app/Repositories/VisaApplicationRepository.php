<?php

namespace App\Repositories;
use App\Models\VisaApplication;
use Illuminate\Support\Facades\Auth;

class VisaApplicationRepository {
    public static function save($request) {
        $data = $request->all();

        $storeData = collect($data)->only([
            'role',

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
        ])->toArray();

        $storeData["organization_id"] = Auth::id();

        if (!isset($storeData["trn_number"])) {
            $storeData["trn_number"] = self::generateAlphaNumericCode();
        }

        if ($storeData['role'] === "work") {
            $year = date('Y');
            $storeData['nomination_letter_trn'] = "XXXXXX{$year}";
            $storeData['sponser_letter_trn'] = "XXXXXX{$year}";
        }

        $pdfFields = [
            'pdf_refusal',
            'pdf_immi_refusal_notification',
            'pdf_submission_letter',
            'pdf_submission',
            'pdf_tax_invoice'
        ];

        foreach ($pdfFields as $field) {
            if ($request->hasFile($field)) {
                $path = $request->file($field)->store('visa_pdfs', 'public');
                $storeData[$field] = $path;
            }
        }

        return VisaApplication::updateOrCreate([
            "id" => $data["id"] ?? NULL
        ], $storeData);
    }

    public static function generateAlphaNumericCode($length = 10) {
        $firstChar = chr(rand(65, 90)); // A–Z (capital letter)

        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $rest = '';

        for ($i = 1; $i < $length; $i++) {
            $rest .= $characters[rand(0, strlen($characters) - 1)];
        }

        return $firstChar . $rest;
    }

    public static function list($data) {
        $rowCount = $data["row_count"] ?? 10;
        $auth = Auth::user();
        if ($auth->role == "admin") {
            unset($data["row_count"]);
            return VisaApplication::where("organization_id", Auth::id())->filter($data)->paginate($rowCount);
        } else {
            return VisaApplication::where("organization_id", Auth::id())->paginate($rowCount);
        }
    }

    public static function delete($data) {
        return VisaApplication::where("id", $data['id'])->delete();
    }

    public static function detail($data) {
        return VisaApplication::where("id", $data['id'])->first();
    }

}