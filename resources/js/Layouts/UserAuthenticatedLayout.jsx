export const UserAuthenticatedLayout = ({ children, title }) => {
    console.log("Title", title);
    
    return (
        <>
            <div className="flex flex-col min-h-screen font-roboto">
                {/* Header */}
                <header className="h-[100px] bg-main-nav text-white pl-8 pr-3 py-3 flex justify-between items-center border-b border-gray-300 relative">
                    <div className="flex flex-col">
                        {/* <span className="text-sm">Australian Government</span>
                        <span className="text-base font-bold">Department of Home Affairs</span> */}
                        <img className="-translate-x-[65px] translate-y-[6px]" src="/images/main-logo.png" alt="logo" width={"200px"}/>
                    </div>
                    <div className="h-full flex items-center pt-2">
                        <div className="font-[400] text-[32px] tracking-tight">{title}</div>
                    </div>
                    <div className="absolute flex items-center gap-2 top-1 right-3 font-semibold">
                        <div className="text-[13px]">Visa, EV</div>
                        <div className="text-[13px] cursor-pointer underline">Manage Account</div>
                        <div className="text-[13px] cursor-pointer underline">Logout</div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="bg-secondary">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-gray-100 border-t border-gray-300 text-center text-xs py-3">
                    <a href="#" className="text-[#003366] hover:underline mx-2">Accessibility</a>|
                    <a href="#" className="text-[#003366] hover:underline mx-2">Copyright & Disclaimer</a>|
                    <a href="#" className="text-[#003366] hover:underline mx-2">Online Security</a>|
                    <a href="#" className="text-[#003366] hover:underline mx-2">Privacy</a>
                </footer>
            </div>
        </>
    )
}