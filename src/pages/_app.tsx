import React, { useEffect } from "react";
import "../styles/globals.scss";
import CustomLayout from "../components/layout";
import LoginForm from "../components/login";
import { AuthProvider, getUser } from "../store/auth-context";
import Router, { useRouter } from "next/router";
import { ProtectRoute } from "../store/protected";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { path } = pageProps;
  const router = useRouter();

  return (
    <AuthProvider>
      <ProtectRoute>
        {path === "/" ? (
          <Component {...pageProps} />
        ) : (
          <CustomLayout>
            <Component {...pageProps} />
          </CustomLayout>
        )}
      </ProtectRoute>
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const { req, res } = appContext;
  return {
    pageProps: {
      path: appContext?.ctx.pathname,
    },
  };
};
