import nodemailer from 'nodemailer';

// This function now replaces your original sendEmail
export const sendEmail = async ({
  recipientEmail,
  recipientName, // Nodemailer uses just recipientEmail for 'to' field
  emailSubject,
  htmlContent,
  textContent,
}) => {
  try {
    // Configure the SMTP transport for your local server
    let transporter = nodemailer.createTransport({
      host: 'rumboalaequidad.org', // Or your SMTP server's IP address
      port: 25, // Or the port your SMTP server is listening on (e.g., 587 for TLS, 465 for SSL)
      secure: false, // true for port 465 (SSL), false for other ports (like 25, 587 for STARTTLS)
      // If your local SMTP server requires authentication, uncomment and fill this:
      // auth: {
      //   user: 'your_smtp_username',
      //   pass: 'your_smtp_password'
      // },
      // If you're using STARTTLS on a port like 587 and need to bypass certificate validation for local testi
ng:
      // tls: {
      //    rejectUnauthorized: false
      // }
    });

    // Define the email content
    // Note: Nodemailer's 'to' field can take a comma-separated string or an array of addresses.
    // If recipientName is crucial for display, you can format 'to' as "Recipient Name <recipient@example.com>
"
    let info = await transporter.sendMail({
      from: '"Rumbo a la Equidad" <concurso@rumboalaequidad.org>', // Sender address (name and email)
      to: `${recipientName} <${recipientEmail}>`, // Recipient address (formatted with name if available)
      // If you uncommented CC in your original code, you could add it here:
      // cc: '"Rumbo a la Equidad" <concurso@rumboalaequidad.org>',
      subject: emailSubject, // Subject line
      text: textContent, // Plain text body
      html: htmlContent, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); // For Ethereal test accounts

    return { message: `Email sent successfully with message ID: ${info.messageId}` };
  } catch (error) {
    console.error("Error sending email:", error);
    // You might want to throw a more specific error or re-throw the original error
    throw new Error(`Error sending email: ${error.message}`);
  }
};
