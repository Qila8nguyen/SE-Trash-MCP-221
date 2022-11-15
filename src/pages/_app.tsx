import * as React from "react";
import { AppProps } from "next/app";

import "../styles/globals.scss";
import CustomLayout from "../components/layout";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}
