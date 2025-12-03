import SecondaryHead from "@/Components/UI/SecondaryHead";
import { ApplicationFilter } from "./ApplicationFilter";
import { Pagination } from "./Pagination";
import MainList from "./MainList";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function ListOfApplications() {
    const [applicantsList, setApplicantsList] = useState([])

    const applicants = [
        {   
            referenceNumber: "EGP7WOETSZ",
            lastUpdated: "16 Jun 2025",
            dateSubmitted: "09 Jun 2025",
            name: "PRITPAL SINGH",
            dob: "2 Jul 2000",
            type: "Visitor",
            typeDetail: "Visitor Visa (600)",
            status: "Finalised"
        },
        {
            referenceNumber: "EGP7WOETSZ2",
            lastUpdated: "16 Jun 20252",
            dateSubmitted: "09 Jun 20252",
            name: "RAMPAL SINGH",
            dob: "2 Jul 2000",
            type: "Visitor",
            typeDetail: "Visitor Visa (600)2",
            status: "Finalised"
        },
    ]

    const getApplications = async() => {
        try {
            const response = await axios.post(route("visa.application.list"), {})
            console.log("Repsonse", response);
            setApplicantsList(response.data.data.data)
        } catch (error) {
            console.error("Error getting Applications")
        }
    }

    console.log("Applicants List", applicantsList);
    

    useEffect(() => {
        getApplications()
    }, [])
    return (
        <>
            <SecondaryHead 
                heading="List of applications"
            />
            <div className="flex items-center justify-between mb-1">
                <div className="mt-1">
                    <ApplicationFilter />
                </div>
                {applicants.length > 0 && <div>
                    <Pagination />
                </div>}
            </div>
            {applicantsList.length > 0 && <div>
                <MainList applicants={applicantsList}/>
            </div>}
            {applicantsList.length > 0 && <div className="w-full flex justify-end mt-5">
                <Pagination />
            </div>}
            {
                ([null, undefined, ""].includes(applicantsList) || applicantsList.length === 0) && (
                    <p className="pt-5 text-[13px] font-semibold">
                        No results found
                    </p>
                )
            }
        </>
    )
}