import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import MatchDetails from "@/components/modals/unmatched/match-details";

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

export default function UnMatchedTable() {
    return (
        <>
            <div className="bg-white" style={{boxShadow: '10px 10px 4px 0px rgba(0, 0, 0, 0.05)'}}>
                <h1 className="capitalize px-4 text-xl font-bold text-[#005640] font-lato">Potential Matches</h1>
                <div className="px-4 pb-4 flex h-[14rem] items-start pt-0">
                    <div className="bg-[#F0F3EE] rounded p-3 w-[100%] flex flex-col overflow-y-auto custom-scrollbar">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Client ID</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Name</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Other Name</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">Surname</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A]">DOB</TableHead>
                                    <TableHead className="font-bold font-lato text-[#14302A] border-r-0">Match</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    data.map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell className="font-lato text-[#14302A]">{row.id}</TableCell>
                                            <TableCell className="font-lato text-[#14302A]">{row.name}</TableCell>
                                            <TableCell className="font-lato text-[#14302A]">{row.otherName}</TableCell>

                                            <TableCell className="flex justify-between font-lato py-2 text-[#14302A]">{row.surname} </TableCell>
                                            <TableCell className="w-[5.3rem] font-lato leading-[12px] py-0 text-[#14302A]">{row.dob}</TableCell>
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
        </>
    )
}