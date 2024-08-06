import Link from "next/link";
import Image from "next/image";
import AuthForm from "../access/form";

export default function Sign(){
    return (
        <>
            <main className="w-screen h-screen bg-gray-200 flex justify-center items-center">
                <section className="bg-white w-[90%] max-w-[56.625rem] h-[90%] max-h-[30rem] dark:bg-gray-800 rounded-[0.625rem] flex flex-col justify-center items-center">
                    <div className="w-full p-6 lg:p-6 lg:flex lg:justify-between lg:items-center">
                        <Link href="/"><Image width={191} height={59} src="/logo.png" alt="logo"/></Link>
                    </div>

                    <div className="w-full flex-grow bg-white dark:bg-gray-800 flex justify-center items-center">
                        <div className="w-full flex flex-col px-11 mx-auto lg:flex-row lg:items-center">
                           
                            <div className="w-full px-10 lg:w-1/2 flex flex-col items-center lg:items-start">
                                <div className="lg:max-w-lg text-center lg:text-left">
                                    <h2 className="text-[2.5rem] font-bold font-aleo tracking-wide text-[#005640] dark:text-white lg:text-xl">
                                        Admin Dashboard
                                    </h2>

                                    <div className="mt-3 space-y-5">
                                        <h4 className="flex items-center justify-center lg:justify-start dark:text-gray-200">
                                            <span className="text-[15px] text-[#14302A] font-lato">Please Sign In</span>
                                        </h4>
                                    </div>
                                </div>

                                    <AuthForm firstPlaceholder="Enter Email Address" secondPlaceHolder="Enter Password" btn="Sign In"/>
                             
                                <div>
                                    <button className="italic underline text-[#005640]">Request Access</button>
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
    )
}