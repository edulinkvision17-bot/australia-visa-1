import CustomHead from "@/Components/UI/CustomHead";
import TopNav from "@/Components/UI/TopNav";
import { UserAuthenticatedLayout } from "@/Layouts/UserAuthenticatedLayout";
import NewApplicationForm from "../NewApplicationForm";

const initialData = {
        current_location: "",
        legal_status: "",
        stream: "",
        reasons: "",
        details_of_significant_dates: "",
        family_name: "",
        given_names: "",
        sex: "",
        dob: "",
        passport_number: "",
        country_of_passport: "",
        nationality_of_passport_holder: "",
        date_of_issue: "",
        date_of_expiry:  "",
        place_of_issue: "",
        have_national_identity_card: "",
        id_family_name: "",
        id_given_names: "",
        identification_number: "",
        country_of_issue: "",
        // is_pacific_card_holder: "", 
        town_or_city: "",
        country_of_birth: "",
        relationship_status: "",
        does_have_other_name: "",
        is_citizen_of_passport_country: "",
        is_citizen_of_other_country: "",
        has_travelled_to_autralia: "",
        has_previously_applied_visa: "",
        has_australian_visa_grant_number: "",
        has_undertaken_health_examination: "",
        any_other_person_travelling: "", //string
        country_of_residence: "", //string
        country: "", //string
        address: "", //longtext
        suburb_or_town: "", //String
        state_or_province: "", //String
        postal_code: "", //String
        is_address_same: "",//String
        email_address: "", //String
        family_unit_not_travelling: "", //String
        want_to_enter_more: "", //String
        length_of_stay: "", //String
        planned_arrival_date: "", //String
        planned_final_departure_date: "", //String
        will_undertake_a_course: "", //String
        will_visit_any_relative: "", //String
        employment_status: "", //String
        occupation_grouping: "", //String
        organisation: "", //String
        start_date_with_current_employer: "", //String
        org_country: "", //String
        org_address: "", //longtext
        org_suburb_or_town: "", //String
        org_state_or_province: "", //String
        org_postal_code: "", //String
        contact_family_name: "", //String
        contact_given_names: "", //String
        contact_position: "", //String
        contact_business_phone: "", //String
        applicant_email_address: "", //String
        funded_details: "", //String
        what_funds: "", //longtext
        has_any_visited_other: "", //String
        has_australia_or_other_visa: "", //String
        has_visa_refused: "", //String
        trn_number: "", //String
        role: "Visitor", //Visitor / Work
        status: "Submitted"
    }

export default function VisitorApplication() {
    return (
        <>
            <UserAuthenticatedLayout title="ImmiAccount">
                <TopNav />
                <div className="p-4">
                    <div className="bg-bg-secondary">
                        <CustomHead heading={"Visitor Application"}/>
                        <div className="p-2">
                            <NewApplicationForm initialData={initialData}/>
                        </div>
                    </div>
                </div>
            </UserAuthenticatedLayout>
        </>
    )
}