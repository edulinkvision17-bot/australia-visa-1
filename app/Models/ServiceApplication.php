<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "title",
        "legendcom",
        "online_lodgement",
        "organisation_account_administration",
        "visa_entitlement_verification_online",
        "country",
        "organisation_registration_number",
        "registered_name",
        "same_as_address_details",

        "ol_ac_legal_practitioner",
        "ol_ac_other_organisation_user",
        "ol_ac_registered_migration_agent",
        "ol_reason_for_access",
        "ol_legal_practitioner_number",
        "ol_mern",

        "oca_ac_organisation_account_administration",
        "oca_reason_for_access",

        "vevo_ac_immigration_status",
        "vevo_ac_legal_practitioner",
        "vevo_ac_licensing_eligibility",
        "vevo_ac_medicare_eligibility",
        "vevo_ac_registered_migration_agent",
        "vevo_ac_residence_status",
        "vevo_ac_study_entitlements",
        "vevo_ac_work_entitlements",
        "vevo_reason_for_access",
        "vevo_about_vevo",
        "vevo_industry_type",
        "vevo_legal_practitioner_number",
        "vevo_mern",
        "vevo_cricos",
    ];
}
