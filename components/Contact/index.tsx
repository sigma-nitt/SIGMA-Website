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
//     e.preventDefault(); //This line prevents the default form submission behavior, which would cause a page refresh. This allows the form to be handled programmatically without reloading the page
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST', //method: 'POST': Specifies that this is a POST request, which is used for sending data to the server.(In your form, users are entering contact information (name, email, subject, phone number, and message) that needs to be sent to the server. This is a data submission operation, which is why POST is appropriate. You are not simply requesting data from the server but rather providing new data to be processed or stored.)
//         headers: {
//           'Content-Type': 'application/json', //headers: { 'Content-Type': 'application/json' }: Indicates that the request body will be in JSON format.
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Message sent successfully!');
//         setFormData({ //reset form fields
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


//   // This prevents the component from showing anything until it is fully loaded.
//   const [hasMounted, setHasMounted] = useState(false);
  
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }


//   return (
//     <>
//       <section id="support" className="px-4 md:px-8 2xl:px-0">
//         <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
//           <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47]"></div>
//           <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
//             <Image
//               src="./images/shape-dotted-dark.svg"
//               alt="Dotted"
//               className="dark:hidden"
//               fill
//             />
//             <Image
//               src="./images/shape-dotted-dark.svg"
//               alt="Dotted"
//               className="hidden dark:block"
//               fill
//             />
//           </div>

//           <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20 text-black">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 md:w-3/5 lg:w-3/4 xl:p-15"
//             >
//               <h2 className="mb-15 text-3xl font-semibold text-black xl:text-sectiontitle2">
//                 Send a message
//               </h2>

//               <form onSubmit={handleSubmit}>
//                 <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14 text-black">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Full name"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email address"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14 text-black">
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     placeholder="Subject"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
//                   />

//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     placeholder="Phone number"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-11.5 flex text-black">
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Message"
//                     rows={4}
//                     className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none"
//                   ></textarea>
//                 </div>

//                 <div className="flex flex-wrap gap-4 xl:justify-between ">
//                   <div className="mb-4 flex md:mb-0">
//                     <input
//                       id="default-checkbox"
//                       type="checkbox"
//                       className="peer sr-only"
//                     />
//                     <span className="border-gray-300 bg-black text-white group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary">
//                       <svg
//                         className="opacity-0 peer-checked:group-[]:opacity-100"
//                         width="10"
//                         height="8"
//                         viewBox="0 0 10 8"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
//                           fill="white"
//                         />
//                       </svg>
//                     </span>
//                     <label
//                       htmlFor="default-checkbox"
//                       className="flex max-w-[425px] cursor-pointer select-none pl-5 text-black"
//                     >
//                       By clicking Checkbox, you agree to use our “Form” terms
//                       and consent cookie usage in browser.
//                     </label>
//                   </div>

//                   <button
//                     type="submit"
//                     aria-label="send message"
//                     className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho"
//                   >
//                     Send Message
//                     <svg
//                       className="fill-white"
//                       width="14"
//                       height="14"
//                       viewBox="0 0 14 14"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
//                         fill=""
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </form>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 2, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
//             >
//               <h2 className="mb-12.5 text-3xl font-semibold bg-secondary-gradient bg-clip-text text-transparent xl:text-sectiontitle2">
//                 Find us
//               </h2>

//               <div className="5 mb-7">
//                 <h3 className="bg-secondary-gradient bg-clip-text text-transparent mb-4 text-metatitle3 font-medium">
//                   Our Location
//                 </h3>
//                 <p className="text-white">NIT Trichy, Tiruchirappalli, India - 620015</p>
//               </div>
//               <div className="5 mb-7">
//                 <h3 className="mb-4 text-metatitle3 font-medium bg-secondary-gradient bg-clip-text text-transparent">
//                   Email Address
//                 </h3>
//                 <p className="text-white">
//                   <a href="#">sigma.nitt@gmail.com</a>
//                 </p>
//               </div>
//               <div>
//                 <h4 className="mb-4 text-metatitle3 font-medium bg-secondary-gradient bg-clip-text text-transparent">
//                   Phone Number
//                 </h4>
//                 <p className="text-white">
//                   <a href="#"></a>
//                 </p>
//               </div>
//             </motion.div>
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
import './contactus.css';

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
        <div className="contact-container flex flex-col lg:flex-row mx-auto w-full lg:h-[823px]" style={{ background: 'hsla(0, 0%, 100%, 0.9)', borderRadius:'30px' }}>
          
          {/* Image Column */}
          <div className="mt-[50px] lg:mt-[0px] image-column lg:w-[40%] flex justify-center items-center">
            <Image
              className="h-[400px] w-[90%] lg:h-[617px] lg:w-[404px]"
              src="/images/contactus.png"
              alt="logo"
              width={404}
              height={617}
            />
          </div>

          {/* Form Column */}
          <div className="form-column lg:w-[35%] mt-[50px] lg:mt-[200px] justify-center items-center text-center lg:text-left">
            <div className="text-[hsla(236,100%,15%,1)]">
              <h2 className="font-poppins text-[40px] lg:text-[69px] text-[hsla(236, 100%, 15%, 1)] pb-20">
                Contact Us
              </h2>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="tform-field mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none"
                />
              </div>

              <div className="form-field mb-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none"
                />
              </div>

              <div className="form-field mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none"
                />
              </div>

              <div className="form-field mb-6">
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none"
                />
              </div>

              <div className="form-field mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={1}
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none"
                ></textarea>
              </div>

              {/* <div className="flex items-center mb-6">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="peer sr-only"
                />
                <span className="border-gray-300 bg-black text-white group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary">
                  <svg
                    className="opacity-0 peer-checked:group-[]:opacity-100"
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <label
                  htmlFor="default-checkbox"
                  className="flex max-w-[425px] cursor-pointer select-none pl-5 text-black"
                >
                  By clicking Checkbox, you agree to use our “Form” terms and consent cookie usage in browser.
                </label>
              </div> */}
              
              <button
                type="submit"
                aria-label="send message"
                className="inline-flex w-[231px] h-[47.62px] text-center justify-center items-center gap-2.5 rounded-full font-medium text-white duration-300 ease-in-out  py-3" style={{ background: 'hsla(236, 100%, 15%, 1)' }}
              >
                Contact Us
              </button>
            </form>
          </div>

          {/* Find Us Column */}
          <div className="find-us-column items-center text-center justify-center lg:text-left lg:w-[25%] mt-[100px] lg:mt-[310px] text-[hsla(236,100%,15%,1)]"> {/* Added text color to the entire div */}
            <div className="mb-8 lg:mb-16">
              <h3 className="font-bold text-[19.74px]">
                Contact
              </h3>
              <p>sigma.nitt@gmail.com</p>
            </div>
            <div className="mb-6 mx-auto lg:mx-0 w-[50%] lg:w-[173px]">
              <h3 className="font-bold text-[19.74px]">
                Based In
              </h3>
              <p>NIT Trichy, Tiruchirappalli, India - 620015</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
