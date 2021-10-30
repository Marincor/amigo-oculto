import { TextField } from "@mui/material";
import { useContext } from "react";
import { InfoContext } from "../../../contexts/InputInfos";

export default function Participants() {

  const { infos, setInfos, error, messageError } = useContext(InfoContext);

  return (
    <>
      <TextField
      required
      error={error}
      helperText={error? messageError.names: ""}
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        type="text"
        value={infos.names}
        onChange={(e)=>{

          setInfos({...infos, names: e.target.value})
        }}
      />
         <TextField
         required
            error={error}
            helperText={error? messageError.emails: ""}
        id="outlined-basic"
        label="email"
        variant="outlined"
        type="email"
        value={infos.emails}
        onChange={(e)=>{
          setInfos({...infos, emails: e.target.value})
        }}
      />
    </>
  );
}
