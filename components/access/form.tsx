import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AuthFormProps {
    firstPlaceholder: string;
    secondPlaceHolder: string;
    btn:string;
}

export default function AuthForm({ firstPlaceholder, secondPlaceHolder,btn }: AuthFormProps) {
    return (
        <>
            <div className="mt-4 w-full flex justify-center lg:justify-start">
                <form className="w-full max-w-xs">
                    <div className="mb-6">
                        <Input type="email" name="email" id="email" placeholder={firstPlaceholder} className="w-full bg-[#F0F3EE] px-3 py-2 placeholder-gray-500 rounded-md focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 placeholder:italic font-lato" />
                    </div>
                    <div className="mb-6">
                        <Input type="password" name="password" id="password" placeholder={secondPlaceHolder} className="w-full bg-[#F0F3EE] px-3 py-2 placeholder-gray-500 rounded-md focus:outline-none focus:ring dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 placeholder:italic font-lato" />
                    </div>
                    <div className="mb-6">
                        <Button type="button" className="px-1 py-1 font-lato text-white bg-[#00CE7E] rounded-2 focus:outline-none hover:bg-[#04a768]">{btn}</Button>
                    </div>
                </form>
            </div>
        </>
    )
}