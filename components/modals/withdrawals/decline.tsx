
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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Decline() {

    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const openAlertDialog = () => {
        setIsAlertDialogOpen(true);
    };

    const closeAlertDialog = () => {
        setIsAlertDialogOpen(false);
    }

    return (
        <>
            <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                <AlertDialogTrigger asChild>
                    <Button onClick={openAlertDialog} className="text-xs h-7 font-lato text-red-500 bg-white">X</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="flex pt-4 flex-col outline outline-green-500">
                    <AlertDialogHeader className='flex flex-col justify-center items-center mx-auto'>
                        <Image width={80} height={80} src="/decline.png" alt="Release all payments" />
                        <AlertDialogTitle className="capitalize text-xl my-4 text-red-600 font-lato">Decline Withdrawals?</AlertDialogTitle>
                        <AlertDialogDescription className="font-lato">
                            Please provide reason to decline withdrawal:
                        </AlertDialogDescription>
                        <Textarea placeholder='Sample Text' className="p-1 font-lato w-[17rem] h-[2rem] text-xs border rounded bg-gray-200 text-green-800" />
                    </AlertDialogHeader>
                    <AlertDialogFooter className='mr-[9.7rem] mt-4 '>
                        <AlertDialogAction className="py-1 px-3 font-lato text-sm w-[5rem] bg-green-500 hover:bg-green-600 text-white rounded" onClick={closeAlertDialog}>Decline</AlertDialogAction>
                        <AlertDialogCancel className="py-1 px-3 font-lato text-sm w-[5rem] bg-red-500 hover:bg-red-600 text-white rounded" onClick={closeAlertDialog}>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}