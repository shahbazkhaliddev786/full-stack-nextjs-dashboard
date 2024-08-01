

export default function ContentLayout({children}:{ children: React.ReactNode }) {
    return (
        <>
            <div className="bg-[#F0F3EE] flex justify-center items-center">
                <div className="w-[100%] h-[100%]  pt-[24px] pl-[40px] pr-[30px]">
                    {children}
                </div>
            </div>
        </>
    )
}