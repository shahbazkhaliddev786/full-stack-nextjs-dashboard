import DashboardCard from "@/components/dashboard/card";
import MiniCard from "@/components/dashboard/mini";

export default function RightSide() {
    return (
        <>
            <div className="flex flex-col gap-[15px] w-[35%]">
                <DashboardCard
                    heading="Due To Trading Account"
                    headingColor="#14302A"
                    backgroundColor="#FFFFFF"
                    textColor="#005640"
                    spanTextColor="#14302A"
                    spanText="999,999,999,999,999.99"
                />

                <DashboardCard
                    heading="Due From Trading Account"
                    headingColor="#14302A"
                    backgroundColor="#FFFFFF"
                    textColor="#005640"
                    spanText="999,999,999,999,999.99"
                    spanTextColor="#14302A"
                />

                <DashboardCard
                    heading="Total Cash"
                    headingColor="#14302A"
                    backgroundColor="#FFFFFF"
                    textColor="#005640"
                    spanText="999,999,999,999,999.99"
                    spanTextColor="#14302A"
                />

                <div className="flex justify-between items-center gap-8">
                    <MiniCard text="New Accounts" spanText={9999999999} />
                    <MiniCard text="1st Time Deposits" spanText={999999999999} />
                </div>
            </div>

        </>
    )
}