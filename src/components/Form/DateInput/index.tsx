import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useContext, useState } from "react";
import { InfoContext } from "../../../contexts/InputInfos";

export default function DateForm() {
  const { infos, setInfos } = useContext(InfoContext);



  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Data da entrega"
        value={infos.date}
        onChange={(newValue) => {
          setInfos({ ...infos, date: newValue });
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
