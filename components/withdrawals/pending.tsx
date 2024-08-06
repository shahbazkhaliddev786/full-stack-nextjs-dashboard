"use client"
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
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import Decline from "@/components/modals/withdrawals/decline";
import ClientDetail from "@/components/modals/matched/client-detail";
import Image from "next/image";

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

export default function PendingReleaseTable() {

    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const openAlertDialog = () => {
        setIsAlertDialogOpen(true);
    };

    const closeAlertDialog = () => {
        setIsAlertDialogOpen(false);
    }

    return (
        <>
            <div className="w-[95%] flex flex-col mt-2">
                <div><h2 className="font-bold text-green-600 mb-2 uppercase font-lato">Pending Release</h2></div>
                <div className="p-3 bg-white drop-shadow-[10px_10px_4px_#0000000D]">
                    <Table className="text-xs bg-white rounded-[10px]">
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
                                        <div className=" w-[20px] h-[20px] bg-white border-[#005640] border-[2px] flex justify-center items-center font-lato">
                                            <div>
                                                <ClientDetail />
                                            </div>
                                        </div>
                                        <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                                            <AlertDialogTrigger asChild>
                                                <Button onClick={openAlertDialog} className="hover:bg-green-700 bg-[#005640] rounded-[2px] w-[100px] h-[20px] text-white text-[12px] font-lato">Release</Button>
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
                                    <TableCell className="flex gap-2 w-full items-center border-r-0 font-lato">
                                            <div className=" w-[20px] h-[20px] bg-white border-[#005640] border-[2px] flex justify-center items-center font-lato">
                                                <div>
                                                    <ClientDetail />
                                                </div>
                                            </div>
                                            <Button className="bg-green-600 h-[20px] w-[75px] rounded-[2px] text-white text-[12px] font-lato">Release</Button>
                                            <Decline />
                                        </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}