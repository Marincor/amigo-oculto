import "../styles/globals.css";
import { StepProvider } from "../contexts/Step/index";
import {InfoProvider} from '../contexts/InputInfos/index'
function MyApp({ Component, pageProps }) {
  return (
    <StepProvider>
      <InfoProvider>
        <Component {...pageProps} />
      </InfoProvider>
    </StepProvider>
  );
}

export default MyApp;
