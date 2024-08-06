

export default function Deposits() {
    return (
        <>
            <div className="bg-white w-[100%] h-[100%] flex flex-col drop-shadow-[10px_10px_4px_#0000000D]">
                <div className="h-[8rem] w-[100%] flex flex-col bg-[#005640]">
                    <div className="w-[100%]">
                        <h3 className="text-[#00CE7E] w-8 p-3 text-xl font-lato">Unmatched Deposits</h3>
                    </div>
                    <div className="flex justify-between w-[70%] px-3">
                        <div className="flex gap-11">
                            <h3 className="text-white text-sm font-bold font-lato">Date</h3>
                            <h3 className="text-white text-sm font-bold ml-[1.9rem] font-lato">Source</h3>
                            <h3 className="text-white text-sm font-bold ml-[5px] font-lato">Resources</h3>
                        </div>
                        <div className="flex gap-11">
                            <h3 className="text-white text-sm font-bold font-lato">Currency</h3>
                            <h3 className="text-white text-sm font-bold font-lato mr-5">Amount</h3>
                        </div>
                    </div>
                    <div className="flex justify-between w-[70%] px-3">
                        <div className="flex gap-11">
                            <h3 className="text-gray-200 text-xs font-lato">1 Jan 2023</h3>
                            <h3 className="text-gray-200 text-xs font-lato">Text Field</h3>
                            <h3 className="text-gray-200 text-xs font-lato">Text Field</h3>
                        </div>
                        <div className="flex gap-11">
                            <h3 className="text-gray-200 text-xs font-lato mr-[34px]">GBP</h3>
                            <h3 className="text-gray-200 text-xs font-lato">Number Field</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}