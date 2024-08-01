import DashboardLayout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "../globals.css";
import ContentLayout from "@/components/ContentLayout";


export default function Settings() {
    return (
        <>
            <DashboardLayout>
                <ContentLayout>
                    <h1 className="text-xl mb-2 font-bold font-aleo text-[#188331] capitalize">Admin Dashboard Settings</h1>
                    <div>
                        <Tabs defaultValue="users">
                            <TabsList className="rounded-none">
                                <TabsTrigger value="users" className="tabs-corner font-lato">Users</TabsTrigger>
                                <TabsTrigger value="company" className="tabs-corner font-lato">Company</TabsTrigger>
                                <TabsTrigger value="banks" className="tabs-corner font-lato">Banks</TabsTrigger>
                                <TabsTrigger value="currencies" className="tabs-corner font-lato">Currencies</TabsTrigger>
                                <TabsTrigger value="restrictions" className="tabs-corner font-lato">Restrictions</TabsTrigger>
                                <TabsTrigger value="limits" className="tabs-corner font-lato">Limits</TabsTrigger>
                                <TabsTrigger value="messages" className="tabs-corner font-lato">Messages</TabsTrigger>
                            </TabsList>

                            <div className="bg-white w-[100%] h-[28rem] flex flex-col">
                                <TabsContent value="users">
                                    <div className="flex justify-end pr-4">
                                        <div className="flex justify-between items-center gap-2">
                                            <Button className="rounded font-lato bg-green-500 hover:bg-green-700 p-2 w-[4rem]">Add</Button>
                                            <Button className="rounded font-lato bg-red-500 hover:bg-red-700 p-2 w-[4rem]">Delete</Button>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="company" className="p-3 font-lato">Company</TabsContent>
                                <TabsContent value="banks" className="p-3 font-lato">Banks</TabsContent>
                                <TabsContent value="currencies" className="p-3 font-lato">Currencies</TabsContent>
                                <TabsContent value="restrictions" className="p-3 font-lato">Restrictions</TabsContent>
                                <TabsContent value="limits" className="p-3 font-lato">Limits</TabsContent>
                                <TabsContent value="messages" className="p-3 font-lato">Messages</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </ContentLayout>
            </DashboardLayout>
        </>
    )
}