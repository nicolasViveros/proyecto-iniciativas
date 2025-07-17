import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

export const sendEmail = async ({
  recipientEmail,
  recipientName,
  emailSubject,
  htmlContent,
  textContent,
}) => {
  try {
    const sentFrom = new Sender(
      "concurso@rumboalaequidad.org",
      "Rumbo a la Equidad"
    );
    const recipients = [new Recipient(recipientEmail, recipientName)];

    // const cc = [
    //   new Recipient("concurso@rumboalaequidad.org", "Rumbo a la Equidad"),
    // ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      //.setCc(cc)
      .setReplyTo(sentFrom)
      .setSubject(emailSubject)
      .setHtml(htmlContent)
      .setText(textContent);

    await mailerSend.email.send(emailParams);
    return { message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};
