import nodemailer from "nodemailer";

export const sendEmail = async ({
  recipientEmail,
  recipientName,
  emailSubject,
  htmlContent,
  textContent,
}) => {
  try {
    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: "concurso@rumboalaequidad.org",
        pass: "Plan2025$",
      },
    });

    // Set up email options
    const mailOptions = {
      from: '"Rumbo a la Equidad" <concurso@rumboalaequidad.org>',
      to: `${recipientName} <${recipientEmail}>`,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
      // cc: 'concurso@rumboalaequidad.org', // Uncomment if you wish to have a cc
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return { message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};
