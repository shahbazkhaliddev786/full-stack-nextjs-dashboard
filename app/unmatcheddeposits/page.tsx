import ContentLayout from "@/components/ContentLayout";
import DashboardLayout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import MatchDetails from "@/components/unmatched/match-details";

const data = [
    {
        "id": "Text",
        "name": "Client Name",
        "otherName": "Other Name",
        "surname": "Surname",
        "dob": "12 Feb 2002"
    },
    {
        "id": "Text",
        "name": "Client Name",
        "otherName": "Other Name",
        "surname": "Surname",
        "dob": "12 Feb 2002"
    },
    {
        "id": "Text",
        "name": "Client Name",
        "otherName": "Other Name",
        "surname": "Surname",
        "dob": "12 Feb 2002"
    },
    {
        "id": "Text",
        "name": "Client Name",
        "otherName": "Other Name",
        "surname": "Surname",
        "dob": "12 Feb 2002"
    },
    {
        "id": "Text",
        "name": "Client Name",
        "otherName": "Other Name",
        "surname": "Surname",
        "dob": "12 Feb 2002"
    },
    {
        "id": "Text",
        "name": "Client Name",
        "otherName": "Other Name",
        "surname": "Surname",
        "dob": "12 Feb 2002"
    }
]

export default function UnmatchedDepositsInner() {
    return (
        <>
            <DashboardLayout>
                <ContentLayout>
                    <h1 className="text-2xl font-bold font-aleo my-3 text-[#188331]">Unmatched Deposits</h1>
                    <div className="bg-white w-[100%] h-[100%] flex flex-col">
                        <div className="h-[8rem] w-[100%] flex flex-col bg-[#005640]">
                            <div className="w-[100%]">
                                <h3 className="text-[#00CE7E] w-8 p-3 text-xl font-lato">Unmatched Deposits</h3>
                            </div>
                            <div className="flex justify-between w-[70%] px-3">
                                <div className="flex gap-11">
                                    <h3 className="text-white text-sm font-bold font-lato">Date</h3>
                                    <h3 className="text-white text-sm font-bold ml-[1.9rem] font-lato">Source</h3>
                                    <h3 className="text-white text-sm font-bold ml-[5px] font-lato">Resources</h3>
                                </div>
                                <div className="flex gap-11">
                                    <h3 className="text-white text-sm font-bold font-lato">Currency</h3>
                                    <h3 className="text-white text-sm font-bold font-lato mr-5">Amount</h3>
                                </div>
                            </div>
                            <div className="flex justify-between w-[70%] px-3">
                                <div className="flex gap-11">
                                    <h3 className="text-gray-200 text-xs font-lato">1 Jan 2023</h3>
                                    <h3 className="text-gray-200 text-xs font-lato">Text Field</h3>
                                    <h3 className="text-gray-200 text-xs font-lato">Text Field</h3>
                                </div>
                                <div className="flex gap-11">
                                    <h3 className="text-gray-200 text-xs font-lato mr-[34px]">GBP</h3>
                                    <h3 className="text-gray-200 text-xs font-lato">Number Field</h3>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div className="bg-white">
                        <h1 className="capitalize px-4 text-xl font-bold text-[#005640] font-lato">Potential Matches</h1>
                        <div className="px-4 pb-4 flex h-[17rem] items-start pt-0">
                            <div className="bg-[#F0F3EE] rounded p-3 w-[100%] h-[35vh] flex flex-col overflow-y-auto custom-scrollbar">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="font-bold font-lato">Client ID</TableHead>
                                            <TableHead className="font-bold font-lato">Name</TableHead>
                                            <TableHead className="font-bold font-lato">Other Name</TableHead>
                                            <TableHead className="font-bold font-lato">Surname</TableHead>
                                            <TableHead className="font-bold font-lato">DOB</TableHead>
                                            <TableHead className="font-bold font-lato border-r-0">Match</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            data.map((row, i) => (
                                                <TableRow key={i}>
                                                    <TableCell className="font-medium font-lato">{row.id}</TableCell>
                                                    <TableCell className="font-lato">{row.name}</TableCell>
                                                    <TableCell className="font-lato">{row.otherName}</TableCell>

                                                    <TableCell className="flex justify-between font-lato py-2">{row.surname} </TableCell>
                                                    <TableCell className="w-[5.3rem] font-lato leading-[12px] py-0">{row.dob}</TableCell>
                                                    <TableCell className="border-r-0 font-lato">
                                                        <MatchDetails />
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </ContentLayout>
            </DashboardLayout>
        </>
    )
}