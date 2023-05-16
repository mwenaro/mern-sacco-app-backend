


const mailSender = (
  to: string,
  from: string,
  subject: string,
  body: string
) =>
  fetch(`${process.env.NEXT_PUBLIC_EXT_API}mailer`, {
    method: "POST",
    body: JSON.stringify({
      to,
      from,
      subject,
      body,
    }),
  });

export default mailSender;
