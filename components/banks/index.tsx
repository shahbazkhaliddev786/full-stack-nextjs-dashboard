
import BanksButtons from "@/components/banks/buttons";
import SouthAfrica from "@/components/banks/south";
import UK from "@/components/banks/uks";

export default function BanksPage() {
    return (
        <>
            <h1 className="text-2xl font-bold my-3 text-[#188331] font-aleo">Banks</h1>
            <div className="bg-white w-[100%] h-[100%] flex flex-col p-6 rounded-[10px] drop-shadow-[10px_10px_4px_#0000000D]">
                <BanksButtons />
                <div className=" w-[95%] flex flex-col mt-2">
                    <div><h2 className="text-xl font-bold text-green-600 my-3 font-lato">South Africa</h2></div>
                    <SouthAfrica />
                </div>
                <div className=" w-[95%] flex flex-col mt-2">
                    <div><h2 className="text-xl font-bold text-green-600 my-3">United Kingdom</h2></div>
                    <UK />
                </div>
            </div>
        </>
    )
}