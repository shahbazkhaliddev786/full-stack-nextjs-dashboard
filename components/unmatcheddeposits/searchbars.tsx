import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchBars() {
    return (
        <>
            <div className="flex items-center bg-white">
                <div className="px-4 flex items-center gap-1 py-3">
                    <div><Input type="text" placeholder="Search by name" className="bg-gray-300 font-lato focus:outline-none" /></div>
                    <div><Input type="text" placeholder="Search by name" className="bg-gray-300 font-lato focus:outline-none" /></div>
                    <div><Input type="text" placeholder="Search by name" className="bg-gray-300 font-lato focus:outline-none" /></div>
                    <div><Input type="text" placeholder="Search by name" className="bg-gray-300 font-lato focus:outline-none" /></div>
                    <div><Input type="text" placeholder="Search by name" className="bg-gray-300 font-lato focus:outline-none" /></div>
                    <div><Button className="bg-green-500 hover:bg-green-700 py-1 px-2 font-lato">Search</Button></div>
                </div>
            </div>
        </>
    )
}