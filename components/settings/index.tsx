import SettingsTab from "@/components/settings/tabs"

export default function SettingsPage(){
    return (
        <>
            <h1 className="text-xl mb-2 font-bold font-aleo text-[#188331] capitalize">Admin Dashboard Settings</h1>
            <div>
                <SettingsTab />
            </div>
        </>
    )
}