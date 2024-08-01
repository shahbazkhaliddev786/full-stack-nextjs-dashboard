"use client"
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebar = [
    { label: "Dashboard", link: "/", color: "text-[#289943]" },
    { label: "Reports", link: "/reports", color: "text-[#289943]" },
    { label: "Unmatched", link: "/unmatched", color: "text-[#289943]" },
    { label: "Matched", link: "/macheddeposits", color: "text-[#289943]" },
    { label: "Withdrawals", link: "/withdrawals", color: "text-[#289943]" },
    { label: "Profiles", link: "/profiles", color: "text-[#289943]" },
    { label: "Banks", link: "/banks", color: "text-[#289943]" },
    { label: "Fees", link: "/fees", color: "text-[#289943]" },
    { label: "User Rights", link: "/user-rights", color: "text-[#289943]" },
    { label: "Settings", link: "/settings", color: "text-[#289943]" },
    { label: "Archive", link: "/archive", color: "text-[#289943]" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <>
            <main className="flex h-[100vh] w-[100vw]">
                <div className="flex flex-col">
                    <aside className="bg-white h-[100vh] w-[15vw] drop-shadow">
                        <nav className=" flex-shrink-0 bg-white">
                            <div className="flex-auto  h-full">
                                <div className="flex flex-col">
                                    <ul className="relative m-0 p-0 list-none h-full">
                                        <li className="text-white p-4  fle relative justify-center">
                                            <div className=" my-1 bg-white">
                                                <Image width={191} height={59} src="/logo.png" className="cursor-pointer" alt="Blockkain logo" />
                                            </div>
                                        </li>

                                        {sidebar.map((item, index) => (
                                            <li key={index} className={`flex relative px-4 mt-3 justify-end hover:bg-gray-100 cursor-pointer`}>
                                                <Link href={item.link}>
                                                <span className={`my-1 p-4 mt-4 text-base font-lato ${pathname === item.link ? 'text-[#00CE7E]' : 'text-[#14302A]'}`}>
                                                        {item.label}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </aside >
                </div >
                <div className="flex flex-col h-[100vh] w-[85vw]">
                    <header className="flex justify-between items-center text-white bg-white h-[10vh] w-[100%] left-auto top-0 right-0 drop-shadow">
                        <div className="text-black"></div>
                        <div className="h-12 px-6 flex relative items-center justify-end">
                            <div className="w-[1px] mr-1 h-8 bg-[#F0F3EE]"></div>
                            <button className="relative  block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                <Image className="object-cover"  height={45} width={45} src="/user.png" alt="Avatar" />
                            </button>
                            <div>
                                <form className="max-w-sm mx-auto font-lato">
                                    <select defaultValue="admin" id="countries" className=" text-gray-900 cursor-pointer text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="admin" className="cursor-pointer">Blockkain Admin</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </header>
                    <section className="min-h-[90vh] w-[100%] bg-[#F0F3EE]">
                        {children}
                    </section>
                </div>
            </main >
        </>
    )
}