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

const initialUK: Bank[] = [
    {
        bank: "WISE",
        active: "Yes",
        rank: 1,
        default: false,
        intlDefault: true,
        details: "Currencies Receivable: GBP"
    },
    {
        bank: "Circle",
        active: "Yes",
        rank: 2,
        default: false,
        intlDefault: false,
        details: "Currencies Receivable: EUR"
    },
    {
        bank: "Simple",
        active: "Yes",
        rank: 3,
        default: false,
        intlDefault: false,
        details: "Currencies Receivable: N/A"
    }
];

export default function UK() {
    const [banks, setBanks] = useState(initialUK);

    const handleCheckboxChange = (index: number, field: keyof Bank) => {
        setBanks(prevBanks =>
            prevBanks.map((bank, i) =>
                i === index ? { ...bank, [field]: !bank[field] } : bank
            )
        );
    };

    return (
        <>
            <div className="p-3 w-full bg-[#F0F3EE] drop-shadow-[4px_4px_4px_#0000001A]">
                <Table className="bg-[#F0F3EE] py-1">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] font-lato text-sm font-bold">Bank</TableHead>
                            <TableHead className="font-bold font-lato text-sm">Active</TableHead>
                            <TableHead className="font-bold font-lato text-sm">Rank</TableHead>
                            <TableHead className="font-bold font-lato text-sm">Default</TableHead>
                            <TableHead className="font-bold font-lato text-sm">Intl. Default</TableHead>
                            <TableHead className="font-bold font-lato text-sm border-r-0">Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {banks.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium uppercase font-lato text-xs">{row.bank}</TableCell>
                                <TableCell className="font-lato text-xs">{row.active}</TableCell>
                                <TableCell className="font-lato text-xs">{row.rank}</TableCell>
                                <TableCell>

                                    <div className="p-2 flex justify-center items-center h-[20px] w-[20px] rounded-[3px] border-[2px] border-[#005640] ">
                                        <input
                                            className="w-[10px] h-[10px] appearance-none rounded-[3px] border-[2px] border-[#F0F3EE] checked:bg-[#005640] checked:border-[#005640] checked:p-[5px]"
                                            type="checkbox"
                                            checked={row.default}
                                            onChange={() => handleCheckboxChange(i, "default")}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>

                                    <div className="p-2 flex justify-center items-center h-[20px] w-[20px] rounded-[3px] border-[2px] border-[#005640] ">
                                        <input
                                            className="w-[10px] h-[10px] appearance-none rounded-[3px] border-[2px] border-[#F0F3EE] checked:bg-[#005640] checked:border-[#005640] checked:p-[5px]"
                                            type="checkbox"
                                            checked={row.intlDefault}
                                            onChange={() => handleCheckboxChange(i, "intlDefault")}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="border-r-0 font-lato text-xs flex justify-between">
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
