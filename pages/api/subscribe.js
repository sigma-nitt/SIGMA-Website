// // pages/api/subscribe.js
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const { email } = req.body;
  
//       try {
//         await sendThankYouEmail(email);
  
//         res.status(200).json({ success: true, message: 'Subscription successful!' });
//       } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//       }
//     } else {
//       res.status(405).json({ success: false, message: 'Method Not Allowed' });
//     }
//   }
  

// async function sendThankYouEmail(email) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'devilsden672@gmail.com',
//       pass: 'mynameisfootball',
//     },
//   });

//   const mailOptions = {
//     from: 'devilsden672@gmail.com',
//     to: email,
//     subject: 'Thank You for Subscribing!',
//     text: 'Thank you for subscribing to our newsletter!',
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//   } catch (error) {
//     console.error(error);
//   }
// }






// pages/api/subscribe.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, phoneNumber, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'devilsden672@gmail.com',
        pass: 'ourt hhys wkwf tnyr',
      },
    });

    const mailOptions = {
      from: 'devilsden672@gmail.com',
      to: 'sigma.nitt@gmail.com',
      subject: `New Message: ${subject}`,
      html: `
        <p>Email: ${email} subscribed!</p>
      `,
    };

    try {
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
