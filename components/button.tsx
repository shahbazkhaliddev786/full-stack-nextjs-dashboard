import { Button } from "@/components/ui/button";

interface ButtonProps{
    btn: string;
    bgColor: string;
    // hoverColor: string;
}

export default function CustomButton({btn, bgColor}:ButtonProps){
    return (
        <>
            <Button type="button" style={{ backgroundColor: bgColor }} className="pt-10 pb-11 px-[25px] cursor-pointer font-lato text-white uppercase rounded-[10px] focus:outline-none">
                {btn}
            </Button>
        </>
    )
} 