import Link from "next/link";
import Image from "next/image";
import AuthForm from "../access/form";

export default function Sign(){
    return (
        <>
            <main className="w-screen h-screen py-[100px] px-[180px] bg-[#F0F3EE] flex justify-center items-center">
                <section 
                    style={{ boxShadow: "10px 10px 4px 0px #0000000D" }}
                    className="bg-white w-[100%]
                       rounded-[10px] flex flex-col justify-center items-center">
                    <div className="w-full pt-[40px] pl-[48px] lg:flex lg:justify-between lg:items-center">
                        <Link href="/"><Image width={191} height={59} src="/logo.png" alt="logo"/></Link>
                    </div>

                    <div style={{ boxShadow: "10px 10px 4px 0px #0000000D" }} className="w-full flex flex-grow bg-white rounded-[10px] justify-center items-center gap-[117px]">
                        <div className="w-full flex flex-col pl-11 lg:flex-row lg:items-center ml-[10px]">
                           
                            <div className="w-full pl-[3rem] lg:w-1/2 flex flex-col items-center lg:items-start">
                                <div className="lg:max-w-lg text-center lg:text-left">
                                    <h2 className="text-[40px] font-bold font-aleo tracking-wide text-[#005640] dark:text-white lg:text-xl">
                                        Admin Dashboard
                                    </h2>

                                    <div className="mt-3">
                                        <h4 className="flex items-center justify-center lg:justify-start dark:text-gray-200">
                                            <span className="text-[15px] text-[#14302A] font-lato">Please sign in</span>
                                        </h4> 
                                    </div>
                                </div>

                                    <AuthForm firstPlaceholder="Enter Email Address" secondPlaceHolder="Enter Password" btn="sign in"/>
                             
                                <div className="mt-[17px]">
                                    <Link href="/access" className="text-[15px] underline text-[#005640]">Request Access</Link>
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