'use client';

import styles from "./login.button.module.css";
import { useRouter } from "next/navigation";


interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}


const LoginButton = ({
  children,
  mode = "redirect",
  asChild = false,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick =() =>{
    router.push("/auth/login");
  }

  if(mode === "modal"){
    return (
      <div>TODO Modal</div>
    )
  }
  else{
    return (
      <button onClick={onClick} className={styles.login_button}>
        Sign in
      </button>
    );
  }
};

export default LoginButton;
