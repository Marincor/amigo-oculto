import { TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import { InfoContext } from "../../../contexts/InputInfos";

export default function Participants() {
  const { infos, setInfos, error, messageError } = useContext(InfoContext);

  useEffect(() => {
    console.log(infos.names);
  }, []);

  const handlerEmailChange = (position) => (e) => {
    // new array of emails //
    const newArr = infos.emails;
    newArr[position] = e.target.value;

    setInfos({
      ...infos,
      emails: newArr,
    });
  };

  const handlerNameChange = (position) => (e) => {
    // id of the participant //
    const arrID = infos.ids;
    arrID[position] = Math.round(Math.random() * Math.random() * 295745);

    // new array of names //
    const newArr = infos.names;
    newArr[position] = e.target.value;

    setInfos({
      ...infos,
      names: newArr,
      ids: arrID,
    });
  };

  // array to prevent stop focus on input //
  const arrFocus = Array(+infos.participants ?? 0).fill(0);
  return (
    <>
      {arrFocus?.map((participant, position: any) => {
        return (
          <div key={participant}>
            <TextField
              required
              error={error}
              helperText={error ? messageError.names : ""}
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              type="text"
              value={
                infos.names[position] !== null ? infos.names[position] : ""
              }
              onChange={handlerNameChange(position)}
            />
            <TextField
              required
              error={error}
              helperText={error ? messageError.emails : ""}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              value={infos.emails[position]}
              onChange={handlerEmailChange(position)}
            />
          </div>
        );
      })}
    </>
  );
}
