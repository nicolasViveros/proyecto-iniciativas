import "dotenv/config";
import nodemailer from 'nodemailer'; // <--- Changed this line

export const sendEmail = async ({
  recipientEmail,
  recipientName,
  emailSubject,
  htmlContent,
  textContent,
}) => {
  try {
    let transporter = nodemailer.createTransport({
      host: 'localhost',
      port: 25,
      secure: false,
    });

    let info = await transporter.sendMail({
      from: '"Rumbo a la Equidad" <concurso@rumboalaequidad.org>',
      to: `${recipientName} <${recipientEmail}>`,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    console.log("Message sent: %s", info.messageId);

    return { message: `Email sent successfully with message ID: ${info.messageId}` };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};
