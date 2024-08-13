import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Out() {
    return (
        <>
            <main className="w-screen h-screen py-[100px] px-[180px] bg-[#F0F3EE] flex justify-center items-center">
                <section style={{ boxShadow: "10px 10px 4px 0px #0000000D" }} className="bg-white w-[100%] rounded-[10px] flex flex-col justify-center items-center">
                    <div className="w-full pt-[40px] pl-[50px] lg:flex lg:justify-between lg:items-center">
                        <Link href="/"><Image width={191} height={59} src="/logo.png" alt="logo" /></Link>
                    </div>

                    <div style={{ boxShadow: "10px 10px 4px 0px #0000000D" }} className="w-full flex flex-grow gap-[117px] bg-white rounded-[10px] justify-center items-center">
                        <div className="w-full flex flex-col  mx-auto lg:flex-row lg:items-center">

                            <div className="mt-[24px] w-full ml-[6rem]">
                                <h1 className="text-[40px] font-bold text-[#005640] font-aleo">Signed Out</h1>
                                <p className="text-[#14302A] text-[15px] mt-3 font-lato">See you again</p>
                                <div className=" mt-[35px]">
                                    <Button type="button" style={{ boxShadow: "4px 4px 4px 0px #0000001A" }} className="pt-[10px] pb-[6px] px-[13px] uppercase font-lato text-white bg-[#00CE7E] rounded-[10px] focus:outline-none hover:bg-[#04a768]">
                                        Sign In
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={425} height={325} className="object-cover rounded-md lg:max-w-2xl" src="/signin.png" alt="BLOCKCOIN" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}