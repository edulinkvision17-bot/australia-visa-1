import { useState } from "react"
import SingleList from "./SingleList"

export default function MainList({applicants}) {
    const [expanded, setExpanded] = useState(null)

    console.log("Expanded", expanded);

    function formatDate(dateString) {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }
    
    return (
        <div className="flex flex-col gap-1">
            {
                applicants.map((ele, i) => (
                    <div key={i}>
                        <SingleList index={i} name={`${ele.family_name} ${ele.given_names}`} dob={ele.dob} type={ele.role} referenceNumber={ele.trn_number} lastUpdated={formatDate(ele.updated_at)} dateSubmitted={formatDate(ele.created_at)} typeDetail={`${ele.role === "Visitor" ? "Visitor Visa (600)" : "Work Visa (482)"}`} status= {"Submitted"} expanded={expanded} setExpanded={setExpanded}/>
                    </div>
                ))
            }
        </div>
    )
}