import DashboardLayout from "@/components/Layout";
import ContentLayout from "@/components/ContentLayout";
import UnmatchedPage from "@/components/unmatched/index";

export default function UnmatchedDeposits() {
    return (
        <>
            <DashboardLayout>
                <ContentLayout>
                    <UnmatchedPage />
                </ContentLayout>
            </DashboardLayout>
        </>
    )
}