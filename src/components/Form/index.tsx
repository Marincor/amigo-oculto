import DateForm from "./DateInput";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepContext } from "../../contexts/Step";
import MinPrice from "./PriceInput";
import ParticipantAmount from "./AmountInput";
import Participants from "./ParticipantInput/index";
import { InfoContext } from "../../contexts/InputInfos";

export default function Form() {
  const { step, setStep } = useContext(StepContext);
  const { infos, setInfos } = useContext(InfoContext);

  function handleStep() {
    if (step < 4) {
      setStep(step + 1);
    }
  }

  function createGame() {
    console.log(infos);

    setStep(step + 1);
  }

  function renderInputs() {
    switch (step) {
      case 0:
        return <DateForm />;
        break;
      case 1:
        return <MinPrice />;
        break;
      case 2:
        return <ParticipantAmount />;
        break;
      case 3:
        return <Participants />;
        break;
      default:
        return <p>concluído com sucesso</p>;
        break;
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch", display: "flex" },
      }}
      noValidate
      autoComplete="off"
    >
      {renderInputs()}
      {step < 3 ? (
        <Button variant="contained" onClick={handleStep}>
          Próximo
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={createGame}
          disabled={step === 4 ? true : false}
        >
          Finalizar
        </Button>
      )}
    </Box>
  );
}
