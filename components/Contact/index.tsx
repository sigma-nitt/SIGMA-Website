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
        <div className="contact-container flex flex-col md:flex-row mx-auto w-[90%] md:w-[90%] lg:h-[823px]" style={{ background: 'hsla(0, 0%, 100%, 0.9)', borderRadius:'30px' }}>
          
          {/* Image Column */}
          <div className="mt-[50px] lg:mt-[0px] image-column lg:w-[40%] flex justify-center items-center">
            <Image
              className="h-[400px] w-[90%] lg:h-[617px] xl:w-[404px] rounded-tl-[30px] rounded-bl-[30px]"
              src="/images/contactus.jpg"
              alt="logo"
              width={404}
              height={617}
              unoptimized={true}
              priority={false}
            />
          </div>

          {/* Form Column */}
          <div className="form-column lg:w-[35%] mt-[50px] lg:mt-[200px] justify-center items-center text-center lg:text-left">
            <div className="text-[hsla(236,100%,15%,1)]">
              <h2 className="font-poppins text-[40px] md:text-[50px] xl:text-[69px] text-[hsla(236, 100%, 15%, 1)] pb-20">
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
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                />
              </div>

              <div className="form-field mb-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                />
              </div>

              <div className="form-field mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                />
              </div>

              <div className="form-field mb-6">
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                />
              </div>

              <div className="form-field mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={1}
                  className="w-[246px] border-b-2 border-black bg-transparent pb-3.5 focus:border-black focus:placeholder:text-black focus-visible:outline-none text-black"
                ></textarea>
              </div>
          
              <button
                type="submit"
                aria-label="send message"
                className="inline-flex md:mb-[20px] lg:mb-0 w-[231px] md:h-[47.62px] text-center justify-center items-center gap-2.5 rounded-full font-medium text-white duration-300 ease-in-out  py-3" style={{ background: 'hsla(236, 100%, 15%, 1)' }}
              >
                Contact Us
              </button>
            </form>
          </div>

          {/* Find Us Column */}
          <div className="find-us-column items-center text-center justify-center lg:text-left lg:w-[25%] mt-[100px] md:mt-[20%] lg:mt-[27%] xl:lg:mt-[22.5%] text-[hsla(236,100%,15%,1)]"> {/* Added text color to the entire div */}
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

            <div className="mt-[30px] lg:mt-[120px] pb-8 lg:pb-0">
              <ul className="flex lg:items-left items-center lg:text-left text-center lg:justify-start justify-center gap-8">
                <li>
                <a href="https://www.instagram.com/sigma_nitt/" aria-label="social icon" target="_blank" rel="noopener noreferrer">
                  <img src="./images/insta.png" alt="Image 3" className="bg-transparent w-[30px] h-[30px]" />
                </a>
                </li>

                <li>
                <a href="https://www.linkedin.com/company/sigma-nitt/mycompany/" aria-label="social icon" target="_blank" rel="noopener noreferrer">
                  <img src="./images/linkedin.png" alt="Image 3" className="bg-transparentt w-[30px] h-[30px]" />
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
