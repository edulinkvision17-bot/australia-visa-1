<?php

namespace App\Http\Repositories;
use App\Models\User;

class ImmiAccountRepository {
    public function create($data) {
        switch ($data['step']) {
            case 1:
                $verificationCode = random_int(100000, 999999);
                $verificationCode = 123456;

                $user = User::firstOrCreate([
                    'email' => $data['email']
                ], [
                    'email' => $data['email'],
                    'opt' => $verificationCode,
                    'type' => "register",
                ]);
                break;

            case 2:
                $user = User::where('email', $data['email'])->first();
                if ($user->opt == $data['otp'] && $user->type == 'register') {
                    $user->opt = null;
                    $user->type = null;
                    $user->save();
                } else {
                    throw new \Exception("Error Processing Request", 1);
                }
                break;
                
            case 3:
                $user = User::where('email', $data['email'])->first();
                if ($data['role'] === "individual") {
                    $user->update([
                        'role' => $data['role'],
                        'family_name' => $data['family_name'],
                        'given_names' => $data['given_names'],
                        'phone' => $data['phone'],
                        'mobile_phone' => $data['mobile_phone'],
                        'online_service' => $data['online_service'],
                    ]);
                } else {
                    $user->update([
                        "role" => $data['role'],
                        "family_name" => $data['family_name'],
                        "given_names" => $data['given_names'],
                        "phone" => $data['phone'],
                        "mobile_phone" => $data['mobile_phone'],
                        "online_service" => $data['online_service'],
                    ]);
    
                    $user->addressDetail()->create([
                        "address" => $data['address'],
                        "address2" => $data['address2'],
                        "suburb_town" => $data['suburb_town'],
                        "country" => $data['country'],
                        "state" => $data['state'],
                        "postcode_zip" => $data['postcode_zip'],
                        "type" => 'address_detail',
                    ]);
    
                    if ($data['same_as_address_details'] == false) {
                        $user->serviceApplication()->create([
                            "address" => $data['registered_address'],
                            "address2" => $data['registered_address2'],
                            "suburb_town" => $data['registered_suburb_town'],
                            "country" => $data['registered_country'],
                            "state" => $data['registered_state'],
                            "postcode_zip" => $data['registered_postcode_zip'],
                            "type" => 'registered_office',
                        ]);
                    } else {
                        $user->addressDetail()->create([
                            "address" => $data['address'],
                            "address2" => $data['address2'],
                            "suburb_town" => $data['suburb_town'],
                            "country" => $data['country'],
                            "state" => $data['state'],
                            "postcode_zip" => $data['postcode_zip'],
                            "type" => 'registered_office',
                        ]);
                    }
    
                    $user->serviceApplication()->create([
                        "title" => $data['title'],
                        "legendcom" => $data['legendcom'],
                        "online_lodgement" => $data['online_lodgement'],
                        "organisation_account_administration" => $data['organisation_account_administration'],
                        "visa_entitlement_verification_online" => $data['visa_entitlement_verification_online'],
                        "country" => $data['country'],
                        "organisation_registration_number" => $data['organisation_registration_number'],
                        "registered_name" => $data['registered_name'],
                        "same_as_address_details" => $data['same_as_address_details'],
    
                        "ol_ac_legal_practitioner" => $data['ol_ac_legal_practitioner'],
                        "ol_ac_other_organisation_user" => $data['ol_ac_other_organisation_user'],
                        "ol_ac_registered_migration_agent" => $data['ol_ac_registered_migration_agent'],
                        "ol_reason_for_access" => $data['ol_reason_for_access'],
                        "ol_legal_practitioner_number" => $data['ol_legal_practitioner_number'],
                        "ol_mern" => $data['ol_mern'],
    
                        "oca_ac_organisation_account_administration" => $data['oca_ac_organisation_account_administration'],
                        "oca_reason_for_access" => $data['oca_reason_for_access'],
    
                        "vevo_ac_immigration_status" => $data['vevo_ac_immigration_status'],
                        "vevo_ac_legal_practitioner" => $data['vevo_ac_legal_practitioner'],
                        "vevo_ac_licensing_eligibility" => $data['vevo_ac_licensing_eligibility'],
                        "vevo_ac_medicare_eligibility" => $data['vevo_ac_medicare_eligibility'],
                        "vevo_ac_registered_migration_agent" => $data['vevo_ac_registered_migration_agent'],
                        "vevo_ac_residence_status" => $data['vevo_ac_residence_status'],
                        "vevo_ac_study_entitlements" => $data['vevo_ac_study_entitlements'],
                        "vevo_ac_work_entitlements" => $data['vevo_ac_work_entitlements'],
                        "vevo_reason_for_access" => $data['vevo_reason_for_access'],
                        "vevo_about_vevo" => $data['vevo_about_vevo'],
                        "vevo_industry_type" => $data['vevo_industry_type'],
                        "vevo_legal_practitioner_number" => $data['vevo_legal_practitioner_number'],
                        "vevo_mern" => $data['vevo_mern'],
                        "vevo_cricos" => $data['vevo_cricos'],
                    ]);
                }

            case 4:
                $user = User::where('email', $data['email'])->first();
                if (in_array($data['role'], ['individual', 'organisation'])) {
                    $user->update([
                        'password' => $data['password']
                    ]);

                    $user->secretQuestion()->create([
                        'question_1' => $data['question_1'],
                        'answer_1' => $data['answer_1'],
                        'question_2' => $data['question_2'],
                        'answer_2' => $data['answer_2'],
                        'question_3' => $data['question_3'],
                        'answer_3' => $data['answer_3'],
                    ]);
                }
                break;
                
            default:
                break;
        }
    } 
}

?>