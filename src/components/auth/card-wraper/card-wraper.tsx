'use client'

import { Card,
  CardContent,
  CardFooter,
  CardHeader
 } from "@/components/ui/card";
import { Header } from "../header/header";
import { Social } from "../social/social";
import BackButton from "../back-button/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    headerParagraph: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  headerParagraph,
  backButtonLabel,
  backButtonHref,
  showSocial = false,

}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-lg">
          <CardHeader>
            <Header label={headerLabel} paragraph={headerParagraph}/>
          </CardHeader>
          <CardContent>
           {children}
          </CardContent>
          {showSocial && (
            <CardFooter>
              <Social/>
            </CardFooter>
          )}
          <CardFooter>
            <BackButton
              label={backButtonLabel}
              href={backButtonHref}
            />
          </CardFooter>
        </Card>

    )
}

export default CardWrapper;
