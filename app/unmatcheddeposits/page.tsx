import ContentLayout from "@/components/ContentLayout";
import DashboardLayout from "@/components/Layout";
import UnMatchedDeposits from "@/components/unmatcheddeposits/index";

export default function UnmatchedDepositsInner() {
    return (
        <>
            <DashboardLayout>
                <ContentLayout>
                    <UnMatchedDeposits />
                </ContentLayout>
            </DashboardLayout>
        </>
    )
}