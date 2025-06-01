import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  const { email, subject, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Please enter the email and message' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      port: 465, 
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: subject || 'No Subject', 
      text: `From: ${email}\n\nPortfolio contact:\n\n${message}`, 
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ error: `Error sending email: ${error.message}` });
  }
}