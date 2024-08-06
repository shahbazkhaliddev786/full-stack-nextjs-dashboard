import { CiSearch } from "react-icons/ci";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const data = [
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    }, {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    }, {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    }, {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    }, {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    }, {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    },
    {
        "date": "01 Jan 2023",
        "source": "Text Field",
        "reference": "Text Field",
        "currency": "GBP",
        "amount": "Number Field"
    }
];

export default function UnMatchedTable() {
    return (
        <>
            <div className="#F0F3EE rounded w-[95%] flex flex-col mt-4 max-h-[61vh] overflow-y-auto custom-scrollbar">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold font-lato">Date</TableHead>
                            <TableHead className="font-bold font-lato">Source</TableHead>
                            <TableHead className="font-bold border-r-0 w-[100%] flex gap-2 justify-between">

                                <h2 className="w-[30%] font-lato">Reference</h2>
                                <div className=" bg-gray-200 -mr-[9px] border-r-2 border-gray-400 flex items-center w-[75%] justify-between">
                                    <CiSearch className="text-black w-[15%] font-lato justify-center flex items-center  z-50" />
                                    <input type="text" placeholder="Search" className="h-4 font-lato z-1 bg-transparent  py-3 w-[85%] focus:outline-none " />
                                </div>
                            </TableHead>
                            <TableHead className="font-bold font-lato">Currency</TableHead>
                            <TableHead className="font-bold font-lato">Amount</TableHead>
                            <TableHead className="font-bold border-r-0"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium font-lato">{row.date}</TableCell>
                                <TableCell className="font-lato">{row.source}</TableCell>
                                <TableCell className="font-lato">{row.reference}</TableCell>
                                <TableCell className="flex justify-between font-lato">{row.currency}</TableCell>
                                <TableCell className="font-lato">{row.amount}</TableCell>
                                <TableCell className="border-r-0">
                                    <Link href="/unmatcheddeposits" className="underline text-green-500 font-lato">Match</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}