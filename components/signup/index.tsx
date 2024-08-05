import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SignOutPage(){
    return (
        <>
             <main className="w-screen h-screen bg-gray-200 flex justify-center items-center">
                <section className="bg-white w-[90%] max-w-[56.625rem] h-[90%] max-h-[30rem] dark:bg-gray-800 rounded-[0.625rem] flex flex-col justify-center items-center">
                    <div className="w-full p-6 lg:p-6 lg:flex lg:justify-between lg:items-center">
                        <Link href="/"><Image width={191} height={59} src="/logo.png" alt="logo"/></Link>
                    </div>

                    <div className="w-full flex-grow bg-white dark:bg-gray-800 flex justify-center items-center">
                        <div className="w-full flex flex-col  mx-auto lg:flex-row lg:items-center">
                           
                        <div className="m-7 w-full ml-[5rem]">
                            <h1 className="text-2xl font-bold text-[#005640] font-aleo mt-3">Signed Out</h1>
                            <p className="text-[#14302A] text-[15px] mt-3 font-lato">See you again</p>
                            <div className=" mt-[35px]">
                                <Button type="button" className=" px-2 py-1 text-white hover:bg-[#03945d] rounded-2 bg-[#00CE7E] focus:outline-none font-lato"><Link href="/">Sign In</Link></Button>
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