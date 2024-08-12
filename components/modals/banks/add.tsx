
"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@/components/ui/input';
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
                
                className="py-[10px] px-[32px] uppercase font-lato text-[16px] text-white"
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
                                <Dialog.Panel className="w-full max-w-lg py-[50px] px-[48px] bg-white rounded-lg shadow-xl transform transition-all">
                                    <Dialog.Title className="text-[22px] text-[#005640] font-lato font-bold text-left leading-6">
                                        Add New Bank Account
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm">
                                        <form>

                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-[#14302A] text-xs font-lato " htmlFor="country">Country:</Label></div>
                                                <div className='w-[50%]'>
                                                    <select defaultValue="select" id="country" name="country" className="h-[2rem] text-xs border rounded -ml-[1.7rem] w-[11rem] bg-[#F0F3EE] text-[#005640]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}}>
                                                        <option value="select" disabled className="font-lato text-[#005640]">Dropdown</option>
                                                        <option value="us" className="font-lato text-[#005640]">United States</option>
                                                        <option value="ca" className="font-lato text-[#005640]">Canada</option>
                                                        <option value="uk" className="font-lato text-[#005640]">United Kingdom</option>
                                                        <option value="au" className="font-lato text-[#005640]">Australia</option>
                                                        <option value="in" className="font-lato text-[#005640]">India</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="accountName">Account Name:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="accountName" name="accountName" placeholder='Sample Text' className="text-[#005640] p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%] ml-[6px]'>
                                                <div className='flex justify-end items-center w-[16rem] text-xs'><Label className="text-xs font-lato text-[#14302A]" htmlFor="ach">ACH And Wire Routing Number:</Label></div>
                                                <div className='w-[14] mr-[33px]'><Input type="text" id="ach" name="ach" placeholder='Sample Text' className="text-[#005640] p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="AccountNumber">Account Number:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="AccountNumber" name="AccountNumber" placeholder='Sample Text' className="text-[#005640] p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="RoutingNumber">Routing Number:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="RoutingNumber" name="RoutingNumber" placeholder='Sample Text' className="text-[#005640] p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="bankAddress">Bank Address:</Label></div>
                                                <div className='w-[50%]'><Input placeholder='Sample Text' className="text-[#005640] p-2 placeholder:text-[#005640] font-lato placeholder-top-left h-[110.92px] text-xs border rounded w-[11rem] bg-[#F0F3EE]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} /></div>
                                            </div>
                                            <div className='flex justify-center gap-2 mb-4 w-[100%]'>
                                                <div className='flex justify-end items-center w-[50%]'><Label className="text-xs font-lato text-[#14302A]" htmlFor="Reference">Reference:</Label></div>
                                                <div className='w-[50%]'><Input type="text" id="Reference" name="Reference" placeholder='Sample Text' className="text-[#005640] p-2 placeholder:text-[#005640] font-lato h-[2rem] text-xs border rounded w-[11rem] bg-[#F0F3EE]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}} /></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 flex justify-center space-x-2">
                                        <Button
                                            onClick={toggleModal}
                                            style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}
                                            className="text-[14px] px-[33px] py-[10px] uppercase rounded-[10px] font-lato bg-[#00CE7E] hover:bg-green-700 text-white"
                                        >
                                            Save


                                        </Button>
                                        <Button
                                            onClick={toggleModal}
                                            style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}
                                            className="text-[14px] px-[22px] py-[10px] uppercase font-lato bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]"
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


