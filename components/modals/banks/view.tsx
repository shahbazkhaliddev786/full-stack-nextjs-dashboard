
"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ViewModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="text-white rounded "
            >
                <Image height={25} width={25} src="/up arrow.png" alt="Table icon"  className="text-green-500 hover:bg-green-700"/>
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

                    <div className="fixed inset-0 bg-opacity-50 bg-[#F0F3EE] flex items-center justify-center overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl transform transition-all">
                                    <Dialog.Title className="text-[22px] text-[#005640] font-lato mb-4 font-medium text-left leading-6">
                                       View / Send Bank Account Details
                                    </Dialog.Title>
                                    <div className="mt-4 text-sm">
                                        <form>

                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="accountName">Account Name:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="accountName" name="accountName" placeholder='Sample Text' className="p-2 h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] text-[#005640] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[16rem] text-xs'><Label className="text-xs font-lato text-[#14302A]" htmlFor="ach">ACH And Wire Routing Number:</Label></div>
                                                <div className='w-[14] mr-[2.7rem]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="ach" name="ach" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] text-[#005640] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="AccountNumber">Account Number:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="AccountNumber" name="AccountNumber" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] text-[#005640] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="RoutingNumber">Routing Number:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="RoutingNumber" name="RoutingNumber" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] text-[#005640] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="bankAddress">Bank Address:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} placeholder='Sample Text' className="p-2 placeholder:-ml-[5px] placeholder-top-left h-[110.92px] font-lato text-xs border rounded w-[11rem] bg-[#F0F3EE] text-[#005640] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="Reference">Reference:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="Reference" name="Reference" placeholder='Sample Text' className="p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] placeholder:text-[#005640]" /></div>
                                            </div>
                                        </form>
                                        
                                    </div>
                                    <div className="mt-4 flex flex-col justify-center space-x-2">
                                        <form>
                                            <div className='flex justify-end gap-2 mb-4 w-[20rem] ml-8'>
                                                <div><Input type="text" id="email" name="email" placeholder='Enter Email Address' className="p-2 placeholder:italic text-[#8C9B91] font-lato h-[2rem] text-xs border rounded w-[15rem] bg-[#F0F3EE] " /></div>
                                            </div>
                                        </form>
                                        <div className="mt-2 flex justify-center gap-[1rem]">
                                            <button
                                                onClick={toggleModal}
                                                style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}
                                                className="font-lato text-[14px] uppercase py-[10px] px-[28px] bg-[#00CE7E] hover:bg-green-700 text-white rounded-[10px]"
                                            >
                                                Send
                                            </button>
                                            <button
                                                onClick={toggleModal}
                                                style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}
                                                className="font-lato text-[14px] uppercase py-[10px] px-[24px] bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]"
                                            >
                                                Close
                                            </button>
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


