"use client"
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function MatchDetails() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <Button onClick={openModal} className=" text-white uppercase font-lato bg-[#00CE7E] py-[3px] px-[10px] hover:bg-green-700 rounded-none h-6" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}>
                Match
            </Button>
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
                                <Dialog.Panel style={{boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.1)'}} className="w-full max-w-lg px-[2.8rem] py-7 bg-white rounded-lg shadow-xl transform transition-all flex flex-col border-[3px] border-[#00CE7E]">
                                    <div className='flex flex-col justify-center items-center mx-auto'>
                                        <Image width={100} height={100} src="/match.png" alt="Release all payments" />
                                        <h2 className="capitalize text-xl mt-3 text-[#005640] font-lato">Match Details?</h2>
                                        <p className="font-lato mt-[1.6rem]">
                                            Please provide reason for client / deposit match:
                                        </p>
                                        <Input placeholder='Sample Text' className="placeholder-top-left p-1 w-[20rem] h-[6rem] mt-[9px] text-xs border rounded bg-gray-200 text-green-800" />

                                        <div className="flex font-lato text-xs gap-1 mt-3">
                                            <span className="mt-1 text-[#14302A]">Upload proof of payment:</span>
                                            <div>
                                                <input type="file" className="relative font-lato w-1 px-0 rounded-none bg-[#8C9B91] placeholder:text-[#14302A]" />
                                                <button className="uppercase font-lato bg-[#8C9B91] h-[1.8rem] text-white text-xs -ml-1 w-[5rem] absolute">SELECT FILE</button>
                                            </div>
                                            <span className="ml-[4.7rem] mt-1 font-lato text-[#14302A]">no file uploaded</span>
                                        </div>
                                    </div>
                                    <div className='mt-6 flex justify-center gap-2'>
                                        <Button style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}} className="py-[10px] px-[24px] uppercase text-[14px] font-lato bg-[#00CE7E] hover:bg-green-600 text-white rounded-[10px]" onClick={closeModal}>
                                            Match
                                        </Button>
                                        <Button style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}} className="py-[10px] px-[24px] uppercase text-[14px] font-lato bg-[#AA322D] hover:bg-red-900 text-white rounded-[10px]" onClick={closeModal}>
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

