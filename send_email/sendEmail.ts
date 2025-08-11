import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

export async function sendEmail(titulo) {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject:
      "Correo de validación de status coreWeb - fcert01, fcert02 y fdesa01",
    text: `
    Cordial saludo,

    Este correo sera enviado cuando se encuentre una anomalia con el estado de la web para coreWeb. 
    
    La prueba de consumo de servicios para core web fallo:
      - ${titulo}
    
    Muchas gracias por su atencion.
    `,
  };

  try {
    console.log("Enviando corre...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Correo enviado:", info.response);
  } catch (error) {
    console.error("❌ Error al enviar el correo:", error);
  }
}
