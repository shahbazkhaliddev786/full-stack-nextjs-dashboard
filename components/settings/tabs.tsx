import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsTab() {
    return (
        <>
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

                <div className="bg-white w-[100%] h-[28rem] flex flex-col drop-shadow-[10px_10px_4px_#0000000D]">
                    <TabsContent value="users">
                        <div className="flex justify-end pr-4">
                            <div className="flex justify-between items-center gap-2">
                                <Button className="rounded-[10px] font-lato bg-[#00CE7E] hover:bg-green-700 w-[100px] h-[40px]">Add</Button>
                                <Button className="rounded-[10px] font-lato bg-[#AA322D] hover:bg-red-900 w-[100px] h-[40px]">Delete</Button>
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
        </>
    )
}