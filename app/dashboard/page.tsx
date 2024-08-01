import ContentLayout from "@/components/ContentLayout";
import DashboardLayout from "@/components/Layout";
import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <ContentLayout>
          <h1 className="text-2xl font-bold font-aleo mb-4 text-[#005640]">Dashboard</h1>
          <div className="flex justify-between gap-1">
            {/* left */}
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-[#14302A] mb-4 rounded">
                <p className="text-white  font-lato text-sm mt-1">Total Company Funds Under Management</p>
                <h2 className="text-white  font-lato mt-1 flex gap-1">
                  <p className="-mt-2 font-lato text-base">$</p>
                  <span className="text-[#00CE7E] font-lato text-xl">999,999,999,999,999.99</span>
                </h2>
              </div>
              <div className="p-3 bg-[#BA8F52] mb-4 rounded mt-1">
                <p className="text-white mt-1 font-lato text-sm">Unmatched Funds</p>
                <h2 className="text-white mt-1 flex gap-1">
                  <p className="-mt-2 font-lato text-base">$</p>
                  <span className="text-white font-lato text-xl">999,999,999,999,999.99</span>
                </h2>
              </div>
              <div className="p-3 bg-[#00CE7E] mb-4 mt-1 rounded">
                <p className="text-white mt-1 font-lato text-sm">Pending Release</p>
                <h2 className="text-white mt-1 flex gap-1">
                  <p className="-mt-2 font-lato text-base">$</p>
                  <span className="text-white font-lato text-xl">999,999,999,999,999.99</span>
                </h2>
              </div>
              <div className="p-3 bg-[#005640] mb-4 mt-1 rounded flex flex-col">
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

            {/* right */}
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-white mb-4 rounded">
                <p className="text-[#14302A] mt-[3px] font-lato text-sm">Due To Trading Account</p>
                <h2 className="text-white mt-1 flex gap-1">
                  <p className="-mt-2 text-[#005640] font-lato text-base">$</p>
                  <span className="text-[#005640] font-lato text-xl">999,999,999,999,999.99</span>
                </h2>
              </div>

              <div className="p-3 bg-white mb-4 rounded mt-[5px]">
                <p className="text-[#14302A] mt-[3px] font-lato text-sm">Due From Trading Account</p>
                <h2 className="text-white mt-1 flex gap-1">
                  <p className="-mt-2 text-[#005640] font-lato text-base">$</p>
                  <span className="text-[#005640] font-lato text-xl">999,999,999,999,999.99</span>
                </h2>
              </div>

              <div className="p-3 bg-white mb-4 rounded mt-[5px]">
                <p className="text-[#14302A] mt-[3px] font-lato text-sm">Total Cash</p>
                <h2 className="text-white mt-1 flex gap-1">
                  <p className="-mt-2 text-[#005640] font-lato text-base">$</p>
                  <span className="text-[#005640] font-lato text-xl">999,999,999,999,999.99</span>
                </h2>
              </div>
              <div className="flex justify-between items-center gap-8">
                <div className="p-3 w-[11rem] bg-[#005640] mt-1 rounded flex flex-col">
                  <div className="w-full -mb-2 flex justify-end">
                    <Image width={15} height={15} src="/clock.png" alt="Clock Icon" />
                  </div>
                  <div>
                    <p className="text-white mt-1 font-lato text-sm">New Accounts</p>
                    <h2 >
                      <span className="text-[#00CE7E] font-lato text-xl">99999999</span>
                    </h2>
                  </div>
                </div>
                <div className="p-3 w-[11rem] bg-[#005640] mt-1 rounded flex flex-col">
                  <div className="w-full -mb-2 flex justify-end">
                    <Image width={15} height={15} src="/clock.png" alt="Clock Icon" />
                  </div>
                  <div>
                    <p className="text-white mt-1 font-lato text-sm">1st Time Deposit</p>
                    <h2>
                      <span className="text-[#00CE7E] font-lato text-xl">99999999</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentLayout>
      </DashboardLayout>
    </>
  )
}