"use client";

import SideNavButton from "@/components/sidebar/SideNavButton";
import { IoMdHome, IoMdSearch, IoMdFilm } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { Montserrat } from "next/font/google";
import { useSearchDrawer } from "@/context/SearchDrawerContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SideNav = () => {
  const { openDrawer } = useSearchDrawer();
  return (
      <div className="relative h-full pr-5">
        {/* Боковая линия */}
        <div className="absolute right-0 top-0 h-full w-px bg-gray-200"></div>

        <div className="flex pt-5 pl-5 pb-10">
            <h1
              className={`text-3xl font-bold text-transparent 
                  bg-clip-text bg-gradient-to-r 
                  from-blue-700 to-purple-600 leading-relaxed `}
            >
              Mambagram
            </h1>
        </div>

        <div className="flex flex-col pt-5 gap-1">
          <SideNavButton
            icon={IoMdHome}
            label="Home"
            route="/home"
            size={30}
            onNavClick={()=>console.log()}
          />

          <SideNavButton
            icon={IoMdSearch}
            label="Search"
            size={30}
            onNavClick={() => openDrawer()}
          />

          <SideNavButton
            icon={IoMdFilm}
            label="Reels"
            route="/profile"
            size={30}
            onNavClick={() => console.log("test")}
          />
          <SideNavButton
            icon={LuMessageCircle}
            label="Messages"
            route="/profile"
            size={30}
            onNavClick={() => console.log("test")}
          />
          <SideNavButton
            icon={IoPersonOutline}
            label="Profile"
            route="/profile"
            size={30}
            onNavClick={() => console.log("test")}
          />
        </div>
      </div>
  );
};

export default SideNav;
