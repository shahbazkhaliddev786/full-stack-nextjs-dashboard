
"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AddModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="p-2 w-[100%] h-[100%] font-lato uppercase text-[16px] text-white"
            >
                Add
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
                                <Dialog.Panel className="w-full max-w-lg p-7 bg-white rounded-lg shadow-xl transform transition-all">
                                    <Dialog.Title className="text-[22px] text-[#005640] font-lato font-medium text-left leading-6">
                                        Add New Bank Account
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm">
                                        <form>

                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato placeholder:text-[#005640]" htmlFor="country">Country:</Label></div>
                                                <div className='w-[50%]'>
                                                    <select defaultValue="select" id="country" name="country" className="h-[2rem] text-xs border rounded -ml-[3rem] w-[11rem] bg-gray-200 text-green-800">
                                                        <option value="select" disabled className="font-lato">Dropdown</option>
                                                        <option value="us" className="font-lato">United States</option>
                                                        <option value="ca" className="font-lato">Canada</option>
                                                        <option value="uk" className="font-lato">United Kingdom</option>
                                                        <option value="au" className="font-lato">Australia</option>
                                                        <option value="in" className="font-lato">India</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="accountName">Account Name:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="accountName" name="accountName" placeholder='Sample Text' className="p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%] ml-[6px]'>
                                                <div className='flex justify-end items-center w-[16rem] text-xs'><Label className="text-xs font-lato" htmlFor="ach">ACH And Wire Routing Number:</Label></div>
                                                <div className='w-[14] mr-[3.4rem]'><Input type="text" id="ach" name="ach" placeholder='Sample Text' className="p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="AccountNumber">Account Number:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="AccountNumber" name="AccountNumber" placeholder='Sample Text' className="p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="RoutingNumber">Routing Number:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="RoutingNumber" name="RoutingNumber" placeholder='Sample Text' className="p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end w-[50%]'><Label className="text-xs font-lato" htmlFor="bankAddress">Bank Address:</Label></div>
                                                <div className='w-[50%]'><Textarea placeholder='Sample Text' className="p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato" htmlFor="Reference">Reference:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="Reference" name="Reference" placeholder='Sample Text' className="p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-gray-200 text-green-800" /></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 flex justify-center space-x-2">
                                        <Button
                                            onClick={toggleModal}
                                            className="text-[14px] w-[99.77px] h-[42.26px] rounded-[10px] font-lato bg-[#00CE7E] hover:bg-green-700 text-white"
                                        >
                                            Add


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
        </>
    );
}


