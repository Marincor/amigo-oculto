import {Email} from '../../services/email/emailSender'

export default function sendEmails(to, body) {
  
    to?.map((email, position) => {
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