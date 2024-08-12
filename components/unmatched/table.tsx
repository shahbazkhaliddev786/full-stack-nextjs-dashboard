import Image from "next/image";
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
            <div className="rounded text-[#14302A] w-[99%] flex flex-col max-h-[57vh] overflow-y-auto custom-scrollbar">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold font-lato text-[#14302A] ">Date</TableHead>
                            <TableHead className="font-bold font-lato text-[#14302A] ">Source</TableHead>
                            <TableHead className="font-bold w-[100%] flex gap-2 justify-between">

                                <h2 className="w-[30%] font-lato text-[#14302A] ">Reference</h2>
                                <div className=" bg-[#8C9B912B] -mr-[6px] rounded-[2px] mb-[1px] flex items-center w-[50%] justify-between">
                                    <Image src="/search.png" height={12} width={12} alt="search" className="text-[#8C9B91] ml-[5px] font-lato justify-center flex items-center  z-50" />
                                    <input type="text" placeholder="Search" className="h-3 font-lato z-1 bg-transparent w-[80%] placeholder:italic focus:outline-none " />
                                </div>
                            </TableHead>
                            <TableHead className="font-bold font-lato text-[#14302A] ">Currency</TableHead>
                            <TableHead className="font-bold font-lato text-[#14302A] ">Amount</TableHead>
                            <TableHead className="font-bold border-r-0"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-lato text-[#14302A] ">{row.date}</TableCell>
                                <TableCell className="font-lato text-[#14302A] ">{row.source}</TableCell>
                                <TableCell className="font-lato text-[#14302A] ">{row.reference}</TableCell>
                                <TableCell className="flex justify-between font-lato text-[#14302A] ">{row.currency}</TableCell>
                                <TableCell className="font-lato text-[#14302A] ">{row.amount}</TableCell>
                                <TableCell className="border-r-0 text-[#14302A] ">
                                    <Link href="/unmatcheddeposits" className="text-[#005640] underline font-lato">Match</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}