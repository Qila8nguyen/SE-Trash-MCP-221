import { useAuth } from "./auth-context";
import { Skeleton, Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("---- At client side", loading, user);
  }, [user]);

  if (loading || (!isAuthenticated && router.pathname !== "/")) {
    return <Skeleton />;
  }
  return children;
};
