import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
    return (
        <>
            <main className="w-screen h-screen bg-gray-200 flex justify-center items-center">
                <section className="bg-white w-[90%] max-w-[56.625rem] h-[90%] max-h-[30rem] dark:bg-gray-800 rounded-[0.625rem] flex flex-col justify-center items-center">
                    <div className="w-full p-6 lg:p-6 lg:flex lg:justify-between lg:items-center">
                        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"><Image width={191} height={59} src="/logo.png" alt="logo"/></Link>
                    </div>

                    <div className="w-full flex-grow bg-white dark:bg-gray-800 flex justify-center items-center">
                        <div className="w-full flex flex-col px-11 mx-auto lg:flex-row lg:items-center">
                           
                            <div className="w-full px-10 lg:w-1/2 flex flex-col items-center lg:items-start">
                                <div className="lg:max-w-lg text-center lg:text-left">
                                    <h2 className="text-3xl font-bold font-aleo tracking-wide text-[#005640] dark:text-white lg:text-xl">
                                        Admin Dashboard
                                    </h2>

                                    <div className="mt-3 space-y-5">
                                        <h4 className="flex items-center justify-center lg:justify-start dark:text-gray-200">
                                            <span className="text-base font-lato">Please Sign In</span>
                                        </h4>
                                    </div>
                                </div>

                                <div className="mt-3 w-full flex justify-center lg:justify-start">
                                    <form className="w-full max-w-xs">
                                        <div className="mb-6">
                                            <Input type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full bg-[#F0F3EE] px-3 py-2 font-lato placeholder-gray-500 rounded-md focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:placeholder-gray-500" readOnly/>
                                        </div>
                                        <div className="mb-6">
                                            <Input type="password" name="password" id="password" placeholder="Enter Password" className="w-full bg-[#F0F3EE] px-3 py-2 font-lato placeholder-gray-500 rounded-md focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:placeholder-gray-500" readOnly/>
                                        </div>
                                        <div className="mb-6">
                                            <Button type="button" className=" px-2 py-0 text-white bg-[#00CE7E] font-lato rounded-md focus:outline-none hover:bg-[#038f59]">Sign in</Button>
                                        </div>
                                        <p className="text-sm mb-4 font-lato text-green-200 underline"><Link href="/access" className="text-[#005640] font-lato focus:outline-none focus:underline focus:text-[#005642] dark:focus:border-[#005645]">Request Access</Link></p>
                                    </form>
                                </div>
                            </div>

                            <div className=" flex items-center justify-center">
                                <Image width={425} height={325} className="object-cover rounded-md lg:max-w-2xl" src="/signin.png" alt="BLOCKCOIN" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
