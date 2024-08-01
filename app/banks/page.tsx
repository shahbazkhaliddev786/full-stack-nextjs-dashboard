"use client"
import DashboardLayout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import ContentLayout from "@/components/ContentLayout";
import AddModal from "@/components/banks/add";
import DeleteModal from "@/components/banks/delete";
import ViewModal from "@/components/banks/view";

const southAfrica = [
    {
        "bank": "FNB",
        "active": "Yes",
        "rank": 1,
        "default": true,
        "intlDefault": false,
        "details": "Currencies Receivable: ZAR"
    },
    {
        "bank": "Standard Bank",
        "active": "Yes",
        "rank": 2,
        "default": false,
        "intlDefault": false,
        "details": "Currencies Receivable: ZAR, USD, GBP"
    },
    {
        "bank": "ABSA",
        "active": "No",
        "rank": 3,
        "default": false,
        "intlDefault": false,
        "details": "Currencies Receivable: ZAR"
    }
]

const uk = [
    {
        "bank": "WISE",
        "active": "Yes",
        "rank": 1,
        "default": false,
        "intlDefault": true,
        "details": "Currencies Receivable: GBP"
    },
    {
        "bank": "Circle",
        "active": "Yes",
        "rank": 2,
        "default": false,
        "intlDefault": false,
        "details": "Currencies Receivable: EUR"
    },
    {
        "bank": "Simple",
        "active": "Yes",
        "rank": 3,
        "default": false,
        "intlDefault": false,
        "details": "Currencies Receivable: N/A"
    }
]

export default function Banks() {
    return (
        <DashboardLayout>
            <ContentLayout>
                <h1 className="text-2xl font-bold my-3 text-[#188331] font-aleo">Banks</h1>
                <div className="bg-white w-[100%] h-[100%] flex flex-col p-6 shadow-dark-gray">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between items-center gap-2">
                            <Button className="rounded text-black bg-[#F0F3EE] hover:bg-slate-200 p-2 flex font-lato w-[13rem]"><Image width={20} height={40} src="/banks-filter.png" alt="filter" className="text-black -ml-[4rem] mr-2" /> Filter by country</Button>
                            <Button className="rounded text-black bg-[#F0F3EE] hover:bg-slate-200 p-2 flex font-lato w-[13rem]"><Image width={20} height={40} src="/banks-filter.png" alt="filter" className="text-black -ml-[4rem] mr-2" /> Filter by banks</Button>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <div className="bg-green-500 hover:bg-green-700 w-[5rem] rounded">
                                <AddModal />
                            </div>
                            <div className="bg-red-500 hover:bg-red-700 w-[5rem] rounded">
                                <DeleteModal />
                            </div>
                        </div>
                    </div>
                    <div className=" w-[95%] flex flex-col mt-2">
                        <div><h2 className="text-xl font-bold text-green-600 my-3 font-lato">South Africa</h2></div>
                        <div className="p-3 w-full bg-[#F0F3EE] shadow-inner">
                            <Table className="bg-[#F0F3EE] py-1">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] font-lato text-sm font-bold">Bank</TableHead>
                                        <TableHead className="font-bold font-lato text-sm ">Active</TableHead>
                                        <TableHead className="font-bold font-lato text-sm ">Rank</TableHead>
                                        <TableHead className="font-bold font-lato text-sm ">Default</TableHead>
                                        <TableHead className="font-bold font-lato text-sm ">Intl. Default</TableHead>
                                        <TableHead className="font-bold font-lato text-sm  border-r-0">Details</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        southAfrica.map((row, i) => (
                                            <TableRow>
                                                <TableCell className="w-[15%] font-lato text-xs">{row.bank}</TableCell>
                                                <TableCell className="font-lato text-xs">{row.active}</TableCell>
                                                <TableCell className="font-lato text-xs">{row.rank}</TableCell>
                                                <TableCell><Input className="w-3 h-3 font-lato text-xs" type="checkbox" checked={row.default} /></TableCell>
                                                <TableCell><Input className="w-3 h-3 font-lato text-xs" type="checkbox" checked={row.intlDefault} /></TableCell>
                                                <TableCell className="flex justify-between font-lato text-xs border-r-0">{row.details} <ViewModal /> </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className=" w-[95%] flex flex-col mt-2">
                        <div><h2 className="text-xl font-bold text-green-600 my-3">United Kingdom</h2></div>
                        <div className="p-3 w-full bg-[#F0F3EE] shadow-inner">
                            <Table className="bg-[#F0F3EE]">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] font-bold text-sm font-lato">Bank</TableHead>
                                        <TableHead className="font-bold text-sm font-lato">Active</TableHead>
                                        <TableHead className="font-bold text-sm font-lato">Rank</TableHead>
                                        <TableHead className="font-bold text-sm font-lato">Default</TableHead>
                                        <TableHead className="font-bold text-sm font-lato">Intl. Default</TableHead>
                                        <TableHead className="font-bold text-sm font-lato border-r-0">Details</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                    {
                                        uk.map((row, i) => {
                                            return (
                                                <TableRow key={i}>
                                                    <TableCell className="font-medium uppercase  font-lato text-xs">{row.bank}</TableCell>
                                                    <TableCell className="font-lato text-xs">{row.active}</TableCell>
                                                    <TableCell className="font-lato text-xs">{row.rank}</TableCell>
                                                    <TableCell><Input className="w-3 h-3 font-lato text-xs" type="checkbox" checked={row.default} /></TableCell>
                                                    <TableCell><Input className="w-3 h-3 font-lato text-xs" type="checkbox" checked={row.intlDefault} /></TableCell>
                                                    <TableCell className="border-r-0 font-lato text-xs flex justify-between">{row.details} <ViewModal /> </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table></div>
                    </div>
                </div>
            </ContentLayout>
        </DashboardLayout>
    )
}