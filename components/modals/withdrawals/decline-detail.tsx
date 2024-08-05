
"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react";

export default function DeclineDetail() {

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
                    <button onClick={openAlertDialog} className="w-1.5 h-1.5 bg-black"></button>
                </AlertDialogTrigger>
                <AlertDialogContent className="flex pt-4 flex-col outline outline-green-500">
                    <AlertDialogHeader className='flex flex-col justify-center mx-auto'>
                        <AlertDialogTitle className="capitalize text-xl my-4 text-green-800">Decline Details?</AlertDialogTitle>
                        <form className="w-[30rem]">
                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                <div className='flex justify-center items-center w-[40%]'><Label className="text-xs" htmlFor="RoutingNumber">Routing Number:</Label></div>
                                <div className='w-[60%]'><Input type="text" id="RoutingNumber" name="RoutingNumber" placeholder='Sample Text' className="p-2 h-[2rem] text-xs border rounded w-[14rem] bg-gray-200 text-green-800" /></div>
                            </div>
                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                <div className='flex justify-center -ml-2 w-[40%]'><Label className="text-xs" htmlFor="bankAddress">Bank Address:</Label></div>
                                <div className='w-[60%]'><Textarea placeholder='Sample Text' className="p-2 ml-1 h-[2rem] text-xs border rounded w-[14rem] bg-gray-200 text-green-800" /></div>
                            </div>
                        </form>

                    </AlertDialogHeader>
                    <AlertDialogFooter className='mr-[9.7rem] mt-4 '>
                        <AlertDialogAction className="p-1 text-sm w-[4rem] mr-[3rem] bg-red-500 hover:bg-red-600 text-white rounded" onClick={closeAlertDialog}>Close</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}