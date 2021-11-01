import { createContext, useContext, useEffect, useState } from "react";
import { InfoContext } from "../InputInfos/index";
import { Email } from "./emailSender";

export const GameContext = createContext(null);

GameContext.displayName = "Game";

export const GameProvider = (props: any) => {
  const [gameArr, setGameArr] = useState([]);
  const { infos } = useContext(InfoContext);

  // get the ID's //
  const arrID = Array.from(gameArr[2] ?? []);

  // shuffle ID's function //

  function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Element reposition
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  // condition to shufle ID's //
  const checkUnity = (array, position) => {
    if (array[position] === gameArr[2][position]) {
      shuffleArray(array);
    }

    return console.log(array[position] === gameArr[2][position]);
  };

  // map to apply condition of shuffle //

  gameArr[0]?.map((arr, position) => {
    checkUnity(arrID, position);
  });

  // number of lucky list //

  const listIds = gameArr[0]?.map((name, position) => {
    return `
    <tr>
      <td>${gameArr[2][position]}</td>
      <td>${arrID[position]}</td>
    </tr>
  
    `;
  });

  // form ocult friend //
  function formOcultFriend() {
    let arrBody = [];
    let arrEmails = [];

    gameArr[0]?.map((name, position) => {
      const findIndexFriend = gameArr[2].findIndex(
        (item) => item === arrID[position]
      );
      const friend = gameArr[0][findIndexFriend];
      const date = `${JSON.stringify(infos?.date).substr(
        9,
        2
      )} / ${JSON.stringify(infos?.date).substr(6, 2)} / ${JSON.stringify(
        infos?.date
      ).substr(1, 4)} `;

      //message of email body //

      const body = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Amigo Oculto</title>
          <style>
      
              .container {
      
                  display: flex;
                  font-family: sans-serif;
                  flex-direction: column;
                  justify-content: center;
                  padding: 4rem;
                  overflow-x: hidden;
              }
      
              .main {
      
                display: flex;
                flex-direction: column;
                color: gray;
                font-weight: bold;
              }
      
              .ocult {
      
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
              }
      
              .ocult__title{
      
                 color: darkblue;
                 font-weight: bold;
                 font-size: 4rem;
                 font-family: monospace;
      
              }
      
              .creator {
                  display: flex;
                  background-color: whitesmoke;
                  border-radius: 2rem;
                  justify-content: center;
                  align-items: center;
              }
              table {
                font-family: sans-serif;
                border-collapse: collapse;
                width: 40%;
              }
              
              td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
              }
              
              tr:nth-child(even) {
                background-color: #dddddd;
              }
          </style>
      </head>
      <body class="container">
          <main class="main">
              <section class="ocult">
              <h2 class="ocult__name">Olá, ${name} ! Nossas boas-vindas ao</h2> <h1 class="ocult__title">Amigo Oculto!</h1> 
              <hr/> <p style="color:gray">Sua amizade oculta é: <strong> ${friend}</strong>. A data da entrega do presente será em <strong>${date}</strong>  e o valor mínimo do presente deverá ser de R$ <strong>${+infos?.minPrice}</strong> reais. </p> <br/>
              <p style="color: gray"> Aaah... não se esqueça de guardar segredo até o grande dia, hein?! </p>
              <img alt="gif homem pedindo segredo" src="https://i.pinimg.com/originals/75/6f/5a/756f5afdc1102831b1859634dc7c38f5.gif" width="400px" />
          </div>
              <p style="color: gray">Seu número da sorte é esse: ${
                gameArr[2][position]
              }. Cada participante recebe um número da sorte, esse número garante que ninguem da brincadeira retire a mesma pessoa. Nessa edição irão participar ${
        gameArr[0]?.length
      } pessoas. Segue a lista com os números da sorte dessa edição: <br/>  <table>
      <tr>
        <th>Número da sorte</th>
        <th>Retirou</th>
      </tr>
      ${listIds}
    </table>. <br/><br/>Obs: Os números da sorte são apenas para que você confirme que todos os participantes retiraram uma pessoa diferente, não revele seu número da sorte para ninguém. </p>
              </section> 
      
              <section class="creator">
      
                  <p class="creater__text">Amigo oculto foi criado por: </p> <a href="https://github.com/Marincor" target="blank" class="creater__link">Marincor</a>
              </section>
      </body>
      </html>`;

      return arrBody.push(body), arrEmails.push(gameArr[1][position]);
    });

    const params = {
      body: arrBody,
      emails: arrEmails,
    };

    return params;
  }

  // email sender function //

  function sendEmails(to, body) {
    console.log("clicado send email" + to);
    to?.map((email, position) => {
      console.log(email, body[position]);
      return Email.send({
        Host: "smtp.elasticemail.com",
        Username: process.env.NEXT_PUBLIC_PUBLISHABLE_USER,
        Password: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
        To: email,
        From: process.env.NEXT_PUBLIC_PUBLISHABLE_MAIL,
        Subject: "Amigo Oculto",
        Body: body[position],
      }).then((message) => console.log(message));
    });
  }

  const [to, setTo] = useState(null);
  const [body, setBody] = useState(null);

  // getting the emails and the custom message //

  useEffect(() => {
    if (gameArr.length > 0) {
      setTo(formOcultFriend().emails);
      setBody(formOcultFriend().body);
    }
  }, [gameArr]);

  // sending email after click //

  if (body) {
    sendEmails(to, body);
    setBody(null);
  }

  return (
    <GameContext.Provider value={{ gameArr, setGameArr, sendEmails, to, body }}>
      {props.children}
    </GameContext.Provider>
  );
};
