import DashboardLayout from "@/components/Layout";
import "../globals.css";
import ContentLayout from "@/components/ContentLayout";
import SettingsPage from "@/components/settings/index";

export default function Settings() {
    return (
        <>
            <DashboardLayout>
                <ContentLayout>
                  <SettingsPage />
                </ContentLayout>
            </DashboardLayout>
        </>
    )
}