import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey:
    "mlsn.82a3b51957de8d49d047203e52e0ab3a90f93b0663bd133413d0f7acc1900ba3",
});

export const sendEmail = async (req, res) => {
  try {
    const {
      recipientEmail,
      recipientName,
      emailSubject,
      htmlContent,
      textContent,
    } = req.body;

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
    return res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
};
