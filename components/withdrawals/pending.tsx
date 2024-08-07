// "use client"
// import { Button } from "@/components/ui/button";
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { useState } from "react";
// import Decline from "@/components/modals/withdrawals/decline";
// import ClientDetail from "@/components/modals/matched/client-detail";
// import Image from "next/image";

// const data = [
//     {
//         date: "01 Jan 2023",
//         source: "Text Field",
//         reference: "Text Field",
//         currency: "GBP",
//         amount: "Number Field",
//         recipient: "Text Field"
//     },
//     {
//         date: "01 Jan 2023",
//         source: "Text Field",
//         reference: "Text Field",
//         currency: "GBP",
//         amount: "Number Field",
//         recipient: "Text Field"
//     },
//     {
//         date: "01 Jan 2023",
//         source: "Text Field",
//         reference: "Text Field",
//         currency: "GBP",
//         amount: "Number Field",
//         recipient: "Text Field"
//     },
//     {
//         date: "01 Jan 2023",
//         source: "Text Field",
//         reference: "Text Field",
//         currency: "GBP",
//         amount: "Number Field",
//         recipient: "Text Field"
//     }, {
//         date: "01 Jan 2023",
//         source: "Text Field",
//         reference: "Text Field",
//         currency: "GBP",
//         amount: "Number Field",
//         recipient: "Text Field"
//     }

// ];

// export default function PendingReleaseTable() {

//     const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

//     const openAlertDialog = () => {
//         setIsAlertDialogOpen(true);
//     };

//     const closeAlertDialog = () => {
//         setIsAlertDialogOpen(false);
//     }

