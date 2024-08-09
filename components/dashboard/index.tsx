import LeftSide from "@/components/dashboard/left";
import RightSide from "@/components/dashboard/right";

export default function DashboardHomePage() {
    return (
        <>
            <h1 className="text-[40px] font-bold font-aleo mb-4 text-[#005640]">Dashboard</h1>
            <div className="flex gap-[180px]">
                <LeftSide />
                <RightSide />
            </div>
        </>
    )
}