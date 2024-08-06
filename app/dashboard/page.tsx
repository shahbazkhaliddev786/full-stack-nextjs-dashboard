import ContentLayout from "@/components/ContentLayout";
import DashboardLayout from "@/components/Layout";
import DashboardHomePage from "@/components/dashboard/index";

export default function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <ContentLayout>
          <DashboardHomePage />
        </ContentLayout>
      </DashboardLayout>
    </>
  )
}