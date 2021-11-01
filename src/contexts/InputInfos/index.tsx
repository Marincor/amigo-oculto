import { createContext, useEffect, useState } from "react";

export const InfoContext = createContext(null);

InfoContext.displayName = "Info of the ocult friend";

export const InfoProvider = (props: any) => {
  const [infos, setInfos] = useState({
    date: null,
    minPrice: null,
    participants: null,
    names: null,
    emails: null,
    ids: null
  });

  const [error, setError] = useState(false);

  const messageError = {
    date: "Preencha a data que ocorrerá a entrega",
    minPrice: "Informe o valor mínimo do amigo oculto",
    participants: "Min: 2 | Max: 10",
    names: "Informe o nome do participante",
    emails: "Informe o email do participante",
  };

  return (
    <InfoContext.Provider
      value={{ infos, setInfos, error, setError, messageError }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};
