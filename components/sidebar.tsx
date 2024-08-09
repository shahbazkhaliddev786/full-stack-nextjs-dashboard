"use client"
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

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <>
            <aside
                style={{borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}}
                className="bg-white h-[100vh] w-[15vw]">
                <nav className=" flex-shrink-0 bg-white">
                    <div className="flex-auto h-full">
                        <div className="flex flex-col">
                            <ul className="relative m-0 p-0 list-none h-full">
                                <li className="text-white p-4 flex relative justify-center">
                                    <div className=" my-1 bg-white">
                                        <Image width={191} height={59} src="/logo.png" className="cursor-pointer" alt="Blockkain logo" />
                                    </div>
                                </li>

                                {sidebar.map((item, index) => (
                                    <li key={index} className={`flex relative px-4 mt-[12px] justify-end hover:bg-gray-100 cursor-pointer`}>
                                        <Link href={item.link}>
                                            <span className={`p-4 mt-[15px] text-[18px] font-lato ${pathname === item.link ? 'text-[#00CE7E]' : 'text-[#14302A]'}`}>
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
        </>
    )
}