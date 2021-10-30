import { TextField } from "@mui/material";
import { useContext } from "react";
import { InfoContext } from "../../../contexts/InputInfos";

export default function MinPrice() {
  const { infos, setInfos, error, setError, messageError } = useContext(InfoContext);

  
  return (
    <TextField
    required
    error={error}
    helperText={error? messageError.minPrice: ""}
      id="outlined-basic"
      label="Preço min R$"
      variant="outlined"
      type="number"
      value={infos.minPrice}
      onChange={(e)=>{

        setInfos({...infos, minPrice: e.target.value});
        setError(false)
      }}
    />
  );
}
