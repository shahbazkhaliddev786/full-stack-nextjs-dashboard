import { Button } from "@/components/ui/button";

interface ButtonProps{
    btn: string;
    bgColor: string;
}

export default function CustomButton({btn, bgColor}:ButtonProps){
    return (
        <>
            <Button type="button" style={{ backgroundColor: bgColor }} className=" font-lato text-white bg-[#00CE7E] rounded-[10px] focus:outline-none hover:bg-[#04a768]">
                {btn}
            </Button>
        </>
    )
} 