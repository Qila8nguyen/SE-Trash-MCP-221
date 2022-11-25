import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoginForm from "../components/login";
import { useAuth } from "../store/auth-context";

const LoginIndexPage = () => {
  const authen = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("authen at index", authen);
    if (authen.isAuthenticated) {
      const { user } = authen;
      console.log("------ user", user);
      // router.push(`/${user?.role}`);
    }
  }, [authen]);
  return <LoginForm />;
};

export default LoginIndexPage;
