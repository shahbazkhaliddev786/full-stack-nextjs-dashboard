import Image from "next/image";
import DashboardCard from "@/components/dashboard/card";

export default function LeftSide() {
  return (
    <>
      <div className="flex flex-col gap-[15px] w-[35%]">
        <DashboardCard
          heading="Total Company Funds Under Management"
          headingColor="#FFFF"
          backgroundColor="#14302A"
          textColor="#FFF"
          spanText="999,999,999,999,999,999,999.99"
          spanTextColor="#00CE7E"
        />

        <DashboardCard
          heading="Unmatched Funds"
          headingColor="#FFFF"
          backgroundColor="#BA8F52"
          textColor="#FFF"
          spanText="999,999,999,999,999.99"
          spanTextColor="#FFFF"
        />

        <DashboardCard
          heading="Pending Release"
          headingColor="#FFFF"
          backgroundColor="#00CE7E"
          textColor="#FFF"
          spanText="999,999,999,999,999.99"
          spanTextColor="#FFF"
        />

        <div className="p-3 bg-[#005640] mb-4 mt-1 rounded flex flex-col" style={{boxShadow: "4px 4px 4px 0 #0000001A" }}>
          <div className="w-full -mb-3 flex justify-end">
            <Image width={15} height={15} src="/clock.png" alt="Clock Icon" />
          </div>
          <div>
            <p className="text-white mt-1 font-lato text-sm">Revenue [Month to Date]</p>
            <h2 className="text-white mt-1 font-lato flex gap-1">
              <p className="-mt-2 font-lato text-base">$</p>
              <span className="text-[#00CE7E] font-lato text-xl">999,999,999,999,999.99</span>
            </h2>
          </div>
        </div>
      </div>

    </>
  )
}