import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { getGlobalData } from "utils/api";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

App.getInitialProps = async (appContext: any): Promise<any> => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const globalLocale = await getGlobalData(appContext.router.locale);

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  };
};

export default App;
