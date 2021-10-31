import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useContext } from "react";
import { StepContext } from "../../contexts/Step";
import styles from '../../styles/Form/Stepper/Stepper.module.css'

const steps = [
  "Quando os presentes serão entregues?",
  "Qual o valor mínimo do presente?",
  "Quantas pessoas vão participar?",
  "Informe o nome e email dos participantes!",
];

export default function StepperForm() {

const {step} = useContext(StepContext)

  return (
    <div className={styles.container}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
