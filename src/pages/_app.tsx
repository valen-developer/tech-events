import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { DepsRegister } from "../DepsRegister";

const register = new DepsRegister();
register.registryRepositories();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
