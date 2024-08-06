
"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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

export default function DeleteModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const openAlertDialog = () => {
        setIsAlertDialogOpen(true);
    };

    const closeAlertDialog = () => {
        setIsAlertDialogOpen(false);
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="p-2 w-[100%] h-[100%] uppercase text-[16px] text-white"
            >
                Delete
            </button>
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

                    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl transform transition-all">
                                    <Dialog.Title className="text-lg font-lato capitalize font-medium text-left leading-6 text-red-600">
                                        Delete Bank Account
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm">
                                        <form>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="accountName">Account Name:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="accountName" name="accountName" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800 placeholder:text-red-600" /></div>
                                            </div>
                                           <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[16rem] text-xs'><Label className="text-xs font-lato" htmlFor="ach">ACH And Wire Routing Number:</Label></div>
                                                <div className='w-[14] mr-[3.4rem]'><Input type="text" id="ach" name="ach" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800 placeholder:text-red-600" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="AccountNumber">Account Number:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="AccountNumber" name="AccountNumber" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800 placeholder:text-red-600" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="RoutingNumber">Routing Number:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="RoutingNumber" name="RoutingNumber" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800 placeholder:text-red-600" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end w-[50%]'><Label className="text-xs font-lato" htmlFor="bankAddress">Bank Address:</Label></div>
                                                <div className='w-[50%]'><Textarea placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800 placeholder:text-red-600" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="Reference">Reference:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="Reference" name="Reference" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800 placeholder:text-red-600" /></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 flex justify-center space-x-2">

                                        <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                                            <AlertDialogTrigger asChild>
                                                <Button onClick={openAlertDialog} className="py-1 px-3 text-sm w-[5rem] bg-green-500 font-lato hover:bg-green-700 text-white rounded">Delete</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className="flex flex-col px-4 ">
                                                <div className=' p-8 outline outline-red-500 h-[20rem]'>
                                                <AlertDialogHeader className='flex flex-col justify-center items-center mx-auto'>
                                                    <Image width={100} height={100} src="/sure.png" alt="Delete confirmation" />
                                                    <AlertDialogTitle className="text-xl text-red-500 mt-4 font-lato">Are you sure?</AlertDialogTitle>
                                                    <AlertDialogDescription className="mt-4 font-lato">
                                                        This action cannot be undone.
                                                    </AlertDialogDescription>
                                                    <AlertDialogDescription className="mt-4 font-lato">
                                                        Are you sure you want to delete this bank account?
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter className='mr-[9rem] mt-4'>
                                                    <AlertDialogAction className="py-2 px-3 font-lato text-sm w-[5rem] bg-green-500 hover:bg-green-600 text-white rounded" onClick={closeAlertDialog}>Delete</AlertDialogAction>
                                                    <AlertDialogCancel className="py-2 px-3 font-lato text-sm w-[5rem] bg-red-500 hover:bg-red-600 text-white rounded" onClick={closeAlertDialog}>Cancel</AlertDialogCancel>
                                                </AlertDialogFooter>
                                                </div>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                        <Button
                                            onClick={toggleModal}
                                            className="py-1 px-3 font-lato text-sm w-[5rem] bg-red-500 hover:bg-red-600 text-white rounded"
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
        </>
    );
}


