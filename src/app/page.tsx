import Image from "next/image";
import LoginButton from "@/components/auth/login-button/login-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-fit">
          <Image src="/svg/logo.svg" alt="Mambagram" width={250} height={250} />
      </div>
      <div >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 leading-relaxed ">Mambagram</h1>
      </div>
      <LoginButton mode="redirect">
        Login
      </LoginButton>
    </div>
  );
}
