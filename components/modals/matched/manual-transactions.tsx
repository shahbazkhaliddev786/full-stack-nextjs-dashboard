
"use client"
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function ManualTransactions() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        console.log("Logged")
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
                className="p-2 w-[4rem] font-lato text-white rounded"
            >

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
                                    <Dialog.Title className="text-lg font-lato font-medium text-left leading-6 text-green-700">
                                        Manual Transactions Details
                                    </Dialog.Title>
                                    <div className="mt-2 h-[25rem] w-[25rem] flex justify-center items-center text-sm">
                                        <h2 className="text-xl font-lato">?</h2>
                                    </div>
                                    <div className="mt-8 flex flex-col justify-center items-center space-x-2">
                                        
                                        <button
                                            onClick={toggleModal}
                                            className=" text-sm font-lato mt-4 py-2 px-3 w-[5rem] bg-red-500 hover:bg-red-600 text-white rounded"
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

