"use client"
import MatchedTable from "@/components/matched/table";

export default function MatchedDepositsPage(){
    return (
        <>
            <h1 className="text-[40px] font-bold mb-1 font-aleo text-[#188331]">Matched Deposits</h1>
            <MatchedTable />
        </>
    )
}