import UnMatchedTable from "@/components/unmatched/table";

export default function UnmatchedPage(){
    return (
        <>
            <div>
            <h1 className="text-[40px] font-bold font-aleo mb-2 text-[#188331]">Unmatched Deposits</h1>
            <div style={{boxShadow: '10px 10px 4px 0px rgba(0, 0, 0, 0.05)'}} className="bg-white w-[92%] h-[100%] flex flex-col p-[14px]">
                <UnMatchedTable />
            </div>
            </div>
        </>
    )
}