import { TextField } from "@mui/material";
import { useContext } from "react";
import { InfoContext } from "../../../contexts/InputInfos";

export default function MinPrice() {
  const { infos, setInfos } = useContext(InfoContext);

  
  return (
    <TextField
      id="outlined-basic"
      label="Preço min R$"
      variant="outlined"
      type="number"
      value={infos.minPrice}
      onChange={(e)=>{

        setInfos({...infos, minPrice: e.target.value})
      }}
    />
  );
}
