
"use client"
import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import ViewModal from "@/components/modals/banks/view";

interface Bank {
    bank: string;
    active: string;
    rank: number;
    default: boolean;
    intlDefault: boolean;
    details: string;
}

const initialSouthAfrica: Bank[] = [
    {
        bank: "FNB",
        active: "Yes",
        rank: 1,
        default: true,
        intlDefault: false,
        details: "Currencies Receivable: ZAR"
    },
    {
        bank: "Standard Bank",
        active: "Yes",
        rank: 2,
        default: false,
        intlDefault: false,
        details: "Currencies Receivable: ZAR, USD, GBP"
    },
    {
        bank: "ABSA",
        active: "No",
        rank: 3,
        default: false,
        intlDefault: false,
        details: "Currencies Receivable: ZAR"
    }
];

export default function SouthAfrica() {
    const [banks, setBanks] = useState(initialSouthAfrica);

    const handleCheckboxChange = (index: number, field: keyof Bank) => {
        setBanks(prevBanks =>
            prevBanks.map((bank, i) =>
                i === index ? { ...bank, [field]: !bank[field] } : bank
            )
        );
    };

    return (
        <>
            <div className="p-3 w-full bg-[#F0F3EE]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}>
                <Table className="bg-[#F0F3EE] py-1">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] font-lato text-sm font-bold text-[#14302A] ">Bank</TableHead>
                            <TableHead className="font-bold font-lato text-sm  text-[#14302A] ">Active</TableHead>
                            <TableHead className="font-bold font-lato text-sm  text-[#14302A] ">Rank</TableHead>
                            <TableHead className="font-bold font-lato text-sm  text-[#14302A] ">Default</TableHead>
                            <TableHead className="font-bold font-lato text-sm  text-[#14302A] ">Intl. Default</TableHead>
                            <TableHead className="font-bold font-lato text-sm  text-[#14302A] border-r-0">Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {banks.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell className="w-[15%] font-lato text-xs text-[#14302A]">{row.bank}</TableCell>
                                <TableCell className="font-lato text-xs text-[#14302A]">{row.active}</TableCell>
                                <TableCell className="font-lato text-xs text-[#14302A]">{row.rank}</TableCell>
                                <TableCell>
                                    <div className="p-2 flex justify-center items-center h-[15px] w-[15px] rounded-[3px] border-[2px] border-[#005640] ">
                                        <input
                                            className="w-[8px] h-[8px] appearance-none rounded-[3px] border-[2px] border-[#F0F3EE] checked:bg-[#005640] checked:border-[#005640] checked:p-[5px]"
                                            type="checkbox"
                                            checked={row.default}
                                            onChange={() => handleCheckboxChange(i, "default")}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="p-2 flex justify-center items-center h-[15px] w-[15px] rounded-[3px] border-[2px] border-[#005640] ">
                                        <input
                                            className="w-[6px] h-[6px] appearance-none rounded-[3px] border-[2px] border-[#F0F3EE] checked:bg-[#005640] checked:border-[#005640] checked:p-[5px]"
                                            type="checkbox"
                                            checked={row.intlDefault}
                                            onChange={() => handleCheckboxChange(i, "intlDefault")}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="flex text-[#14302A] justify-between font-lato text-xs border-r-0">
                                    {row.details}
                                    <ViewModal />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}

