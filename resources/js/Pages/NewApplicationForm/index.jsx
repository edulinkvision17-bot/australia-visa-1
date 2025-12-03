import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import SecondaryHead from "@/Components/UI/SecondaryHead";
import axios from "axios";
import { useState } from "react";

export default function NewApplicationForm({initialData}) {
    const [formData, setFormData] = useState({...initialData})

    const handleChange = (name, value) => {
        console.log("Name", name)
        console.log("Value", value);
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async() => {
        try {
            const response = axios.post(route("visa.application.save"), {...formData})
            console.log("Response", response);
            
        } catch (error) {
            console.error("Error Saving Application Data", error)
        }
    }
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Current Location"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Current Location"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Current Location"}
                            name="current_location"
                            value={formData.current_location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Legal Status"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Legal Status"}
                            name="legal_status"
                            value={formData.legal_status}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Purpose of stay"}/>
                <div className="w-full flex flex-wrap">
                    <div className="w-full flex justify-between">
                        <div className="w-[49%]">
                            <InputLabel value={"Stream applicant is applying for"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Stream"}
                                name="stream"
                                value={formData.stream}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Reasons for visiting Australia"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Reasons for visiting Australia"}
                                name="reasons"
                                value={formData.reasons}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-[49%] mt-2">
                        <InputLabel value={"Details of any significant date on which the applicant needs to be in Australia"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Details of any significant date on which the applicant needs to be in Australia"}
                            name="details_of_significant_dates"
                            value={formData.details_of_significant_dates}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Passport details"}/>
                <div className="w-full flex flex-wrap justify-between">
                    <div className="w-full flex justify-between">
                        <div className="w-[49%]">
                            <InputLabel value={"Family Name"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Family Name"}
                                name="family_name"
                                value={formData.family_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Given Names"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Given Names"}
                                name="given_names"
                                value={formData.given_names}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between mt-2">
                        <div className="w-[49%]">
                            <InputLabel value={"Sex"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Sex"}
                                name="sex"
                                value={formData.sex}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Date of Birth"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Date of Birth"}
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between mt-2">
                        <div className="w-[49%]">
                            <InputLabel value={"Passport Number"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Passport Number"}
                                name="passport_number"
                                value={formData.passport_number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Country of Passport"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Country of Passport"}
                                name="country_of_passport"
                                value={formData.country_of_passport}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between mt-2">
                        <div className="w-[49%]">
                            <InputLabel value={"Nationality of Passport Holder"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Nationality of Passport Holder"}
                                name="nationality_of_passport_holder"
                                value={formData.nationality_of_passport_holder}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Date of issue"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Date of issue"}
                                name="date_of_issue"
                                value={formData.date_of_issue}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between mt-2">
                        <div className="w-[49%]">
                            <InputLabel value={"Date of expiry"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Date of expiry"}
                                name="date_of_expiry"
                                value={formData.date_of_expiry}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Place of issue"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Place of issue"}
                                name="place_of_issue"
                                value={formData.place_of_issue}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"National identity card"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Does this applicant have a national identity card"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Does this applicant have a national identity card"}
                            name="have_national_identity_card"
                            value={formData.have_national_identity_card}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"National identity card"}/>
                <div className="w-full flex flex-wrap justify-between">
                    <div className="w-full flex justify-between">
                        <div className="w-[49%]">
                            <InputLabel value={"Family Name on ID"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Family Name on ID"}
                                name="id_family_name"
                                value={formData.id_family_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Given Names on ID"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Given Names on ID"}
                                name="id_given_names"
                                value={formData.id_given_names}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between mt-2">
                        <div className="w-[49%]">
                            <InputLabel value={"Identification Number"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Identification Number"}
                                name="identification_number"
                                value={formData.identification_number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Country of issue"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Country of issue"}
                                name="country_of_issue"
                                value={formData.country_of_issue}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Pacific-Australia Card"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Is the applicant pacific card holder"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Is the applicant pacific card holder"}
                            name="is_pacific_card_holder"
                            value={formData.is_pacific_card_holder}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Place of birth"}/>
                <div className="w-full">
                    <div className="flex w-full justify-between">
                        <div className="w-[49%]">
                            <InputLabel value={"Town/City"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Town/City"}
                                name="town_or_city"
                                value={formData.town_or_city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"State/Province"}/>
                            <Input 
                                type={"text"}
                                placeholder={"State/Province"}
                                name="state_or_province"
                                value={formData.state_or_province}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-between mt-2">
                        <div className="w-[49%]">
                            <InputLabel value={"Country of birth"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Country of birth"}
                                name="country_of_birth"
                                value={formData.country_of_birth}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Relationship Status"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Relationship Status"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Relationship Status"}
                            name="relationship_status"
                            value={formData.relationship_status}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Other names / spellings"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Is the applicant currently, or have they ever been known by other names?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Is the applicant currently, or have they ever been known by other names?"}
                            name="does_have_other_name"
                            value={formData.does_have_other_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Citizenship"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Is this applicant a citizen of the selected country of passport?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Is this applicant a citizen of the selected country of passport?"}
                            name="is_citizen_of_passport_country"
                            value={formData.is_citizen_of_passport_country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Is this applicant a citizen of any other county?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Is this applicant a citizen of any other county?"}
                            name="is_citizen_of_other_country"
                            value={formData.is_citizen_of_other_country}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Previous travel to Australia"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Has this applicant previously travelled to Australia?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Has this applicant previously travelled to Australia?"}
                            name="has_travelled_to_autralia"
                            value={formData.has_travelled_to_autralia}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Has this applicant previosly applied for a visa to Australia?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Has this applicant previosly applied for a visa to Australia?"}
                            name="has_previously_applied_visa"
                            value={formData.has_previously_applied_visa}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Grant number"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Does this applicant have an Australian visa grant number?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Does this applicant have an Australian visa grant number?"}
                            name="have_visa_grant_number"
                            value={formData.have_visa_grant_number}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Health Examination"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Has this applicant undertaken a health examination for an Australian visa in the last 12 months?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Has this applicant undertaken a health examination for an Australian visa in the last 12 months?"}
                            name="has_undertaken_health_examination"
                            value={formData.has_undertaken_health_examination}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Travelling companions"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Are there any other persons travelling with the applicant to Australia?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Are there any other persons travelling with the applicant to Australia?"}
                            name="any_other_person_travelling"
                            value={formData.any_other_person_travelling}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Country of residence"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Country of Residence"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Country of Residence"}
                            name="country_of_residence"
                            value={formData.country_of_residence}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Residential Address"}/>
                <div className="w-full flex flex-wrap justify-between">
                    <div className="w-full flex justify-between">
                        <div className="w-[49%]">
                            <InputLabel value={"Country"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Country"}
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"Address"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Address"}
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between mt-2">
                        <div className="w-[49%]">
                            <InputLabel value={"Suburb/Town"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Suburb/Town"}
                                name="suburb_or_town"
                                value={formData.suburb_or_town}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-[49%]">
                            <InputLabel value={"State or Province"}/>
                            <Input 
                                type={"text"}
                                placeholder={"State or Province"}
                                name="state_or_province"
                                value={formData.state_or_province}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between mt-2">
                        <div className="w-[49%]">
                            <InputLabel value={"Postal Code"}/>
                            <Input 
                                type={"text"}
                                placeholder={"Postal Code"}
                                name="postal_code"
                                value={formData.postal_code}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-[#000] p-2 rounded">
                <SecondaryHead heading={"Postal address"}/>
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Is the postal address same as the residential address?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Is the postal address same as the residential address?"}
                            name="is_address_same"
                            value={formData.is_address_same}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between border-2 border-[#000]">
                <div className="w-[49%]">
                    <InputLabel value={"Email Address"}/>
                    <Input 
                        type={"text"}
                        placeholder={"Email Address"}
                        name="email_address"
                        value={formData.email_address}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full flex justify-between border-2 border-[#000]">
                <div className="w-[49%]">
                    <InputLabel value={"Does the applicant have any members of their family unit not travelling to Australia who are not Australian citizens or Australian permanent residents?"}/>
                    <Input 
                        type={"text"}
                        placeholder={""}
                        name="family_unit_not_travelling"
                        value={formData.family_unit_not_travelling}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between border-2 border-black">
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Does the applicant intent to enter Australia on more than one occassion?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Does the applicant intent to enter Australia on more than one occassion?"}
                            name="want_to_enter_more"
                            value={formData.want_to_enter_more}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Length of stay in Australia"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Length of stay in Australia"}
                            name="length_of_stay"
                            value={formData.length_of_stay}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between mt-2">
                    <div className="w-[49%]">
                        <InputLabel value={"Planned arrival date"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Planned arrival date"}
                            name="planned_arrival_date"
                            value={formData.planned_arrival_date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Planned final departure date"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Planned final departure date"}
                            name="planned_final_departure_date"
                            value={formData.planned_final_departure_date}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between border-2 border-black">
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Employment Status"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Employment Status"}
                            name="employment_status"
                            value={formData.employment_status}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Occupation Grouping"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Occupation Grouping"}
                            name="occupation_grouping"
                            value={formData.occupation_grouping}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between mt-2">
                    <div className="w-[49%]">
                        <InputLabel value={"Organisation"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Organisation"}
                            name="organisation"
                            value={formData.organisation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Start date with current employer"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Start date with current employer"}
                            name="start_date_with_current_employer"
                            value={formData.start_date_with_current_employer}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between border-2 border-black">
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Country"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Country"}
                            name="org_country"
                            value={formData.org_country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Address"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Address"}
                            name="org_address"
                            value={formData.org_address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between mt-2">
                    <div className="w-[49%]">
                        <InputLabel value={"Suburb/Town"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Suburb/Town"}
                            name="org_suburb_or_town"
                            value={formData.org_suburb_or_town}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"State or Province"}/>
                        <Input 
                            type={"text"}
                            placeholder={"State or Province"}
                            name="org_state_or_province"
                            value={formData.org_state_or_province}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between mt-2">
                    <div className="w-[49%]">
                        <InputLabel value={"Postal Code"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Postal Code"}
                            name="org_postal_code"
                            value={formData.org_postal_code}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between border-2 border-black">
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Family Name"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Family Name"}
                            name="contact_family_name"
                            value={formData.contact_family_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Given Names"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Given Names"}
                            name="contact_given_names"
                            value={formData.contact_given_names}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between mt-2">
                    <div className="w-[49%]">
                        <InputLabel value={"Position"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Position"}
                            name="contact_position"
                            value={formData.contact_position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Business phone"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Business phone"}
                            name="contact_business_phone"
                            value={formData.contact_business_phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between border-2 border-[#000]">
                <div className="w-[49%]">
                    <InputLabel value={"Email Address"}/>
                    <Input 
                        type={"text"}
                        placeholder={"Email Address"}
                        name="applicant_email_address"
                        value={formData.applicant_email_address}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between border-2 border-black">
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Give the details of how the applicant's stay in Australia will be funded?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"Give the details of how the applicant's stay in Australia will be funded?"}
                            name="funded_details"
                            value={formData.funded_details}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"What funds will the applicant have available to support their stay in Australia?"}/>
                        <Input 
                            type={"text"}
                            placeholder={"What funds will the applicant have available to support their stay in Australia?"}
                            name="what_funds"
                            value={formData.what_funds}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between border-2 border-[#000]">
                <div className="w-[49%]">
                    <InputLabel value={"In the last 5 years, has any applicant visited, or lived, outside their country of passport, for more that 3 consecutive months? Do not include time spent in Australia"}/>
                    <Input 
                        type={"text"}
                        placeholder={""}
                        name="has_any_visited_other"
                        value={formData.has_any_visited_other}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between border-2 border-black">
                <div className="w-full flex justify-between">
                    <div className="w-[49%]">
                        <InputLabel value={"Has the applicant held or does the applicant currently hold a visa to AUstralia or any other country?"}/>
                        <Input 
                            type={"text"}
                            placeholder={""}
                            name="has_australia_or_other_visa"
                            value={formData.has_australia_or_other_visa}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <InputLabel value={"Has the applicant ever had a visa for Australia or any other country refused or cancelled?"}/>
                        <Input 
                            type={"text"}
                            placeholder={""}
                            name="has_visa_refused"
                            value={formData.has_visa_refused}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between border-2 border-[#000]">
                <div className="w-[49%]">
                    <InputLabel value={"TRN Number"}/>
                    <Input 
                        type={"text"}
                        placeholder={"TRN Number"}
                        name="trn_number"
                        value={formData.trn_number}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full flex justify-between border border-[#000] p-2 rounded">
                <Button
                    label={"Submit"}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}