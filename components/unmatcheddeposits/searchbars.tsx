import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchBars() {
    return (
        <>
            <div className="flex items-center bg-white" style={{boxShadow: '10px 10px 4px 0px rgba(0, 0, 0, 0.05)'}}>
                <div className="px-[14px] flex items-center gap-[9px] py-3">
                    <div><Input type="text" placeholder="Search by name" className="bg-[#F0F3EE] rounded-[10px] placeholder:text-[#8C9B91] font-lato focus:outline-none" /></div>
                    <div><Input type="text" placeholder="Search by name" className="bg-[#F0F3EE] rounded-[10px] placeholder:text-[#8C9B91] font-lato focus:outline-none" /></div>
                    <div><Input type="text" placeholder="Search by name" className="bg-[#F0F3EE] rounded-[10px] placeholder:text-[#8C9B91] font-lato focus:outline-none" /></div>
                    <div><Input type="text" placeholder="Search by name" className="bg-[#F0F3EE] rounded-[10px] placeholder:text-[#8C9B91] font-lato focus:outline-none" /></div>
                    <div><Input type="text" placeholder="Search by name" className="bg-[#F0F3EE] rounded-[10px] placeholder:text-[#8C9B91] font-lato focus:outline-none" /></div>
                    <div><Button style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}} className="bg-[#00CE7E] hover:bg-green-700 pt-[10px] pb-[11px] px-[20px] text-[16px] cursor-pointer font-lato text-white uppercase rounded-[10px] focus:outline-none">Search</Button></div>
                </div>
            </div>
        </>
    )
}