//     return (
//         <>
//             <div className="w-[95%] flex flex-col mt-2">
//                 <div><h2 className="font-bold text-green-600 mb-2 uppercase font-lato">Pending Release</h2></div>
//                 <div className="p-3 bg-white drop-shadow-[10px_10px_4px_#0000000D]">
//                     <Table className="text-xs bg-white rounded-[10px]">
//                         <TableHeader>
//                             <TableRow>
//                                 <TableHead className="w-[80px] font-bold font-lato">Date</TableHead>
//                                 <TableHead className="font-bold font-lato">Source</TableHead>
//                                 <TableHead className="font-bold font-lato">Reference</TableHead>
//                                 <TableHead className="font-bold font-lato">Currency</TableHead>
//                                 <TableHead className="font-bold font-lato">Total Amount</TableHead>
//                                 <TableHead className="font-bold font-lato">Recipient</TableHead>
//                                 <TableHead className="font-bold border-r-0">
//                                     <div className="flex gap-1 items-center">
//                                         <div className=" w-[20px] h-[20px] bg-white border-[#005640] border-[2px] flex justify-center items-center font-lato">
//                                             <div>
//                                                 <ClientDetail />
//                                             </div>
//                                         </div>
//                                         <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
//                                             <AlertDialogTrigger asChild>
//                                                 <Button onClick={openAlertDialog} className="hover:bg-green-700 bg-[#005640] rounded-[2px] w-[100px] h-[20px] text-white text-[12px] font-lato">Release</Button>
//                                             </AlertDialogTrigger>
//                                             <AlertDialogContent className="flex flex-col outline outline-green-500">
//                                                 <AlertDialogHeader className="flex flex-col justify-center items-center mx-auto">
//                                                     <Image width={80} height={80} src="/all-withdrawals.png" alt="Release all withdrawals" />
//                                                     <AlertDialogTitle className="capitalize text-xl text-green-900 font-lato">Release <span className="text-green-500 font-lato">10</span> Withdrawals?</AlertDialogTitle>
//                                                     <AlertDialogDescription className="font-lato">This action cannot be undone.</AlertDialogDescription>
//                                                     <AlertDialogDescription className="font-lato">
//                                                         Are you sure you want to release these withdrawals.
//                                                     </AlertDialogDescription>
//                                                 </AlertDialogHeader>
//                                                 <AlertDialogFooter className="mr-[9.7rem] mt-4">
//                                                     <AlertDialogAction className="p-1 text-sm font-lato w-[4rem] bg-green-500 hover:bg-green-600 text-white rounded" onClick={closeAlertDialog}>Release</AlertDialogAction>
//                                                     <AlertDialogCancel className="p-1 text-sm font-lato w-[4rem] bg-red-500 hover:bg-red-600 text-white rounded" onClick={closeAlertDialog}>Cancel</AlertDialogCancel>
//                                                 </AlertDialogFooter>
//                                             </AlertDialogContent>
//                                         </AlertDialog>
//                                     </div>
//                                 </TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             {data.map((row, index) => (
//                                 <TableRow key={index} className="h-[1.5rem]">
//                                     <TableCell className="font-medium w-[10%] font-lato">{row.date}</TableCell>
//                                     <TableCell className="font-lato">{row.source}</TableCell>
//                                     <TableCell className="font-lato">{row.reference}</TableCell>
//                                     <TableCell className="font-lato">{row.currency}</TableCell>
//                                     <TableCell className="font-lato">{row.amount}</TableCell>
//                                     <TableCell className="text-green-700 underline font-lato">{row.recipient}</TableCell>
//                                     <TableCell className="flex gap-2 w-full items-center border-r-0 font-lato">
//                                             <div className=" w-[20px] h-[20px] bg-white border-[#005640] border-[2px] flex justify-center items-center font-lato">
//                                                 <div>
//                                                     <ClientDetail />
//                                                 </div>
//                                             </div>
//                                             <Button className="bg-green-600 h-[20px] w-[75px] rounded-[2px] text-white text-[12px] font-lato">Release</Button>
//                                             <Decline />
//                                         </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </div>
//             </div>
//         </>
//     )
// }

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
import { useState, Fragment } from "react";
import ClientDetail from "@/components/modals/matched/client-detail";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import DeclineModal from "@/components/modals/withdrawals/decline";

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
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

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
                                        <Button onClick={toggleModal} className="hover:bg-green-700 bg-[#005640] rounded-[2px] w-[100px] h-[20px] text-white text-[12px] font-lato">Release</Button>
                                        <Transition appear show={isOpen} as={Fragment}>
                                            <Dialog as="div" className="relative z-50" onClose={toggleModal}>
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
                                                    <div className="flex items-center justify-center min-h-full text-center">
                                                        <Transition.Child
                                                            as={Fragment}
                                                            enter="ease-out duration-300"
                                                            enterFrom="opacity-0 scale-95"
                                                            enterTo="opacity-100 scale-100"
                                                            leave="ease-in duration-200"
                                                            leaveFrom="opacity-100 scale-100"
                                                            leaveTo="opacity-0 scale-95"
                                                        >
                                                            <Dialog.Panel className="w-full max-w-lg p-7 bg-white rounded-[10px] border-[2px] border-[#00CE7E] shadow-xl transform transition-all">
                                                                <div className="mt-2 text-sm flex flex-col items-center">
                                                                    <Image width={90} height={90} src="/all-withdrawals.png" alt="Release all withdrawals" />
                                                                    <p className="capitalize text-xl text-green-900 font-lato mt-8">Release <span className="text-green-500 font-lato">10</span> Withdrawals?</p>
                                                                    <p className="font-lato mt-[20px]">This action cannot be undone.</p>
                                                                    <p className="font-lato mt-[10px]">
                                                                        Are you sure you want to release these withdrawals.
                                                                    </p>
                                                                </div>
                                                                <div className="mt-[50px] flex justify-center space-x-2">
                                                                    <Button
                                                                        onClick={toggleModal}
                                                                        className="text-[14px] w-[99.77px] h-[42.26px] rounded-[10px] font-lato bg-[#00CE7E] hover:bg-green-700 text-white"
                                                                    >
                                                                        Release
                                                                    </Button>
                                                                    <Button
                                                                        onClick={toggleModal}
                                                                        className="text-[14px] w-[99.77px] h-[42.26px] font-lato bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]"
                                                                    >
                                                                        Cancel
                                                                    </Button>
                                                                </div>
                                                            </Dialog.Panel>
                                                        </Transition.Child>
                                                    </div>
                                                </div>
                                            </Dialog>
                                        </Transition>
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
                                        <DeclineModal />
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
