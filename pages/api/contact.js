// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, phoneNumber, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Specify your email service and credentials
      service: 'gmail',
      auth: {
        user: 'devilsden672@gmail.com',
        pass: 'ourt hhys wkwf tnyr',
      },
    });

    // Email content
    const mailOptions = {
      from: 'devilsden672@gmail.com',
      to: 'devilsden672@gmail.com',
      subject: `New Message: ${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Message: ${message}</p>
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
