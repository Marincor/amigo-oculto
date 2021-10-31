import DateForm from "./DateInput";
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { StepContext } from "../../contexts/Step";
import MinPrice from "./PriceInput";
import ParticipantAmount from "./AmountInput";
import Participants from "./ParticipantInput/index";
import { InfoContext } from "../../contexts/InputInfos";
import styles from "../../styles/Form/Form.module.css";

export default function Form() {
  const { step, setStep } = useContext(StepContext);
  const { infos, setInfos, error, setError } = useContext(InfoContext);

  function handleStep() {
    switch (step) {
      case 0:
        if (infos.date !== null && !error) {
          setStep(step + 1);
          setError(false);
        } else {
          setError(true);
        }
        break;
      case 1:
        if (infos.minPrice !== null && infos.minPrice > 0) {
          setStep(step + 1);
          setError(false);
        } else {
          setError(true);
        }
        break;
      case 2:
        if (infos.participants !== null && infos.participants > 1 && infos.participants < 31) {
          setStep(step + 1);
          setError(false);
          setInfos({
            ...infos,
            names: Array.from(new Array(infos.participants)).map(
              (participant) => participant
            ),
            emails: Array.from(new Array(infos.participants)).map(
              (participant) => participant
            ),
            ids: Array.from(new Array(infos.participants)).map(
              (participant) => participant
            )
          });

        } else {
          setError(true);
        }
        break;
      default:
        return false;
       
    }
  }

  const arrayParticipants = +infos.participants > 0 ? Array(+infos.participants).fill(0) : [];




 

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
        return  <Participants />;
        break;
      default:
        return <p>concluído com sucesso</p>;
        break;
    }
  }

  function createGame() {
    if (infos.names !== null && infos.emails !== null) {
      infos.names !== "" && infos.emails !== ""
        ? (setStep(step + 1), setError(false))
        : false;
    } else {
      setError(true);
    }
  }


  

  return (
    <form className={styles.form}>
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
    </form>
  );
}
