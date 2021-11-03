import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useContext, useState } from "react";
import { InfoContext } from "../../../contexts/InputInfos";

export default function DateForm() {
  const { infos, setInfos, error, setError, messageError } =
    useContext(InfoContext);

  // formating the date to put at in the placeholder input //
const dateDay =  JSON.stringify(infos?.date).substr(9,2);
const dateMonth = JSON.stringify(infos?.date).substr(6,2);
const dateYear = JSON.stringify(infos?.date).substr(1,4);
const dateFormated = infos?.date ? `${dateDay}/${dateMonth}/${dateYear}` : false;



  return (
    <LocalizationProvider onClick={(e) => console.log('teste')}  dateAdapter={AdapterDateFns}>
      <DatePicker

        onError={(e) => {
          setError(true);
        }}
      
        label="Data da entrega"
        inputFormat={ dateFormated || '↪↪↪'}
        value={infos.date}
        onChange={(newValue) => {

          if(!newValue) {

            console.log('invalido')
          } else {

            setInfos({ ...infos, date: newValue });

            setError(false);
          }
        
        }}
        renderInput={(params) => (
          <TextField
            onFocus={(e) => e.target.blur()}
            color={error ? "error" : "primary"}
            required
            error={error}
            helperText={error ? messageError.date : ""}
            {...params}
            onFocusCapture={(e) => {

              // click on calendar at the focus //
              const buttonCalendar = document.querySelector(".MuiButtonBase-root");

              buttonCalendar.click()
            }}
      
          />
        )}
      />
    </LocalizationProvider>
  );
}
