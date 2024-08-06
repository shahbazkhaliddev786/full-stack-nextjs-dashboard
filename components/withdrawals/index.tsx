
import PendingReleaseTable from "./pending";
import DeclinedReleaseTable from "./declined";

export default function WithdrawalsPage(){
    return (
        <>
            <h1 className="text-2xl font-bold font-aleo mb-1 text-[#188331]">Withdrawals</h1>
            <div className="w-[100%] h-[100%] flex flex-col p-2">
                <PendingReleaseTable />
                <DeclinedReleaseTable />
            </div>
        </>
    )
}