import { Info } from "lucide-react";

export function Information() {
    return (
        <div className="mb-2">
            <div className="bg-bg-infoHead text-text-textDark px-4 py-2 flex items-center gap-2">
                <Info size={16} className="font-bold"/>
                <span className="font-bold">
                    Information
                </span>
            </div>
            <div className="px-4 pt-2 pb-8 border border-bg-infoHead">
                <h1 className="text-[24px] font-bold text-text-primary mb-2">Planned system maintenance</h1>
                <div className="mb-3">
                    <p className="text-[16px] mb-2">
                        <span className="font-bold">ImmiAccount</span> will be unavailable from:
                    </p>
                    <ul className="list-disc pl-10 text-[16px] mb-2">
                        <li>
                            Midnight to 4 am (AEST) Monday 15 September 2025
                        </li>
                    </ul>
                    <p className="text-[16px] mb-2">
                        Please refer to System Maintenance to view a complete list of online services that will be affected.
                    </p>
                    <p className="text-[16px]">
                        We apologise for any inconvenience.
                    </p>
                </div>
                <h1 className="text-[24px] font-bold text-text-primary mb-2">
                    Multi-factor authentication (MFA) is now required to access ImmiAccount
                </h1>
                <p className="text-[16px]">
                    For more information see <span className="underline decoration-text-primary text-text-primary cursor-pointer">Multi-factor Authentication (MFA) is now live.</span>
                </p>
            </div>
        </div>
    )
}