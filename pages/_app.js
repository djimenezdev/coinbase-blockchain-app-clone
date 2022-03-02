import { ThirdwebProvider } from "@3rdweb/react";
import "../styles/globals.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
