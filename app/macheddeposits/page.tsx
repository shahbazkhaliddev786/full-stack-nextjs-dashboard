
import DashboardLayout from "@/components/Layout";
import ContentLayout from "@/components/ContentLayout";
import MatchedDepositsPage from "@/components/matched/index";

export default function MatchedDeposits() {
    return (
        <>
            <DashboardLayout>
                <ContentLayout>
                  <MatchedDepositsPage />
                </ContentLayout>
            </DashboardLayout>
        </>
    )
}