
"use client"
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DeclineDetail() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <button
                onClick={openModal}
                className="h-[10px] w-[10px] font-lato bg-[#005640] text-white rounded-[3px]"
            ></button>
            <Transition appear show={isOpen} as={Fragment}>
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
                                <Dialog.Panel className="w-full pl-[4rem] font-lato max-w-lg p-7 bg-white rounded-lg shadow-xl transform transition-all">
                                    <Dialog.Title className="capitalize text-left text-[26px] my-4 text-[#005640]">
                                        Decline Details?
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm">
                                        <form className="w-[30rem]">
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex items-center w-[20%]'>
                                                    <Label className="text-[14px] text-[#14302A]" htmlFor="DeclinedBy">Declined by:</Label>
                                                </div>
                                                <div className='w-[80%]'>
                                                    <Input type="text" id="DeclinedBy" name="DeclinedBy" placeholder='Sample Text' className=" h-[2rem] text-xs border rounded w-[270px] bg-gray-200 text-green-800 placeholder:text-[#005640]" />
                                                </div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex w-[20%]'>
                                                    <Label className="text-xs text-[#14302A]" htmlFor="declineReason">Decline Reason:</Label>
                                                </div>
                                                <div className='w-[80%]'>
                                                    <Input placeholder='Sample Text' className="p-2 placeholder-top-left h-[100px] text-xs border rounded w-[270px] bg-[#F0F3EE] text-[#005640] placeholder:text-[#005640]" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 flex justify-center space-x-2">
                                        <Button
                                            onClick={closeModal}
                                            className="text-[14px] h-[42.48px] w-[99.77px] mr-[3rem] bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]"
                                        >
                                            Close
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
