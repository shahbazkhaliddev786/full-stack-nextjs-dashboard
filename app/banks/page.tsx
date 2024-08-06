import DashboardLayout from "@/components/Layout";
import ContentLayout from "@/components/ContentLayout";
import BanksPage from "@/components/banks/index";

export default function Banks() {
    return (
        <DashboardLayout>
            <ContentLayout>
              <BanksPage />
            </ContentLayout>
        </DashboardLayout>
    )
}