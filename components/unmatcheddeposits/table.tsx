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
        </>
    )
}