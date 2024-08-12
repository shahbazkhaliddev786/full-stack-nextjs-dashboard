"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function DeclineModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [reason, setReason] = useState('');

    const toggleModal = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    const handleDecline = () => {
        console.log("Decline reason:", reason);
        toggleModal();
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="w-[14px] h-[15px] font-lato uppercase text-[23px] text-[#AA322DBF]"
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
                                <Dialog.Panel className="w-full px-[4rem] flex flex-col items-center border-[3px] border-[#AA322D] max-w-lg p-7 bg-white rounded-lg shadow-xl transform transition-all">
                                    <Image src="/decline.png" height={120} width={120} alt="Declined withdrawals"/>
                                    <Dialog.Title className="text-[22px] text-[#AA322D] font-aleo mt-[28px] font-bold text-left leading-6">
                                        Decline Withdrawals
                                    </Dialog.Title>
                                    <div className="mt-[14px] text-sm">
                                        <form>
                                            <div className='flex flex-col items-start mb-4'>
                                                <Label className="text-[14px] font-lato" htmlFor="reason">Please provide a reason for the declined withdrawal:</Label>
                                                <Input 
                                                    id="reason"
                                                    name="reason"
                                                    placeholder='Sample text'
                                                    style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.02)'}}
                                                    className="placeholder-top-left h-[80px] placeholder:text-[#14302A] font-lato mt-[14px] text-xs border rounded bg-[#F0F3EE] text-[#14302A]"
                                                    value={reason}
                                                    onChange={(e) => setReason(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 flex justify-center space-x-2">
                                        <Button
                                            onClick={handleDecline}
                                            style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}
                                            className="text-[14px] uppercase py-[10px] px-[20px] rounded-[10px] font-lato bg-[#00CE7E] hover:bg-green-700 text-white"
                                        >
                                            Decline
                                        </Button>
                                        <Button
                                            onClick={toggleModal}
                                            style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}
                                            className="text-[14px] uppercase py-[10px] px-[20px] font-lato bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]"
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
