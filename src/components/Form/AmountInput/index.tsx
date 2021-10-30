import { TextField } from "@mui/material";
import { useContext } from "react";
import { InfoContext } from "../../../contexts/InputInfos";

export default function ParticipantAmount() {
  const { infos, setInfos, error, setError, messageError } =
    useContext(InfoContext);

    console.log(error, setError, messageError)

  return (
    <TextField
    required
      error={error}
      helperText={error ? messageError.participants : ""}
      id="outlined-basic"
      label="Participantes"
      variant="outlined"
      type="number"
      value={infos.participants}
      onChange={(e) => {
        setInfos({ ...infos, participants: Math.round( +e.target.value)});
        setError(false);
      }}
    />
  );
}
