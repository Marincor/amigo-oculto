import { TextField, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { InfoContext } from "../../../contexts/InputInfos";
import styles from '../../../styles/Form/Participants/Participants.module.css'

export default function Participants() {
  const { infos, setInfos, error, messageError } = useContext(InfoContext);

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

    // new array of id's //
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
          <div key={participant} className={styles.participantContainer}>

               {/* Counting the current input for user */}
            <Typography variant="caption" component="h4"> {position+1} / {arrFocus.length} </Typography>
            
            {/* Input Name */}
            <TextField
               className={styles.ParticipantInput}
              required
              error={!infos.names[position] ? error: false}
              helperText={!infos.names[position] ? messageError.names : ""}
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              type="text"
              value={
                infos.names[position] !== null ? infos.names[position] : ""
              }
              onChange={handlerNameChange(position)}
             
            />

               {/* Input Email */}
            <TextField
          className={styles.ParticipantInput}

              required
              error={!infos.emails[position] ? error: false}
              helperText={!infos.emails[position] ? messageError.emails : ""}
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
