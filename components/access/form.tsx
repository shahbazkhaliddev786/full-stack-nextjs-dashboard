import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AuthFormProps {
    firstPlaceholder: string;
    secondPlaceHolder: string;
    btn: string;
}

// props-types

export default function AuthForm({ firstPlaceholder, secondPlaceHolder, btn }: AuthFormProps) {
    return (
        <div className="mt-[41px] w-full flex justify-center lg:justify-start">
            <form className="w-full max-w-xs">
                <div className="mb-6">
                    <Input 
                        type="text" 
                        name="text" 
                        id="text" 
                        placeholder={firstPlaceholder} 
                        style={{ boxShadow: "4px 4px 4px 0px #00000005" }}
                        className="w-full bg-[#F0F3EE] px-[20.95px] py-[10.56px] placeholder-[#8C9B91] rounded-[5px] focus:outline-none focus:ring-0 dark:text-white dark:placeholder-gray-500 placeholder:italic font-lato" 
                    />
                </div>
                <div className="mmb-[22.74px]">
                    <Input 
                        type="text" 
                        name="text" 
                        id="text" 
                        placeholder={secondPlaceHolder} 
                        style={{ boxShadow: "4px 4px 4px 0px #00000005" }}
                        className="w-full bg-[#F0F3EE] px-[20.95px] py-[10.56px] placeholder-[#8C9B91] rounded-[5px] focus:outline-none focus:ring-0 dark:text-white placeholder:italic font-lato" 
                    />
                </div>
                <div className="mt-[32px]"> 
                    {/* // Tailwind's built-in drop-shadow utility doesn't support spread values */}
                    <Button type="button" style={{ boxShadow: "4px 4px 4px 0px #0000001A" }} className="pt-[10px] pb-[6px] px-[20px] uppercase font-lato text-white bg-[#00CE7E] rounded-[10px] focus:outline-none hover:bg-[#04a768]">
                        {btn}
                    </Button>
                </div>
            </form>
        </div>
    );
}
