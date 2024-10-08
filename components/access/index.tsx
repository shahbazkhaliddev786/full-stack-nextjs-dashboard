import Link from "next/link";
import Image from "next/image";
import AuthForm from "./form";

export default function AccessMain() {
    return (
        <>
            <main className="w-screen h-screen py-[100px] px-[180px] bg-[#F0F3EE] flex justify-center items-center">
                <section style={{ boxShadow: "10px 10px 4px 0px #0000000D" }} className="bg-white w-[100%] rounded-[0.625rem] flex flex-col justify-center items-center">
                    <div className="w-full pt-[40px] pl-[50px] lg:flex lg:justify-between lg:items-center">
                        <Link href="/"><Image width={191} height={59} src="/logo.png" alt="Logo" /></Link>
                    </div>

                    <div style={{ boxShadow: "10px 10px 4px 0px #0000000D" }} className="w-full -mt-4 flex-grow bg-white rounded-[10px] flex justify-center items-center gap-[117px]">
                        <div className="w-full flex flex-col pl-11 mx-auto lg:flex-row lg:items-center">

                            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                                <div className="lg:max-w-lg px-11  text-center lg:text-left">
                                    <h2 className="text-[2.5rem] font-bold font-aleo tracking-wide text-[#005640] dark:text-white lg:text-xl">
                                        Request Access
                                    </h2>

                                    <div className="mt-[12px]">
                                        <h4 className="flex items-center justify-center lg:justify-start text-gray-700 dark:text-gray-200">
                                            <span className="text-[15px] text-[#14302A] font-lato">Please complete the form below</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="px-11 w-[330px]">
                                    <AuthForm firstPlaceholder="Enter Full Name" secondPlaceHolder="Enter Email Address" btn="Request"/>
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
    )
}