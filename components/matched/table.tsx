"use client"
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
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import Decline from "@/components/modals/matched/decline";
import ClientDetail from "@/components/modals/matched/client-detail";
import ManualTransactions from "@/components/modals/matched/manual-transactions";

const data = [
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "GBP",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "1",
        recipient: "Text Field",
        methods: "Auto"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "USD",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "2",
        recipient: "Text Field",
        methods: "Manual"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "CAD",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "3",
        recipient: "Text Field",
        methods: "Manual"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "AUD",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "4",
        recipient: "Text Field",
        methods: "Manual"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "JPY",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "5",
        recipient: "Text Field",
        methods: "Auto"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "CHF",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "6",
        recipient: "Text Field",
        methods: "Auto"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "CNY",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "7",
        recipient: "Text Field",
        methods: "Auto"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "CNY",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "7",
        recipient: "Text Field",
        methods: "Auto"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "CNY",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "7",
        recipient: "Text Field",
        methods: "Auto"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "CNY",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "7",
        recipient: "Text Field",
        methods: "Auto"
    },
    {
        date: "1 Jan 2023",
        source: "Text Field",
        reference: "Text Field",
        currency1: "INR",
        fundingAmount: "Number Field",
        currency2: "EUR",
        receivedAmount: "8",
        recipient: "Text Field",
        methods: "Auto"
    }
];

export default function MatchedTable() {

    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const openAlertDialog = () => {
        setIsAlertDialogOpen(true);
    };

    const closeAlertDialog = () => {
        setIsAlertDialogOpen(false);
    }

    return (
        <>
            <div className="bg-white w-[100%] h-[90%] flex flex-col p-3 drop-shadow-[10px_10px_4px_#0000000D]">
                <div className="bg-[#F0F3EE] w-[95%] flex flex-col mt-4">
                    <div className="p-1 w-full bg-white">
                        <Table className="text-xs bg-white">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-bold font-lato">Date</TableHead>
                                    <TableHead className="font-bold font-lato">Source</TableHead>
                                    <TableHead className="font-bold font-lato">Reference</TableHead>
                                    <TableHead className="font-bold font-lato">Currency</TableHead>
                                    <TableHead className="font-bold font-lato">Funding Amount</TableHead>
                                    <TableHead className="font-bold font-lato">Currency</TableHead>
                                    <TableHead className="font-bold font-lato">Received Amount</TableHead>
                                    <TableHead className="font-bold font-lato">Recipient</TableHead>
                                    <TableHead className="font-bold font-lato">Methods</TableHead>
                                    <TableHead className="flex gap-1 justify-start items-center mt-2 border-r-0">

                                        <div className=" w-[20px] h-[20px] bg-white border-[#005640] border-[2px] flex justify-center items-center font-lato">
                                            <div>
                                                <ClientDetail />
                                            </div>
                                        </div>
                                        <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                                            <AlertDialogTrigger asChild>
                                                <Button onClick={openAlertDialog} className=" hover:bg-green-700 bg-[#005640] rounded-[2px] w-[100px] h-[20px] text-white text-[12px] font-lato">Release</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className="flex flex-col outline outline-green-500">
                                                <AlertDialogHeader className='flex flex-col justify-center items-center mx-auto'>
                                                    <Image width={80} height={80} src="/release-all.png" alt="Release all payments" />
                                                    <AlertDialogTitle className="capitalize text-xl text-green-900 font-lato">Release <span className="text-green-500 font-lato">12</span> Payments?</AlertDialogTitle>
                                                    <AlertDialogDescription className="font-lato">This action cannot be undone.</AlertDialogDescription>
                                                    <AlertDialogDescription className="font-lato">
                                                        Are you sure you want to release these payment.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter className='mr-[9.7rem] mt-4 '>
                                                    <AlertDialogAction className="py-1 px-3 text-sm w-[5rem] bg-green-500 hover:bg-green-600 text-white rounded font-lato" onClick={closeAlertDialog}>Delete</AlertDialogAction>
                                                    <AlertDialogCancel className="py-1 px-3 text-sm w-[5rem] bg-red-500 hover:bg-red-600 text-white rounded font-lato" onClick={closeAlertDialog}>Cancel</AlertDialogCancel>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {data.map((row, index) => (
                                    <TableRow className="h-[2rem]" key={index}>
                                        <TableCell className="w-[20rem] text-xs whitespace-nowrap font-lato">{row.date}</TableCell>
                                        <TableCell className="w-[4.5rem] flex  text-xs font-lato py-2">{row.source}</TableCell>
                                        <TableCell className="w-full text-xs font-lato">{row.reference}</TableCell>
                                        <TableCell className="font-lato">{row.currency1}</TableCell>
                                        <TableCell className="w-[19rem] text-xs whitespace-nowrap font-lato">{row.fundingAmount}</TableCell>
                                        <TableCell className="flex w-full justify-between text-xs font-lato py-2">{row.currency2}</TableCell>
                                        <TableCell className="w-full font-lato">{row.receivedAmount}</TableCell>
                                        <TableCell className="text-green-600 underline w-full text-xs font-lato">{row.recipient}</TableCell>
                                        <TableCell className="w-full font-lato">{row.methods}</TableCell>
                                        <TableCell className="flex gap-1 justify-evenly w-full items-center border-r-0 font-lato">
                                            <div className=" w-[20px] h-[20px] bg-white border-[#005640] border-[2px] flex justify-center items-center font-lato">
                                                <div>
                                                    <ManualTransactions />
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
            </div>
        </>
    )
}