import "dotenv/config";
import nodemailer from 'nodemailer';

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
      secure: false, // For port 25, usually false, but STARTTLS might be attempted
      ignoreTLS: false,
      // If your local SMTP server requires authentication, uncomment and fill this:
       auth: {
         user: 'concurso',
         pass: 'Plan2025'
       },
      tls: { // <--- Add this block
        rejectUnauthorized: false // <--- This is the key line to ignore self-signed certs
      }
    });

    let info = await transporter.sendMail({
      from: '"Rumbo a la Equidad" <concurso@rumboalaequidad.org>',
      to: `${recipientName} <${recipientEmail}>`,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    console.log("transporter: ", info);
    console.log("Message sent: %s", info.messageId);

    return { message: `Email sent successfully with message ID: ${info.messageId}` };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};
