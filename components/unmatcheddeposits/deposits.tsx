

export default function Deposits() {
    return (
        <>
            <div className="bg-white w-[100%] h-[100%] flex flex-col rounded-[10px]">
                <div
                    className="h-[7rem] w-[100%] rounded-[10px] flex flex-col bg-[#005640]" style={{boxShadow:'0px 10px 4px 0px rgba(0, 0, 0, 0.05)'}}>
                    <div className="w-[100%]">
                        <h3 className="text-[#00CE7E] w-8 pt-[4px] pl-[14px] text-[20px] font-lato">Unmatched Deposits</h3>
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