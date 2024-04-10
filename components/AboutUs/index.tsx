// "use client"
// import React from 'react';
// import './aboutus.css';

// const EventsPage: React.FC = () => {

//   return (
//     <div className="mt-10 relative">
//       <div className="relative">
//         <div className="absolute inset-0 flex flex-col text-white">
//           <h1 className="pl-5 pr-3 pt-3 pb-3 text-3xl mb-4 md:text-6xl md:pl-20">
//             Our Mission
//           </h1>
//           <p className="pl-5 pr-3 pt-3 pb-3 w-4/5 text-sm mt-5 md:text-lg md:w-3/5 md:pl-20">
//             At SIGMA, we are committed to providing our members with a wide range of services and activities to help them develop their skills and interests in business, data analytics, and machine learning. Our mission is to empower our members with the knowledge and resources they need to succeed in their careers and make a positive impact in their communities.
//           </p>
//         </div>
//       </div>

//       <div className="pl-2 pr-2 pt-80 w-9/10 m-auto md:pr-20 md:pb-0 md:pl-20 md:pt-80 mx-auto">
//         <div className="table-div">
//           <table className="table-fixed text-left border-collapse custom-table-width">
//             <tbody>
//               <tr>
//                 <td className="cell2" style={{ width: '35%', border: '1px solid white' }}>
//                   <div className="flex justify-center relative" style={{ height: '500px' }}>
//                     <img src="/images/ourstory.png" className="background-image h-full absolute inset-0 z-0 object-cover" alt="Background" />
//                     <h1 className="sigma text-2xl text-center mb-4 md:text-4xl relative z-10">
//                         Our Story
//                     </h1>
//                   </div>
//                 </td>
//                 <td className="cell" style={{ width: '70%', height:'500px', border: '1px solid white' }}>
//                   <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">
// SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
// At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
// Our club is run by a team of experienced leaders who are committed to providing our members with the best possible resources and opportunities. We believe that by working together, we can achieve great things and make a positive impact in our community.</p>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="pl-2 pr-2 w-9/10 m-auto md:pr-20 md:pb-0 md:pl-20 mx-auto">
//         <div className="table-div">
//           <table className="table-fixed text-left border-collapse custom-table-width">
//             <tbody>
//               <tr>
//                 <td className="cell1" style={{ width: '70%', height:'300px', border: '1px solid white' }}>
//                   <div className="flex justify-center">
//                     <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">
//                     At SIGMA, we are proud to have a team of experienced leaders who are dedicated to providing our members with the best possible resources and opportunities. Our team consists of students from a variety of backgrounds who are passionate about business, data analytics, and machine learning.
// Our leaders have a wealth of experience in their respective fields, and they are committed to helping our members develop their skills and interests. They work hard to organize events, workshops, and other activities that provide our members with valuable learning experiences.
// We are always looking for new members to join our team, so if you are interested in becoming a part of SIGMA, please don't hesitate to get in touch with us.</p>
//                   </div>
//                 </td>
//                 <td className="cell1" style={{ width: '35%', height:'300px', border: '1px solid white' }}>
//                 <div className="flex justify-center relative" style={{ height: '500px' }}>
//                     <img src="/images/bkg.jpg" className="background-image h-full absolute inset-0 z-0 object-cover" alt="Background" />
//                     <h1 className="sigma text-2xl text-center mb-4 md:text-4xl relative z-10">
//                         Experienced Leadership
//                     </h1>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsPage;


"use client"
import React from 'react';
import './aboutus.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventsPage: React.FC = () => {

  return (
    <div className="mt-10 relative">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col text-white">
          <h1 className="pl-5 pr-3 pt-3 pb-3 text-3xl mb-4 md:text-6xl md:pl-20">
            Our Mission
          </h1>
          <p className="pl-5 pr-3 pt-3 pb-3 w-4/5 text-sm mt-5 md:text-lg md:w-3/5 md:pl-20">
            At SIGMA, we are committed to providing our members with a wide range of services and activities to help them develop their skills and interests in business, data analytics, and machine learning. Our mission is to empower our members with the knowledge and resources they need to succeed in their careers and make a positive impact in their communities.
          </p>
        </div>
      </div>

      <div className="pl-2 pr-2 pt-80 w-9/10 m-auto md:pr-20 md:pb-0 md:pl-20 md:pt-80 mx-auto">
        <div className="table-div">
          <table className="table-fixed text-left border-collapse custom-table-width">
            <tbody>
              <tr>
                <td className="cell2" style={{ width: '35%', border: '1px solid white' }}>
                  <div className="flex justify-center relative" style={{ height: '500px' }}>
                    <img src="/images/ourstory.png" className="background-image h-full absolute inset-0 z-0 object-cover" alt="Background" />
                    <h1 className="sigma text-2xl text-center mb-4 md:text-4xl relative z-10">
                        Our Story
                    </h1>
                  </div>
                </td>
                <td className="cell" style={{ width: '70%', height:'500px', border: '1px solid white' }}>
                  <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">
SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
Our club is run by a team of experienced leaders who are committed to providing our members with the best possible resources and opportunities. We believe that by working together, we can achieve great things and make a positive impact in our community.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pl-2 pr-2 w-9/10 m-auto md:pr-20 md:pb-0 md:pl-20 mx-auto">
        <div className="table-div">
          <table className="table-fixed text-left border-collapse custom-table-width">
            <tbody>
              <tr>
                <td className="cell1" style={{ width: '70%', height:'300px', border: '1px solid white' }}>
                  <div className="flex justify-center">
                    <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">
                    At SIGMA, we are proud to have a team of experienced leaders who are dedicated to providing our members with the best possible resources and opportunities. Our team consists of students from a variety of backgrounds who are passionate about business, data analytics, and machine learning.
Our leaders have a wealth of experience in their respective fields, and they are committed to helping our members develop their skills and interests. They work hard to organize events, workshops, and other activities that provide our members with valuable learning experiences.
We are always looking for new members to join our team, so if you are interested in becoming a part of SIGMA, please don't hesitate to get in touch with us.</p>
                  </div>
                </td>
                <td className="cell1" style={{ width: '35%', height:'300px', border: '1px solid white' }}>
                <div className="flex justify-center relative" style={{ height: '500px' }}>
                    <img src="/images/bkg.jpg" className="background-image h-full absolute inset-0 z-0 object-cover" alt="Background" />
                    <h1 className="sigma text-2xl text-center mb-4 md:text-4xl relative z-10">
                        Experienced Leadership
                    </h1>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
