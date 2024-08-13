"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <div className="bg-white w-[100%] h-[90%] flex flex-col p-3" style={{boxShadow: '10px 10px 4px 0px rgba(0, 0, 0, 0.05)'}}>
                <div className="bg-[#F0F3EE] w-[95%] flex flex-col mt-4">
                    <div className="p-1 w-full bg-white">
                        <Table className="text-xs bg-white"  >
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Date</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Source</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Reference</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Currency</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Funding Amount</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Currency</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Received Amount</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Recipient</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Methods</TableHead>
                                    <TableHead className="flex gap-1 justify-start items-center mt-2 border-r-0">
                                        <div className="w-[20px] h-[20px] bg-white border-[#005640] border-[2px] ml-[3px] flex justify-center items-center font-lato">
                                            <div>
                                                <ClientDetail />
                                            </div>
                                        </div>
                                        <Button
                                            onClick={openModal}
                                            style={{boxShadow:'4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}
                                            className="hover:bg-green-700 bg-[#005640] rounded-[2px] w-[100px] ml-1 h-[20px] text-white text-[12px] font-lato"
                                        >
                                            Release
                                        </Button>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((row, index) => (
                                    <TableRow className="h-[2rem]" key={index}>
                                        <TableCell className="w-[20rem] text-xs whitespace-nowrap font-lato text-[#14302A]">
                                            {row.date}
                                        </TableCell>
                                        <TableCell className="w-[4.5rem] flex text-xs font-lato py-2 text-[#14302A]">
                                            {row.source}
                                        </TableCell>
                                        <TableCell className="w-full text-xs font-lato text-[#14302A]">
                                            {row.reference}
                                        </TableCell>
                                        <TableCell className="font-lato text-[#14302A]">
                                            {row.currency1}
                                        </TableCell>
                                        <TableCell className="w-[19rem] text-xs whitespace-nowrap font-lato text-[#14302A]">
                                            {row.fundingAmount}
                                        </TableCell>
                                        <TableCell className="flex w-full justify-between text-xs font-lato py-2 text-[#14302A]">
                                            {row.currency2}
                                        </TableCell>
                                        <TableCell className="w-full font-lato text-[#14302A]">
                                            {row.receivedAmount}
                                        </TableCell>
                                        <TableCell className="text-[#005640] underline w-full text-xs font-lato">
                                            {row.recipient}
                                        </TableCell>
                                        <TableCell className={`w-full text-[#14302A] font-lato ${row.methods === "Manual" ? "underline text-[#005640]" : ""}`}>
                                            {row.methods}
                                        </TableCell>
                                        <TableCell className="flex gap-1 justify-evenly w-full items-center border-r-0 font-lato">
                                            <div className="w-[20px] h-[20px] bg-white border-[#005640] border-[2px] flex justify-center items-center font-lato">
                                                <div>
                                                    <ManualTransactions />
                                                </div>
                                            </div>
                                            <Button className="bg-green-600 h-[20px] w-[75px] rounded-[2px] text-white text-[12px] font-lato">
                                                Release
                                            </Button>
                                            <Decline />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Modal Dialog */}
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-30" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-[#F0F3EE] overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg p-10 border-[2px] border-[#00CE7E] bg-white rounded-lg shadow-xl transform transition-all">

                                    <div className="flex flex-col items-center">
                                        <div>
                                            <Image width={80} height={80} src="/release-all.png" alt="Release all payments" />
                                        </div>

                                        <Dialog.Title className="text-[24px] mt-[32px] text-[#005640] font-aleo">
                                            Release <span className="text-[#00CE7E] font-lato">12</span> Payments?
                                        </Dialog.Title>

                                        <div className="mt-6">
                                            <p className="font-lato">This action cannot be undone.</p>
                                            <p className="mt-2 font-lato">
                                                Are you sure you want to release these payments?
                                            </p>
                                        </div>
                                        <div className="mt-8 flex justify-center space-x-2">
                                            <Button
                                                onClick={closeModal}
                                                className="px-[20px] py-[10px] uppercase text-[14px] bg-[#00CE7E] hover:bg-green-600 text-white rounded-[10px] font-lato"
                                            >
                                                Release
                                            </Button>
                                            <Button
                                                onClick={closeModal}
                                                className="px-[20px] py-[10px] uppercase text-[14px] bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px] font-lato"
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
