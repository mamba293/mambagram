"use client"

import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface SideNavButtonProps {
  icon: IconType; 
  label: string; 
  route?: string; 
  size: number;
}

const color = "text-transparent bg-clip-text "
const grad="bg-gradient-to-r from-blue-700 to-purple-600 leading-relaxed"

const SideNavButton = ({ icon: Icon, label, route, size }: SideNavButtonProps) => {
  return (
    <div className="flex flex-column pl-5 w-full" >
          <Link href="" >
            <div className="flex items-center gap-5 hover:bg-gray-100 transition-all rounded-2xl pl-1 pt-4 pb-4 pr-16 w-48 h-16  ">
              <div className="bg-gradient-to-r from-blue-700 to-purple-600 p-2 rounded-3xl">
                <Icon
                  size={size}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <button
              // onClick={()=> router.push('')}
                type="button" 
                className={`font-semibold text-lg ${cn(montserrat.className)} ${color} ${grad}`}
              >
                {label}
              </button>
            </div>
          </Link>
      </div>
  )
}

export default SideNavButton;