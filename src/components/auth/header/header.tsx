import {Montserrat} from "next/font/google"

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

import {cn} from "@/lib/utils"

interface HeaderProps {
    label: string;
    paragraph: string;
}

export const Header = ({
  label,
  paragraph
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col items-center justify-center space-y-2">
            <h1 className={cn(
              montserrat.className,
              "text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-500"
            )}>{label}</h1>
            <p className={cn(
              montserrat.className,
              "text-sm text-muted-foreground"
            )}>
              {paragraph}
            </p>
        </div>


    )
}
