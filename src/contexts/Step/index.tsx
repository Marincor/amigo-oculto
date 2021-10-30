import { createContext, useState } from "react";

export const StepContext = createContext(null);

StepContext.displayName = "Step"

export const StepProvider = (props: any) => {
  const [step, setStep] = useState(0);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {props.children}
    </StepContext.Provider>
  );
};
