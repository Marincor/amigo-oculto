import Head from "next/head";
import Form from "../components/Form";
import StepperForm from "../components/Steppers";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={styles.body}>
        <main className={styles.main}>
          <StepperForm />
          <Form />
        </main>
      </body>
    </div>
  );
}
