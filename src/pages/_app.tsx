import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { DepsRegister } from "../DepsRegister";
import { ThemeProvider } from "../features/Shared/presentation/providers/ThemeProvider";

const register = new DepsRegister();
register.registryRepositories();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
