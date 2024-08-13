
import BanksButtons from "@/components/banks/buttons";
import SouthAfrica from "@/components/banks/south";
import UK from "@/components/banks/uks";

export default function BanksPage() {
    return (
        <>
            <h1 className="text-[40px] font-bold mb-[5px] text-[#188331] font-aleo">Banks</h1>
            <div style={{boxShadow: '10px 10px 4px 0px rgba(0, 0, 0, 0.05)'}} className="bg-white w-[100%] h-[100%] flex flex-col p-6 rounded-[10px]">
                <BanksButtons />
                <div className=" w-[95%] flex flex-col mt-2">
                    <div><h2 className="text-xl font-bold text-[#005640] font-lato">South Africa</h2></div>
                    <SouthAfrica />
                </div>
                <div className=" w-[95%] flex flex-col mt-6">
                    <div><h2 className="text-xl font-bold text-[#005640]">United Kingdom</h2></div>
                    <UK />
                </div>
            </div>
        </>
    )
}