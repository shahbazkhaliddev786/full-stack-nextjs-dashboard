import Deposits from "@/components/unmatcheddeposits/deposits";
import SearchBars from "@/components/unmatcheddeposits/searchbars";
import UnMatchedTable from "@/components/unmatcheddeposits/table";

export default function UnMatchedDeposits() {
    return (
        <>
            <h1 className="text-2xl font-bold font-aleo my-3 text-[#188331]">Unmatched Deposits</h1>
            <Deposits />
            <SearchBars />
            <UnMatchedTable />
        </>
    )
}