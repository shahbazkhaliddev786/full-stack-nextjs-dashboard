import ContentLayout from "@/components/ContentLayout";
import DashboardLayout from "@/components/Layout";
import LeftSide from "@/components/dashboard/left";
import RightSide from "@/components/dashboard/right";

export default function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <ContentLayout>
          <h1 className="text-2xl font-bold font-aleo mb-4 text-[#005640]">Dashboard</h1>
          <div className="flex gap-[200px]">
            <LeftSide />
            <RightSide />
          </div>
        </ContentLayout>
      </DashboardLayout>
    </>
  )
}