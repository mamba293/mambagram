'use client';

import {Button} from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
});

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({
  label,
  href,
}: BackButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  }

  return (
    <Button
      variant="link"
      className={`font-small w-full ${montserrat.className}`}
      size="sm"
      onClick={onClick}
    >
        {label}
    </Button>
  );
};

export default BackButton;

