import CustomHead from "@/Components/UI/CustomHead";
import TopNav from "@/Components/UI/TopNav";
import { UserAuthenticatedLayout } from "@/Layouts/UserAuthenticatedLayout";
import MyApplicationSummaryNavigtion from "./MyApplicationSummaryNavigtion";
import Search from "./Search";
import AdvancedSearch from "./AdvancedSearch";
import { ListOfApplications } from "./ListOfApplications";

export default function ClientLanding() {
    return (
        <>
            <UserAuthenticatedLayout title="ImmiAccount">
                <TopNav />
                <div className="p-[12px]">
                    <div className="bg-bg-secondary">
                        <CustomHead heading={"My applications summary"}/>
                        <div className="p-4">
                            <MyApplicationSummaryNavigtion />
                            <div className="flex gap-2 items-center pt-6">
                                <div className="w-[200px]">
                                    <Search />   
                                </div> 
                                <div>
                                    <AdvancedSearch />
                                </div>
                            </div>
                            <div className="mt-2">
                                <ListOfApplications />
                            </div>
                        </div>
                    </div>
                </div>
            </UserAuthenticatedLayout>
        </>
    )
}