"use client"
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DeleteModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const openConfirmDialog = () => {
        setIsConfirmOpen(true);
    };

    const closeConfirmDialog = () => {
        setIsConfirmOpen(false);
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

                    <div className="fixed inset-0 flex items-center bg-opacity-50 bg-[#F0F3EE] justify-center overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-lg p-7 bg-white rounded-lg shadow-xl transform transition-all">
                                    <Dialog.Title className="text-[22px] font-lato capitalize font-medium text-left leading-6 text-red-600">
                                        Delete Bank Account
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm">
                                        <form>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="accountName">Account Name:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="accountName" name="accountName" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800 placeholder:text-red-600" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 ml-[6px] w-[100%]'>
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
                                        <Button onClick={openConfirmDialog} className="w-[99.77px] h-[42.26px] text-[14px] bg-[#00CE7E] font-lato hover:bg-green-700 text-white rounded-[10px]">
                                            Delete
                                        </Button>
                                        <Button onClick={toggleModal} className="font-lato text-sm w-[99.77px] h-[42.26px] text-[14px] bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]">
                                            Cancel
                                        </Button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Delete Confirmation Dialog */}
            <Transition appear show={isConfirmOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeConfirmDialog}>
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

                    <div className="fixed inset-0 bg-opacity-50 bg-[#F0F3EE] flex items-center justify-center p-4 text-center">
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
                                <Dialog.Panel className="w-[33rem] h-[31rem] p-6 bg-white rounded-lg shadow-xl transform transition-all">
                                    <div className="h-[100%] w-[100%] border-red-600 border-[2px] p-4">
                                     <div className="mt-[4rem]">
                                     
                                        <div className="mt-4 text-center flex flex-col items-center">
                                            <Image width={100} height={100} src="/sure.png" alt="Delete confirmation"/>

                                            <Dialog.Title className="text-[36px] font-lato capitalize text-center mt-[26px] text-[#AA322D]">
                                               Are you sure?
                                            </Dialog.Title>
                                            <p className="mt-4 p-4 text-sm font-lato ">
                                                This action cannot be undone.
                                            </p>
                                            <p className="mt-1 text-sm font-lato">
                                                Are you sure you want to delete this bank account?
                                            </p>
                                        </div>
                                        <div className="mt-[3rem] flex justify-center space-x-4">
                                            <Button onClick={closeConfirmDialog} className="w-[99.77px] h-[42.48px] font-lato text-[16px]  bg-[#00CE7E] hover:bg-green-900 text-white rounded-[10px]">
                                                Delete
                                            </Button>
                                            <Button onClick={closeConfirmDialog} className="w-[99.77px] h-[42.48px] font-lato text-[16px]  bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]">
                                                Cancel
                                            </Button>
                                        </div>
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

