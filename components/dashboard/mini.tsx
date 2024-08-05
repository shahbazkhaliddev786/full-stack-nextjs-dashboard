
import Image from "next/image";

interface MiniCardProps{
    text:string;
    spanText:number;
}

export default function MiniCard({text,spanText}:MiniCardProps) {
    return (
        <>
            <div className="p-3 w-[11rem] bg-[#005640] mt-1 rounded flex flex-col" style={{boxShadow: "4px 4px 4px 0 #0000001A" }}>
                <div className="w-full -mb-2 flex justify-end">
                    <Image width={15} height={15} src="/clock.png" alt="Clock Icon" />
                </div>
                <div>
                    <p className="text-white mt-1 font-lato text-sm">{text}</p>
                    <h2 >
                        <span className="text-[#00CE7E] font-lato text-xl">{spanText}</span>
                    </h2>
                </div>
            </div>
        </>
    )
}