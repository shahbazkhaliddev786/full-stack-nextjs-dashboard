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
            <div className="p-3 w-full bg-[#F0F3EE]" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}>
                <Table className="bg-[#F0F3EE] py-1">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] font-lato text-sm text-[#14302A] font-bold">Bank</TableHead>
                            <TableHead className="font-bold font-lato text-sm text-[#14302A]">Active</TableHead>
                            <TableHead className="font-bold font-lato text-sm text-[#14302A]">Rank</TableHead>
                            <TableHead className="font-bold font-lato text-sm text-[#14302A]">Default</TableHead>
                            <TableHead className="font-bold font-lato text-sm text-[#14302A]">Intl. Default</TableHead>
                            <TableHead className="font-bold font-lato text-sm text-[#14302A] border-r-0">Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {banks.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell className="uppercase text-[#14302A] font-lato text-xs">{row.bank}</TableCell>
                                <TableCell className="font-lato text-xs text-[#14302A]">{row.active}</TableCell>
                                <TableCell className="font-lato text-xs text-[#14302A]">{row.rank}</TableCell>
                                <TableCell>

                                    <div className="p-2 flex justify-center items-center h-[15px] w-[15px] rounded-[3px] border-[2px] border-[#005640] ">
                                        <input
                                            className="w-[6px] h-[6px] appearance-none rounded-[3px] border-[2px] border-[#F0F3EE] checked:bg-[#005640] checked:border-[#005640] checked:p-[5px]"
                                            type="checkbox"
                                            checked={row.default}
                                            onChange={() => handleCheckboxChange(i, "default")}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>

                                    <div className="p-2 flex justify-center items-center h-[15px] w-[15px] rounded-[3px] border-[2px] border-[#005640] ">
                                        <input
                                            className="w-[8px] h-[8px] appearance-none rounded-[3px] border-[2px] border-[#F0F3EE] checked:bg-[#005640] checked:border-[#005640] checked:p-[5px]"
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
