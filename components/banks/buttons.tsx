import AddModal from "@/components/modals/banks/add";
import DeleteModal from "@/components/modals/banks/delete";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BanksButtons() {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-2">
                    <Button  className="rounded-[10px] text-[#8C9B91] bg-[#F0F3EE] hover:bg-slate-200 p-2 flex font-lato w-[13rem]"><Image width={20} height={40} src="/filter.png" alt="filter" className="text-black -ml-[4rem] mr-2" /> Filter by country</Button>
                    <Button className="rounded-[10px] text-[#8C9B91] bg-[#F0F3EE] hover:bg-slate-200 p-2 flex font-lato w-[13rem]"><Image width={20} height={40} src="/filter.png" alt="filter" className="text-black -ml-[4rem] mr-2" /> Filter by banks</Button>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <div className="bg-[#00CE7E] hover:bg-green-700 uppercase rounded-[10px]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}>
                        <AddModal />
                    </div>
                    <div className="bg-[#AA322D] hover:bg-red-900 uppercase rounded-[10px]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}>
                        <DeleteModal />
                    </div>
                </div>
            </div>
        </>
    )
}