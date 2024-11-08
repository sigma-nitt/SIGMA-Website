// pages/api/subscribe.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      try {
        // Send a thank you email here
        await sendThankYouEmail(email);
  
        res.status(200).json({ success: true, message: 'Subscription successful!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
  }
  

async function sendThankYouEmail(email) {
  // Configure nodemailer with your email provider settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sigmanitt@gmail.com',
      pass: 'mynameisfootball',
    },
  });

  const mailOptions = {
    from: 'sigmanitt@gmail.com',
    to: email,
    subject: 'Thank You for Subscribing!',
    text: 'Thank you for subscribing to our newsletter!',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error(error);
  }
}
