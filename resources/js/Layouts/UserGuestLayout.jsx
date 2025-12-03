export const UserGuestLayout = ({children}) => {
    
    return (
        <>
            <div className="flex flex-col min-h-screen font-roboto">    
                {/* Header */}
                <header className="h-24 bg-brand-gradient text-white px-8 py-3 flex justify-between items-center border-b border-gray-300">
                    <div className="flex flex-col">
                    {/* <span className="text-sm">Australian Government</span>
                    <span className="text-base font-bold">Department of Home Affairs</span> */}
                    <img className="-translate-x-[65px]" src="/images/main-logo.png" alt="logo" width={"200px"}/>
                    </div>
                    <div className="font-montserrat text-[28px] font-medium tracking-tight">ImmiAccount</div>
                </header>

                {/* Main Content */}
                <main className="px-4 py-4 bg-bg-primary">
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