import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey:
    "mlsn.82a3b51957de8d49d047203e52e0ab3a90f93b0663bd133413d0f7acc1900ba3",
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

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
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
