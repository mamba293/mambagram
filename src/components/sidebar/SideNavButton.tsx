"use client";

import { IconType } from "react-icons";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface SideNavButtonProps {
  icon: IconType;
  label: string;
  route?: string;
  size: number;
  onNavClick: () => void;
}

const SideNavButton = ({ icon: Icon, label, size, onNavClick }: SideNavButtonProps) => {
  return (
    <div className="pl-5 w-full">
      <button
        onClick={onNavClick}
        type="button"
        className={cn(
          "flex items-center gap-5 hover:bg-gray-100 transition-all rounded-2xl p-4 w-48 h-16",
          montserrat.className
        )}
      >
        <div className="bg-gradient-to-r from-blue-700 to-purple-600 p-2 rounded-3xl">
          <Icon
            size={size}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <span className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 leading-relaxed">
          {label}
        </span>
      </button>
    </div>
  );
};

export default SideNavButton;
