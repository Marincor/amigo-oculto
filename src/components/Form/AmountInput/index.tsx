import { TextField } from "@mui/material";
import { useContext } from "react";
import { InfoContext } from "../../../contexts/InputInfos";

export default function ParticipantAmount() {
  const { infos, setInfos } = useContext(InfoContext);

  return (
    <TextField
      id="outlined-basic"
      label="Participantes"
      variant="outlined"
      type="number"
      value={infos.participants}
      onChange={(e)=>{
          setInfos({...infos, participants: e.target.value})
      }}
    />
  );
}
