import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoginForm from "../components/login";
import { useAuth } from "../store/auth-context";

const LoginIndexPage = () => {
  const { loading, user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("----- authen at index", user);
  }, [user]);
  return <LoginForm />;
};

export default LoginIndexPage;
