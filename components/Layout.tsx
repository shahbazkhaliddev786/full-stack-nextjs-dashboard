import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

// TODO:
    // 1. Sidebar shadow should be over header's one.
    // 2. Sidebar border radius on top-right and bottom right.
    // 3. Header border radius on bottom right.

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="flex h-[100vh] w-[100vw]">
                <div className="flex flex-col custom-rounded drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
                   <Sidebar />
                </div >
                <div className="flex flex-col h-[100vh] w-[85vw]" style={{borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}}>
                    <Header />
                    <section className="min-h-[90vh] pt-[10px] pl-[25px] w-[100%] bg-[#F0F3EE]">
                        {children}
                    </section>
                </div>
            </main >
        </>
    )
}