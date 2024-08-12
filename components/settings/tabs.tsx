import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsTab() {
    return (
        <>
            <Tabs defaultValue="users">
                <TabsList className="rounded-none">
                    <TabsTrigger value="users" className="tabs-corner font-lato w-[130] h-[39] bg-[#EAEAEA]">Users</TabsTrigger>
                    <TabsTrigger value="company" className="tabs-corner font-lato w-[130] h-[39] bg-[#EAEAEA]">Company</TabsTrigger>
                    <TabsTrigger value="banks" className="tabs-corner font-lato w-[130] h-[39] bg-[#EAEAEA]">Banks</TabsTrigger>
                    <TabsTrigger value="currencies" className="tabs-corner font-lato w-[130] h-[39] bg-[#EAEAEA]">Currencies</TabsTrigger>
                    <TabsTrigger value="restrictions" className="tabs-corner font-lato w-[130] h-[39] bg-[#EAEAEA]">Restrictions</TabsTrigger>
                    <TabsTrigger value="limits" className="tabs-corner font-lato w-[130] h-[39] bg-[#EAEAEA]">Limits</TabsTrigger>
                    <TabsTrigger value="messages" className="tabs-corner font-lato w-[130] h-[39] bg-[#EAEAEA]">Messages</TabsTrigger>
                </TabsList>

                <div style={{boxShadow:'10px 10px 4px 0px rgba(0, 0, 0, 0.05)'}} className="bg-white pt-[28px] pr-[27px] w-[100%] h-[25rem] flex flex-col">
                    <TabsContent value="users">
                        <div className="flex justify-end pr-4">
                            <div className="flex justify-between items-center gap-[19px]">
                                <Button style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1'}} className="bg-[#00CE7E] hover:bg-green-700 pt-[10px] pb-[11px] px-[32px] text-[16px] cursor-pointer font-lato text-white uppercase rounded-[10px] focus:outline-none">Add</Button>
                                <Button style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1'}} className="bg-[#AA322D] hover:bg-red-900 pt-[10px] pb-[11px] px-[20px] text-[16px] cursor-pointer font-lato text-white uppercase rounded-[10px] focus:outline-none">Delete</Button>
                                
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