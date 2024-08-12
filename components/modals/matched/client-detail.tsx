
"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@/components/ui/input';
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function ClientDetail() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="h-[10px] w-[10px] font-lato bg-[#005640] text-white rounded-[3px]"
            >
                
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 pb-[15px]" onClose={toggleModal}>
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
                                <Dialog.Panel className="w-full max-w-lg px-9 py-6 bg-white rounded-lg shadow-xl transform transition-all">
                                    <Dialog.Title className="text-[24px] font-lato font-medium text-left leading-6 text-[#005640]">
                                        Client Details
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm">
                                        <form>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="accountName">Client ID:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="accountName" name="accountName" placeholder='Sample Text' className="text-[#005640] p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] placeholder:text-[#005640]" /></div>
                                            </div>
                                           <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[16rem] text-xs'><Label className="text-xs font-lato text-[#14302A]" htmlFor="ach">Client Name:</Label></div>
                                                <div className='w-[50%] mr-[2rem]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="ach" name="ach" placeholder='Sample Text' className="text-[#005640] p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="AccountNumber">Client Surname:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="AccountNumber" name="AccountNumber" placeholder='Sample Text' className="text-[#005640] p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="RoutingNumber">Client Date Of Birth:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="RoutingNumber" name="RoutingNumber" placeholder='Sample Text' className="text-[#005640] p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="bankAddress">Client ID/Passport Number:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} placeholder='Sample Text' className="text-[#005640] p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="Reference">Client Mobile Number:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="Reference" name="Reference" placeholder='Sample Text' className="text-[#005640] p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] placeholder:text-[#005640]" /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="Reference">Client Profile Status:</Label></div>
                                                <div className='w-[50%]'><Input style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} type="text" id="Reference" name="Reference" placeholder='Sample Text' className="text-[#005640] p-2 font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE] placeholder:text-[#005640]" /></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-8 flex flex-col justify-center items-center space-x-2">
                                        <Link href="#!" className="underline text-[#00CE7E] text-[15px] font-lato capitalize">View Full Profile</Link>
                                        
                                        <button
                                            onClick={toggleModal}
                                            className=" text-[14px] uppercase font-lato px-[25px] py-[10px] mt-4 bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]"
                                        >
                                            Close
                                        </button>
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


