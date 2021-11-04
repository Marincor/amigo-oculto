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
import Image from 'next/image'
import Logo from '../../public/assets/img/logo.png'


export default function Home() {

const {step} = useContext(StepContext)

// change animation by stepper//
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
    <div className={styles.container}>
      <Head>
        <title>Amigo Oculto</title>
        <meta name="description" content="Faça suas festas de amigo secreto com o Amigo Oculto! - Coded and created by: Marincor." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <meta property="og:image" content="../../public/assets/img/logo.png" />
      </Head>
      <body className={styles.body}>

        <header className={styles.header}>
        
            <Typography variant="h4" component="h1" fontFamily="monospace">   <Image src={Logo} alt="logo-amigo-oculto" width="20rem" height="20rem" /> Amigo Oculto</Typography>
        </header>
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
