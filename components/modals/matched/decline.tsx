"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Decline() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="text-[23px] h-[28px] w-[14px] text-[#AA322DBF] bg-white hover:bg-white -mb-2"
            >
                X
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
                                <Dialog.Panel className="w-full max-w-lg px-[5rem] py-8 bg-white border-[#AA322D] border-[2px] rounded-lg shadow-xl transform transition-all">

                                    <div className="mt-2 text-sm">
                                        <div className='flex w-[100%] h-[100%] flex-col justify-center items-center  mx-auto'>
                                            <Image width={125} height={125} src="/decline.png" alt="Decline Deposit" />

                                            <Dialog.Title className="text-[22px] mt-[28px] font-aleo text-[#AA322D] font-medium text-left leading-6">
                                                Decline Deposit?
                                            </Dialog.Title>
                                            <p className="mt-[14px]">Please provide reason to decline deposit.</p>
                                            <Input placeholder='Sample Text' className="placeholder-top-left p-1 w-[17rem] h-[6rem] mt-[9px] text-xs border rounded bg-gray-200 text-green-800" />
                                            <div className='mt-4 flex justify-center gap-[4px] w-full'>
                                                <Button className="h-[42px] w-[99px] text-[14px] rounded-[10px] bg-[#00CE7E] hover:bg-green-600 text-white " onClick={toggleModal}>
                                                    Decline
                                                </Button>
                                                <Button className="h-[42px] w-[99px] text-[14px] rounded-[10px] bg-[#AA322D] hover:bg-red-900 text-white " onClick={toggleModal}>
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


