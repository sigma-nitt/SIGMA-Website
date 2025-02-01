// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import Image from "next/image";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     phoneNumber: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Message sent successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           subject: '',
//           phoneNumber: '',
//           message: '',
//         });
//       } else {
//         alert('Failed to send message. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <>
//       <section id="support" className="contact-section">
//         <div className="contact-container flex flex-col md:flex-row mx-auto w-[90%] md:w-[90%] lg:h-[823px]" style={{ background: 'hsla(0, 0%, 100%, 0.9)', borderRadius:'30px' }}>
          
//           <div className="mt-[50px] lg:mt-[0px] image-column lg:w-[40%] flex justify-center items-center">
//             <Image
//               className="h-[400px] w-[90%] lg:h-[617px] xl:w-[404px] rounded-tl-[30px] rounded-bl-[30px] pointer-events-none select-none"
//               src="/images/contactus.jpg"
//               alt="logo"
//               width={404}
//               height={617}
//               unoptimized={true}
//               priority={false}
//             />
//           </div>

//           <div className="form-column lg:w-[35%] mt-[50px] lg:mt-[200px] justify-center items-center text-center lg:text-left">
//             <div className="text-[hsla(236,100%,15%,1)]">
//               <h2 className="font-poppins text-[40px] md:text-[50px] xl:text-[69px] text-[hsla(236, 100%, 15%, 1)] pb-20">
//                 Contact Us
//               </h2>
//             </div>
            
//             <form onSubmit={handleSubmit}>
//               <div className="tform-field mb-6">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Full name"
//                   className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
//                 />
//               </div>

//               <div className="form-field mb-6">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email address"
//                   className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
//                 />
//               </div>

//               <div className="form-field mb-6">
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Subject"
//                   className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
//                 />
//               </div>

//               <div className="form-field mb-6">
//                 <input
//                   type="text"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="Phone number"
//                   className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
//                 />
//               </div>

//               <div className="form-field mb-6">
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message"
//                   rows={1}
//                   className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
//                 ></textarea>
//               </div>
          
//               <button
//                 type="submit"
//                 aria-label="send message"
//                 className="inline-flex md:mb-[20px] lg:mb-0 w-[231px] md:h-[47.62px] text-center justify-center items-center gap-2.5 rounded-full font-medium text-white duration-300 ease-in-out  py-3" style={{ background: 'hsla(236, 100%, 15%, 1)' }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="find-us-column items-center text-center justify-center lg:text-left lg:w-[25%] mt-[100px] md:mt-[20%] lg:mt-[27%] xl:lg:mt-[22.5%] text-[hsla(236,100%,15%,1)]"> {/* Added text color to the entire div */}
//             <div className="mb-8 lg:mb-16">
//               <h3 className="font-bold text-[19.74px]">
//                 Contact
//               </h3>
//               <p>sigma.nitt@gmail.com</p>
//             </div>
//             <div className="mb-6 mx-auto lg:mx-0 w-[50%] lg:w-[173px]">
//               <h3 className="font-bold text-[19.74px]">
//                 Based In
//               </h3>
//               <p>NIT Trichy, Tiruchirappalli, India - 620015</p>
//             </div>

//             <div className="mt-[30px] lg:mt-[120px] pb-8 lg:pb-0">
//               <ul className="flex lg:items-left items-center lg:text-left text-center lg:justify-start justify-center gap-8">
//                 <li>
//                 <a href="https://www.instagram.com/sigma_nitt/" aria-label="social icon" target="_blank" rel="noopener noreferrer">
//                   <img src="./images/insta.png" alt="Image 3" className="bg-transparent w-[30px] h-[30px]" />
//                 </a>
//                 </li>

//                 <li>
//                 <a href="https://www.linkedin.com/company/sigma-nitt/?originalSubdomain=in" aria-label="social icon" target="_blank" rel="noopener noreferrer">
//                   <img src="./images/linkedin.png" alt="Image 3" className="bg-transparentt w-[30px] h-[30px]" />
//                 </a>
//                 </li>

//                 <li>
//                 <a href="https://www.facebook.com/sigma.nitt/" aria-label="social icon" target="_blank" rel="noopener noreferrer">
//                   <img src="./images/fb.png" alt="Image 3" className="bg-transparentt w-[30px] h-[30px]" />
//                 </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;






