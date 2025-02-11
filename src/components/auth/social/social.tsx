'use client'

import {FcGoogle} from "react-icons/fc";
import {FaInstagram} from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() => {}}
            >
              <FcGoogle className="w-5 h-5"/> 
            </Button>
            <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() => {}}
            >
              <FaInstagram className="w-5 h-5" style={{
                color: '#fff',
                background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
                borderRadius: '5px'
              }}
              />
            </Button>



        </div>
    )
}
