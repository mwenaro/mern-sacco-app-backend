const nodemailer = require("nodemailer");
// dotenv.config();
const sendConfirmationEmail = async (
  to: string = "mashudimwayama@gmail.com",
  name: string = "Mashudi",
  subject: string = "Booking Confirmation",
  reviewLink:string = "",
  body: string = `<h3>Dear ${name}</h3>,
  
  <p>Thank you for making reservation with us. Your booking has been received and confirmed. 
  Our representative will get back to you as soon as possible.</p>
  <p>Click <a href="${reviewLink}">here </a> to review your booking.</p>
  <p>Best regards,</p>
   Wunderber Kenia Adventures</p>`
   
) => {
  let result: any = { error: "", flag: false };
  const company = "Wunderber Kenia Adventures";
  const signature_name = "";
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${company} - Thank you for choosing us!</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        color: #333333;
        line-height: 1.5;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #cccccc;
        border-radius: 5px;
        background-color: #f8f8f8;
      }
      h1 {
        font-size: 24px;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 20px;
      }
      p {
        margin-top: 0;
        margin-bottom: 20px;
      }
      .signature {
        font-weight: bold;
        margin-top: 20px;
        text-align: center;
      }

      .img-container{
        margin: 5px auto;
        width:fit-content;
      }


    </style>
  </head>
  <body>
    <div class="container">
    <div class="img-container">
      <img src="https://dev2.wunderber.com/public/assets/logo.png" alt="${company} logo" width="150" height="auto">
      </div>
      <h1>${company} - Thank you for chosing us!</h1>
      ${
        body
          ? body
          : `<p>Hello ${name},</p>
      <p>Thank you for contacting us through our website's contact form. We appreciate the opportunity to assist you and will do our best to provide you with the support you need.</p>
      <p>One of our team members will review your message and get back to you as soon as possible. Please note that our business hours are {hours}, and we typically respond to inquiries within {response_time}.</p>
      <p>If your request is urgent, please don't hesitate to give us a call at {phone} or chat with us live on our website. We are always here to help!</p>
      <p>Thank you again for reaching out to us. We look forward to speaking with you soon.</p>
      <div class="signature">Best regards,<br>${
        signature_name || ""
      }<br>${company}</div>`
      }
    </div>
  </body>
</html>
`;
  let info1;
  try {
    // Create a nodemailer transport object
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST, // Enter your SMTP server host name
      port: 465, // Enter the SMTP port number
      secure: true, // Set to true if you're using SSL/TLS
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // Enter your domain email address
        pass: process.env.NEXT_PUBLIC_EMAIL_PWD, // Enter your domain email password
        method: "PLAIN",
      },
      // tls: {
      //   rejectUnauthorized: false // Set to true if your SMTP server has a valid SSL/TLS certificate
      // }
    });

    // Define the email message
    const message = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER, // Use your domain email address as the sender
      to,
      // bcc:process.env.NEXT_PUBLIC_EMAIL_USER,
      subject,
      html: html,
    };

    // Send the email
    const info = (info1 = await transporter.sendMail(message));
    console.log(`Email sent to ${to}: ${info.response}`);
    return { ...result, flag: true, info };
  } catch (error: any) {
    console.log(error.message);
    return { ...result, error: error.message, info1, flag: false };
  }
};

export default sendConfirmationEmail;