"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <section id="support" className="contact-section">
        <div className="contact-container flex flex-col lg:flex-row mx-auto w-[90vw] md:w-[70vw] lg:w-[90vw] xl:w-[90vw] lg:h-[70vw] xl:h-[54vw]" style={{ background: 'hsla(0, 0%, 100%, 0.9)', borderRadius:'30px' }}>
          <div className="image-column lg:w-[40vw] flex justify-center items-center">
            <Image
              className="md:mt-[10vw] lg:mt-0 h-[150vw] md:h-[60vw] lg:h-[50vw] xl:h-[40vw] md:w-[45vw] lg:w-[26vw] rounded-tl-[30px] lg:rounded-tl-[30px] rounded-bl-[0px] lg:rounded-bl-[30px] rounded-tr-[30px] lg:rounded-tr-[0px] rounded-br-[0px] lg:rounded-br-[0px] pointer-events-none select-none"
              src="/images/contactus.jpg"
              alt="logo"
              width={404}
              height={617}
              unoptimized={true}
              priority={false}
            />
          </div>

          <div className="form-column lg:w-[35%] mt-[10vw] md:mt-[10vw] lg:mt-[15vw] xl:mt-[10vw] justify-center items-center text-center lg:text-left">
            <div className="text-[hsla(236,100%,15%,1)]">
              <h2 className="font-poppins text-[9vw] md:text-[5vw] lg:text-[4.5vw] xl:text-[4vw] text-[hsla(236, 100%, 15%, 1)] pb-[8vw] xl:pb-20">
                Contact Us
              </h2>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="tform-field mb-[5vw] md:mb-[2vw] lg:mb-[1.5vw] xl:mb-[2vw]">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-[50vw] md:w-[40vw] lg:w-[23vw] pb-[3vw] md:pb-[1vw] lg:pb-[0.8vw] xl:pb-[1vw] border-b-2 border-black bg-transparent focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                />
              </div>

              <div className="form-field mb-[5vw] md:mb-[2vw] lg:mb-[1.5vw] xl:mb-[2vw]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-[50vw] md:w-[40vw] lg:w-[23vw] pb-[3vw] md:pb-[1.5vw] lg:pb-[1.3vw] xl:pb-[1vw] border-b-2 border-black bg-transparent focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                />
              </div>

              <div className="form-field mb-[5vw] md:mb-[2vw] lg:mb-[1.5vw] xl:mb-[2vw]">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-[50vw] md:w-[40vw] lg:w-[23vw] pb-[3vw] md:pb-[1.5vw] lg:pb-[1.3vw] xl:pb-[1vw] border-b-2 border-black bg-transparent focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                />
              </div>

              <div className="form-field mb-[5vw] md:mb-[2vw] lg:mb-[1.5vw] xl:mb-[2vw]">
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-[50vw] md:w-[40vw] lg:w-[23vw] pb-[3vw] md:pb-[1.5vw] lg:pb-[1.3vw] xl:pb-[1vw] border-b-2 border-black bg-transparent focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                />
              </div>

              <div className="form-field mb-[5vw] md:mb-[3vw] lg:mb-[1.5vw] xl:mb-[2vw]">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={1}
                  className="w-[50vw] md:w-[40vw] lg:w-[23vw] pb-[3vw] md:pb-[1.5vw] lg:pb-[1.3vw] xl:pb-[1vw] border-b-2 border-black bg-transparent focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                ></textarea>
              </div>
          
              <button
                type="submit"
                aria-label="send message"
                className="inline-flex w-[35vw] md:w-[20vw] lg:w-[17vw] xl:w-[15vw] h-[8vw] md:h-[5vw] lg:h-[4vw] xl:h-[3vw] text-center justify-center items-center rounded-full font-medium text-white duration-300 ease-in-out" style={{ background: 'hsla(236, 100%, 15%, 1)' }}>
                Send Message
              </button>
            </form>
          </div>

          <div className="find-us-column items-center text-center justify-center lg:text-left lg:w-[25%] mt-[15vw] md:mt-[13vw] lg:mt-[27vw] xl:lg:mt-[22.5%] text-[hsla(236,100%,15%,1)]"> {/* Added text color to the entire div */}
            <div className="lg:mb-[4.5vw] xl:mb-[4vw]">
              <h3 className="font-bold text-[19.74px]">
                Contact
              </h3>
              <p>sigma.nitt@gmail.com</p>
            </div>
            <div className="mt-[5vw] md:mt-[3vw] w-[30vw] md:w-[15vw] lg:w-[16.5vw] xl:w-[11vw] mx-auto lg:mx-0">
              <h3 className="font-bold text-[19.74px]">
                Based In
              </h3>
              <p>NIT Trichy, Tiruchirappalli, India - 620015</p>
            </div>

            <div className="mt-[8vw] md:mt-[4vw] lg:mt-[7vw] xl:mt-[7.5vw] pb-[7vw] md:pb-[4vw] lg:p-0">
              <ul className="flex lg:items-left items-center lg:text-left text-center lg:justify-start justify-center gap-8">
                <li>
                <a href="https://www.instagram.com/sigma_nitt/" aria-label="social icon" target="_blank" rel="noopener noreferrer">
                  <img src="./images/insta.png" alt="Image 3" className="bg-transparent w-[30px] h-[30px]" />
                </a>
                </li>

                <li>
                <a href="https://www.linkedin.com/company/sigma-nitt/?originalSubdomain=in" aria-label="social icon" target="_blank" rel="noopener noreferrer">
                  <img src="./images/linkedin.png" alt="Image 3" className="bg-transparentt w-[30px] h-[30px]" />
                </a>
                </li>

                <li>
                <a href="https://www.facebook.com/sigma.nitt/" aria-label="social icon" target="_blank" rel="noopener noreferrer">
                  <img src="./images/fb.png" alt="Image 3" className="bg-transparentt w-[30px] h-[30px]" />
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
