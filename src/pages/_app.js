import "../styles/globals.css";
import { StepProvider } from "../contexts/Step/index";
import { InfoProvider } from "../contexts/InputInfos/index";
import {GameProvider} from '../contexts/Game/index'

function MyApp({ Component, pageProps }) {
  return (
    <StepProvider>
      <InfoProvider>
        <GameProvider>
          <Component {...pageProps} />
        </GameProvider>
      </InfoProvider>
    </StepProvider>
  );
}

export default MyApp;
