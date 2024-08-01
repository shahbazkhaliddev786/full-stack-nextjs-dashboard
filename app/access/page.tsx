import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Access() {
    return (
        <>
            <main className="w-screen h-screen bg-gray-200 flex justify-center items-center">
                <section className="bg-white w-[90%] max-w-[56.625rem] h-[90%] max-h-[30rem] dark:bg-gray-800 rounded-[0.625rem] flex flex-col justify-center items-center">
                    <div className="w-full p-6 lg:p-6 lg:flex lg:justify-between lg:items-center">
                        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"><Image width={191} height={59} src="/logo.png" alt="Logo"/></Link>
                    </div>

                    <div className="w-full flex-grow bg-white dark:bg-gray-800 flex justify-center items-center">
                        <div className="w-full flex flex-col px-6 mx-auto lg:flex-row lg:items-center">
                           
                            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                                <div className="lg:max-w-lg px-11  text-center lg:text-left">
                                    <h2 className="text-2xl font-bold font-aleo tracking-wide text-[#005640] dark:text-white lg:text-xl">
                                        Request Access
                                    </h2>

                                    <div className="mt-2 space-y-5">
                                        <h4 className="flex items-center justify-center lg:justify-start text-gray-700 dark:text-gray-200">
                                            <span className="text-sm font-lato">Please complete the form below</span>
                                        </h4>
                                    </div>
                                </div>

                                <div className="mt-4 px-11 w-full flex justify-center lg:justify-start">
                                    <form className="w-full max-w-xs">
                                        <div className="mb-6">
                                            <Input type="email" name="email" id="email" placeholder="Enter Full Name" className="w-full bg-[#F0F3EE] px-3 py-2 placeholder-gray-500 rounded-md focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 font-lato" />
                                        </div>
                                        <div className="mb-6">
                                            <Input type="password" name="password" id="password" placeholder="Enter Email" className="w-full bg-[#F0F3EE] px-3 py-2 placeholder-gray-500 rounded-md focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 font-lato" />
                                        </div>
                                        <div className="mb-6">
                                            <Button type="button" className="px-1 py-1 font-lato text-white bg-[#00CE7E] rounded-md focus:outline-none hover:bg-[#04a768]">Request</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className=" flex items-center justify-center">
                                <Image width={425} height={325} className="object-cover rounded-md lg:max-w-2xl" src="/request.png" alt="Blokkain" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

