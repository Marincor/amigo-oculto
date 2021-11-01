import { Typography } from "@mui/material";
import Head from "next/head";
import { useContext } from "react";
import Animation from "../components/animations";
import Amount from "../components/animations/Amount";
import Calendar from "../components/animations/Calendar";
import Finish from "../components/animations/Finish";
import Participants from "../components/animations/Participants";
import Price from "../components/animations/Price";
import Form from "../components/Form";
import StepperForm from "../components/Steppers";
import { StepContext } from "../contexts/Step";
import styles from "../styles/Home.module.css";


export default function Home() {

const {step} = useContext(StepContext)

function renderAnimation() {

  let currentAnimation = null;

  switch(step) {

    case 0: return currentAnimation = Calendar;
    break;
    case 1 : return currentAnimation = Price;
    break;
    case 2: return currentAnimation = Amount;
    break;
    case 3: return currentAnimation = Participants;
    break;
    case 4: return currentAnimation = Finish;
    break;
    default : return false;
  }

}


  return (
    <div className={styles.body}>
      <Head>
        <title>Amigo Oculto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={styles.body}>
        <main className={styles.main}>

          <Animation animation={renderAnimation()} />
          <StepperForm />
          <Form />
        </main>
        <footer className={styles.footer}>
            <Typography variant="subtitle1" component="h6">Coded and created by:</Typography>
            <a href="https://github.com/Marincor" target="blank"> Marincor</a>
        </footer>
      </body>

    </div>
  );
}
