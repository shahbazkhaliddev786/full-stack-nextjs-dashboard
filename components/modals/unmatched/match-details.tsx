
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

export default function MatchDetails() {

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
                    <Button onClick={openAlertDialog} className=" text-white font-lato bg-green-500 hover:bg-green-700 rounded-none py-0 h-6 px-4">Match</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="flex pt-4 flex-col outline outline-green-500">
                    <AlertDialogHeader className='flex flex-col justify-center items-center mx-auto'>
                        <Image width={80} height={80} src="/match.png" alt="Release all payments" />
                        <AlertDialogTitle className="capitalize text-xl my-4 text-green-800 font-lato">Match Details?</AlertDialogTitle>
                        <AlertDialogDescription className="font-lato">
                            Please provide reason for client / deposit match:
                        </AlertDialogDescription>
                        <Textarea placeholder='Sample Text' className="p-1 w-[20rem] h-[2rem] text-xs border rounded bg-gray-200 text-green-800" />
                        
                            <AlertDialogDescription className="flex font-lato text-xs gap-1">
                                <span className="mt-1">Upload proof of payment:</span>
                                <div>
                                    <input type="file" className="relative font-lato w-1 px-0 rounded-none bg-[#8C9B91] "/>
                                    <button className="uppercase font-lato bg-[#bcc0bd] h-[1.8rem] text-xs -ml-1 w-[5rem] absolute">SELECT FILE</button>
                                </div>
                                <span className="ml-[4.7rem] mt-1 font-lato">no file uploaded</span>
                            </AlertDialogDescription>
                        
                    </AlertDialogHeader>
                    <AlertDialogFooter className='mr-[9.7rem] mt-4 '>
                        <AlertDialogAction className="py-1 px-3 font-lato text-sm w-[5rem] bg-green-500 hover:bg-green-600 text-white rounded" onClick={closeAlertDialog}>Match</AlertDialogAction>
                        <AlertDialogCancel className="py-1 px-3 font-lato text-sm w-[5rem] bg-red-500 hover:bg-red-600 text-white rounded" onClick={closeAlertDialog}>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

