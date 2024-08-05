import Image from "next/image";

interface DashboardCardProps {
    heading: string;
    headingColor: string;
    backgroundColor: string;
    textColor: string;
    spanText: string;
    spanTextColor: string;
}

export default function DashboardCard({
    heading,
    headingColor,
    backgroundColor,
    textColor,
    spanText,
    spanTextColor
}: DashboardCardProps) {
    return (
        <div className="p-3 mb-4 rounded-[6px]" style={{ backgroundColor, boxShadow: "4px 4px 4px 0 #0000001A" }}>
            <p className="mt-[3px] font-lato text-sm" style={{ color: headingColor }}>
                {heading}
            </p>
            <h2 className="mt-1 flex gap-1">
                <p className="-mt-2 font-lato text-base" style={{ color: textColor }}>$</p>
                <span className="font-lato text-xl" style={{ color: spanTextColor }}>{spanText}</span>
            </h2>
        </div>
    );
}
