
"use client"
import DashboardLayout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react";
import Image from "next/image";
import Decline from "@/components/withdrawals/decline";
import ClientDetail from "@/components/matched/client-detail";
import DeclineDetail from "@/components/withdrawals/decline-detail";
import ContentLayout from "@/components/ContentLayout";

const data = [
    {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field"
    },
    {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field"
    },
    {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field"
    },
    {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field"
    }, {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field"
    }

];

const pending = [
    {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field",
        view: "View"
    },
    {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field",
        view: "View"
    },
    {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field",
        view: "View"
    },
    {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field",
        view: "View"
    }, {
        date: "01 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency: "GBP",
        amount: "Number Field",
        recipient: "Text Field",
        view: "View"
    }

];

export default function Withdrawals() {
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const openAlertDialog = () => {
        setIsAlertDialogOpen(true);
    };

    const closeAlertDialog = () => {
        setIsAlertDialogOpen(false);
    }

    return (
        <DashboardLayout>
            <ContentLayout>
                <h1 className="text-2xl font-bold font-aleo mb-1 text-[#188331]">Withdrawals</h1>
                <div className="w-[100%] h-[100%] flex flex-col p-2">
                    <div className="w-[95%] flex flex-col mt-2">
                        <div><h2 className="font-bold text-green-600 mb-2 uppercase font-lato">Pending Release</h2></div>
                        <div className="p-3 bg-white shadow-inner">
                            <Table className="text-xs bg-white rounded rounded-1">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[80px] font-bold font-lato">Date</TableHead>
                                        <TableHead className="font-bold font-lato">Source</TableHead>
                                        <TableHead className="font-bold font-lato">Reference</TableHead>
                                        <TableHead className="font-bold font-lato">Currency</TableHead>
                                        <TableHead className="font-bold font-lato">Total Amount</TableHead>
                                        <TableHead className="font-bold font-lato">Recipient</TableHead>
                                        <TableHead className="font-bold border-r-0">
                                            <div className="flex gap-1 items-center">
                                                <div className="w-3 h-3 ml-[19px] bg-white border flex justify-center items-center">
                                                    <div className="w-1.5 h-1.5 bg-black">
                                                        <ClientDetail />
                                                    </div>
                                                </div>
                                                <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                                                    <AlertDialogTrigger asChild>
                                                        <Button onClick={openAlertDialog} className="hover:bg-green-600 font-lato bg-green-900 rounded-none ml-[18px] h-4 text-white text-xs">Release</Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent className="flex flex-col outline outline-green-500">
                                                        <AlertDialogHeader className="flex flex-col justify-center items-center mx-auto">
                                                            <Image width={80} height={80} src="/all-withdrawals.png" alt="Release all withdrawals" />
                                                            <AlertDialogTitle className="capitalize text-xl text-green-900 font-lato">Release <span className="text-green-500 font-lato">10</span> Withdrawals?</AlertDialogTitle>
                                                            <AlertDialogDescription className="font-lato">This action cannot be undone.</AlertDialogDescription>
                                                            <AlertDialogDescription className="font-lato">
                                                                Are you sure you want to release these withdrawals.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter className="mr-[9.7rem] mt-4">
                                                            <AlertDialogAction className="p-1 text-sm font-lato w-[4rem] bg-green-500 hover:bg-green-600 text-white rounded" onClick={closeAlertDialog}>Release</AlertDialogAction>
                                                            <AlertDialogCancel className="p-1 text-sm font-lato w-[4rem] bg-red-500 hover:bg-red-600 text-white rounded" onClick={closeAlertDialog}>Cancel</AlertDialogCancel>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((row, index) => (
                                        <TableRow key={index} className="h-[1.5rem]">
                                            <TableCell className="font-medium w-[10%] font-lato">{row.date}</TableCell>
                                            <TableCell className="font-lato">{row.source}</TableCell>
                                            <TableCell className="font-lato">{row.reference}</TableCell>
                                            <TableCell className="font-lato">{row.currency}</TableCell>
                                            <TableCell className="font-lato">{row.amount}</TableCell>
                                            <TableCell className="text-green-700 underline font-lato">{row.recipient}</TableCell>
                                            <TableCell className="flex gap-1 justify-evenly items-center border-r-0">
                                                <div className="w-3 h-3 bg-white border flex justify-center items-center">
                                                    <div className="w-1.5 h-1.5 bg-black"></div>
                                                </div>
                                                <Button className="bg-green-600 h-4 text-white text-xs font-lato rounded-none">Release</Button>
                                                <Decline />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className="#F0F3EE w-[95%] flex flex-col mt-3">
                        <div><h2 className="font-bold text-red-600 uppercase w-10 font-lato">Declined Withdrawals</h2></div>
                        <div className="p-3 bg-white shadow-inner">
                            <Table className="text-xs bg-white rounded rounded-1">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[80px] font-lato font-bold">Date</TableHead>
                                        <TableHead className="font-bold font-lato">Source</TableHead>
                                        <TableHead className="font-bold font-lato">Reference</TableHead>
                                        <TableHead className="font-bold font-lato">Currency</TableHead>
                                        <TableHead className="font-bold font-lato">Total Amount</TableHead>
                                        <TableHead className="font-bold font-lato">Recipient</TableHead>
                                        <TableHead className="font-bold font-lato">Decline Reason</TableHead>
                                        <TableHead className="font-bold font-lato border-r-0">
                                            <div className="flex gap-1 items-center">
                                                <div className="w-3 h-3 ml-[10px] bg-white border flex justify-center items-center">
                                                    <div className="w-1.5 h-1.5 bg-black">
                                                        <ClientDetail />
                                                    </div>
                                                </div>
                                                <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                                                    <AlertDialogTrigger asChild>
                                                        <Button onClick={openAlertDialog} className="hover:bg-green-600 font-lato rounded-none bg-green-900  ml-[8px] h-4 text-white text-xs">Release</Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent className="flex flex-col outline outline-green-500">
                                                        <AlertDialogHeader className="flex flex-col justify-center items-center mx-auto">
                                                            <Image width={80} height={80} src="/all-withdrawals.png" alt="Release all withdrawals" />
                                                            <AlertDialogTitle className="capitalize text-xl text-green-900 font-lato">Release <span className="font-lato text-green-500">10</span> Withdrawals?</AlertDialogTitle>
                                                            <AlertDialogDescription className="font-lato">This action cannot be undone.</AlertDialogDescription>
                                                            <AlertDialogDescription className="font-lato">
                                                                Are you sure you want to release these withdrawals.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter className="mr-[9.7rem] mt-4">
                                                            <AlertDialogAction className="py-1 px-3 font-lato text-sm w-[5rem] bg-green-500 hover:bg-green-600 text-white rounded" onClick={closeAlertDialog}>Release</AlertDialogAction>
                                                            <AlertDialogCancel className="py-1 px-3 font-lato text-sm w-[5rem] bg-red-500 hover:bg-red-600 text-white rounded" onClick={closeAlertDialog}>Cancel</AlertDialogCancel>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {pending.map((row, index) => (
                                        <TableRow key={index} className="h-[1.5rem]">
                                            <TableCell className="font-medium w-[10%] font-lato">{row.date}</TableCell>
                                            <TableCell className="font-lato">{row.source}</TableCell>
                                            <TableCell className="font-lato">{row.reference}</TableCell>
                                            <TableCell className="font-lato">{row.currency}</TableCell>
                                            <TableCell className="font-lato">{row.amount}</TableCell>
                                            <TableCell className="text-green-700 underline font-lato">{row.recipient}</TableCell>
                                            <TableCell className="text-green-700 underline font-lato">{row.view}</TableCell>
                                            <TableCell className="flex gap-1 justify-evenly items-center border-r-0">
                                                <div className="w-3 h-3 bg-white border flex justify-center items-center">
                                                    <div className="w-1.5 h-1.5 bg-black"></div>
                                                </div>
                                                <Button className="bg-green-600 h-4 font-lato text-white text-xs rounded-none">Release</Button>
                                                <Decline />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </ContentLayout>
        </DashboardLayout>
    );
}
