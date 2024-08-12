
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header
                style={{borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}}
                className="header z-[10] flex justify-between items-center text-white bg-white h-[10vh] w-[100%] left-auto top-0 right-0 drop-shadow-[5px_0px_10px_rgba(0,0,0,0.25)]">
                <div className="text-black"></div>
                <div className="h-12 px-6 flex relative items-center justify-end">
                    <div className="w-[1px] mr-1 h-8 bg-[#F0F3EE]"></div>
                    <button className="relative  block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                        <Image className="object-cover" height={45} width={45} src="/user.svg" alt="Avatar" />
                    </button>
                    <div>
                        <form className="max-w-sm mx-auto font-lato">
                            <select defaultValue="admin" id="countries" className=" text-gray-900 cursor-pointer text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="admin" className="cursor-pointer text-[16px]">Blockkain Admin</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </form>
                    </div>
                </div>
            </header>
        </>
    )
}