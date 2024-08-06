import UnMatchedTable from "@/components/unmatched/table";

export default function UnmatchedPage(){
    return (
        <>
            <h1 className="text-2xl font-bold font-aleo mb-2 text-[#188331]">Unmatched Deposits</h1>
            <div className="bg-white w-[100%] h-[100%] flex flex-col p-6 drop-shadow-[10px_10px_4px_#0000000D]">
                <UnMatchedTable />
            </div>
        </>
    )
}