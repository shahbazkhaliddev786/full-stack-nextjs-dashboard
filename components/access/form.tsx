import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AuthFormProps {
    firstPlaceholder: string;
    secondPlaceHolder: string;
    btn: string;
}

export default function AuthForm({ firstPlaceholder, secondPlaceHolder, btn }: AuthFormProps) {
    return (
        <div className="mt-4 w-full flex justify-center lg:justify-start">
            <form className="w-full max-w-xs">
                <div className="mb-6">
                    <Input 
                        type="text" 
                        name="text" 
                        id="text" 
                        placeholder={firstPlaceholder} 
                        className="w-full bg-[#F0F3EE] px-3 py-2 placeholder-gray-500 rounded-[5px] focus:outline-none focus:ring-0 dark:text-white dark:placeholder-gray-500 placeholder:italic font-lato" 
                    />
                </div>
                <div className="mb-6">
                    <Input 
                        type="text" 
                        name="text" 
                        id="text" 
                        placeholder={secondPlaceHolder} 
                        className="w-full bg-[#F0F3EE] px-3 py-2 placeholder-gray-500 rounded-[5px] focus:outline-none focus:ring-0 dark:text-white dark:placeholder-gray-500 placeholder:italic font-lato" 
                    />
                </div>
                <div className="mb-6">
                    <Button type="button" className="w-[100px] h-[40px] font-lato text-white bg-[#00CE7E] rounded-[10px] focus:outline-none hover:bg-[#04a768]">
                        {btn}
                    </Button>
                </div>
            </form>
        </div>
    );
}
