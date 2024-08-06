import DashboardLayout from "@/components/Layout";
import ContentLayout from "@/components/ContentLayout";
import WithdrawalsPage from "@/components/withdrawals/index";

export default function Withdrawals() {
    return (
        <DashboardLayout>
            <ContentLayout>
                <WithdrawalsPage />
            </ContentLayout>
        </DashboardLayout>
    );
}
