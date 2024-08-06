import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

// TODO:
    // 1. Bank input check padding
    // 2. Matched Deposit manuel underline

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="flex h-[100vh] w-[100vw]">
                <div className="flex flex-col drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
                   <Sidebar />
                </div >
                <div className="flex flex-col h-[100vh] w-[85vw]">
                    <Header />
                    <section className="min-h-[90vh] w-[100%] bg-[#F0F3EE]">
                        {children}
                    </section>
                </div>
            </main >
        </>
    )
}