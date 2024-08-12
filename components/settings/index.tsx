import SettingsTab from "@/components/settings/tabs"

export default function SettingsPage(){
    return (
        <>
            <h1 className="text-[40px] mb-2 font-bold font-aleo text-[#005640] capitalize">Admin Dashboard Settings</h1>
            <div>
                <SettingsTab />
            </div>
        </>
    )
}