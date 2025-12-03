import IconAndLabel from "@/Components/UI/Icon&Label"
import { router } from "@inertiajs/react"
import { File, FolderOutput, Redo } from "lucide-react"

const myApplicationsSummaryNavButtons = [
    {
        label: "New application",
        icon: <File />,
        onClick: () => {
            // alert("Clicked")
            router.visit(route("immi.create"))
        }
    },
    {
        label: "Import application",
        icon: <FolderOutput />,
        onClick: () => {
            
        }
    },
    {
        label: "Submit application",
        icon: <Redo />,
        onClick: () => {

        }
    },
]

export default function MyApplicationsSummaryNavigation() {
    return (
        <div className="w-[40%] flex justify-between cursor-pointer">
            {
                myApplicationsSummaryNavButtons.map((ele) => (
                    <IconAndLabel label={ele.label} icon={ele.icon} onClick={ele.onClick}/>
                ))
            }
        </div>
    )
}