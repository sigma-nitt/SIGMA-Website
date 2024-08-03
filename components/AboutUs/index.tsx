// "use client";
// import React from 'react';
// import './aboutus.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const EventsPage: React.FC = () => {
//   return (
//     <div className="mt-9 relative">
//       <div className="relative">
//         <div className="absolute inset-0 flex flex-col text-white">
//           <h1 className="hdng1 pl-5 pr-3 pt-3 pb-3 text-5xl mb-4 md:text-7xl md:pl-20">
//             Our Mission
//           </h1>
//           <p className="pl-5 pr-3 pt-3 pb-3 w-full text-sm mt-5 md:text-lg md:w-3/5 md:pl-20">
//             At SIGMA, we are committed to providing our members with a wide range of services and activities to help them develop their skills and interests in business, data analytics, and machine learning. Our mission is to empower our members with the knowledge and resources they need to succeed in their careers and make a positive impact in their communities.
//           </p>
//         </div>
//       </div>

//       {/* Our Story Section */}
//       <div className="pl-2 pr-2 pt-90 w-9/10 m-auto md:pr-20 md:pb-0 md:pl-20 md:pt-80 mx-auto">
//         <div className="table-div">
//           <table className="table-fixed text-left border-collapse custom-table-width">
//             <tbody>
//               <tr>
//                 <td className="cell2" style={{ width: '35%' }}>
//                   <div className="flex justify-center relative" style={{ height: '500px' }}>
//                     <img src="/images/ourstory.png" className="background-image h-full absolute inset-0 z-0 object-cover" alt="Background" />
//                     <div className="flex justify-center items-center h-full relative z-10">
//                       <div className="text-center">
//                         <h1 className="sigma text-4xl md:text-4xl">
//                           Our Story
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="cell" style={{ width: '70%', height: '500px' }}>
//                   <div className="flex justify-center items-center h-full">
//                     <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5 text-center">
//                       SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
//                       At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on Medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
//                       Our club is run by a team of experienced leaders who are committed to providing our members with the best possible resources and opportunities. We believe that by working together, we can achieve great things and make a positive impact in our community.
//                     </p>
//                   </div>
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
//                 <td className="cell1" style={{ width: '70%', height: '300px' }}>
//                   <div className="flex justify-center items-center h-full">
//                     <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5 md:pt-3 text-center">
//                       At SIGMA, we are proud to have a team of experienced leaders who are dedicated to providing our members with the best possible resources and opportunities. Our team consists of students from a variety of backgrounds who are passionate about business, data analytics, and machine learning.
//                       Our leaders have a wealth of experience in their respective fields, and they are committed to helping our members develop their skills and interests. They work hard to organize events, workshops, and other activities that provide our members with valuable learning experiences.
//                       We are always looking for new members to join our team, so if you are interested in becoming a part of SIGMA, please don't hesitate to get in touch.
//                     </p>
//                   </div>
//                 </td>
//                 <td className="cell1" style={{ width: '35%', height: '300px' }}>
//                   <div className="flex justify-center items-center h-full relative">
//                     <img src="/images/bkg.jpg" className="background-image h-full absolute inset-0 z-0 object-cover" alt="Background" />
//                     <div className="flex justify-center items-center z-10 text-center">
//                       <h1 className="sigma text-4xl text-center md:text-4xl">
//                         Experienced Leadership
//                       </h1>
//                     </div>
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


"use client";
import React from 'react';
import './aboutus.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventsPage: React.FC = () => {
  return (
    <div className="relative">

      {/* Our Story Section */}
      <div className="flex flex-wrap pl-2 pr-2 md:mb-15 w-10/10 md:w-9/10 m-auto md:pr-0 md:pb-0 md:pl-20 mx-auto">
        <div className="flex flex-col justify-center mt-50 w-full sm:p-4 md:pr-8 md:w-1/2">
          <h1 className="sigma text-center text-3xl pb-2 font-semibold lg:text-5xl md:text-4xl md:text-left md:pr-10 md:leading-none">
            <span className="gradient-text">We Power</span> the mindset of business
          </h1>
          <p className="text-sm text-center lg:text-lg md:text-md md:text-left">
            SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
            At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on Medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
            Our club is run by a team of experienced leaders who are committed to providing our members with the best possible resources and opportunities. We believe that by working together, we can achieve great things and make a positive impact in our community.
          </p>
        </div>
        <div className="flex justify-center p-4 md:mt-50 md:mb-15 items-center w-full md:w-1/2 md:pr-8">
          <svg width="613" height="496" viewBox="0 0 1338 1313" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M753.247 734.786L694.697 642.78L752.47 579.233C753.777 577.76 754.45 575.832 754.345 573.866C754.239 571.9 753.362 570.055 751.905 568.731C750.448 567.407 748.528 566.711 746.561 566.793C744.593 566.875 742.738 567.729 741.396 569.17L686.363 629.697L648.493 570.19C647.818 569.127 646.885 568.252 645.782 567.645C644.678 567.039 643.439 566.72 642.18 566.72H597.286C595.944 566.719 594.627 567.079 593.473 567.762C592.318 568.445 591.368 569.426 590.723 570.602C590.077 571.778 589.76 573.106 589.804 574.447C589.848 575.788 590.251 577.092 590.973 578.223L649.522 670.219L591.749 733.814C591.074 734.538 590.55 735.39 590.207 736.318C589.864 737.247 589.708 738.235 589.75 739.224C589.791 740.213 590.028 741.184 590.448 742.081C590.867 742.978 591.46 743.782 592.193 744.448C592.926 745.114 593.784 745.628 594.716 745.96C595.649 746.292 596.639 746.435 597.627 746.382C598.616 746.329 599.585 746.08 600.476 745.65C601.368 745.22 602.166 744.617 602.823 743.876L657.856 683.35L695.726 742.857C696.407 743.911 697.342 744.777 698.445 745.375C699.548 745.974 700.784 746.285 702.039 746.28H746.933C748.273 746.28 749.589 745.919 750.742 745.237C751.895 744.554 752.844 743.574 753.489 742.4C754.134 741.225 754.452 739.899 754.41 738.56C754.367 737.221 753.965 735.917 753.247 734.786ZM706.145 731.317L610.913 581.683H638.037L733.306 731.317H706.145Z" fill="white"/>
            <path d="M670.555 938.888C829.089 938.888 957.634 812.474 957.634 656.5C957.634 500.526 829.089 374.112 670.555 374.112C512.021 374.112 383.476 500.526 383.476 656.5C383.476 812.474 512.021 938.888 670.555 938.888Z" stroke="#8A8FCF" stroke-width="2"/>
            <path d="M669 1119.23C929.713 1119.23 1141.1 912.075 1141.1 656.5C1141.1 400.925 929.713 193.774 669 193.774C408.287 193.774 196.902 400.925 196.902 656.5C196.902 912.075 408.287 1119.23 669 1119.23Z" stroke="#8A8FCF" stroke-width="2"/>
            <path d="M669 1312C1037.91 1312 1337 1018.54 1337 656.5C1337 294.46 1037.91 1 669 1C300.092 1 1 294.46 1 656.5C1 1018.54 300.092 1312 669 1312Z" stroke="#8A8FCF" stroke-width="2"/>
            <path d="M331.613 96.8325C331.613 106.277 323.956 113.933 314.511 113.933C305.065 113.933 297.408 106.277 297.408 96.8325C297.408 87.3879 305.065 79.7316 314.511 79.7316C323.956 79.7316 331.613 87.3879 331.613 96.8325Z" fill="#41A86A"/>
            <path d="M882.005 236.749C882.005 242.76 877.132 247.632 871.121 247.632C865.11 247.632 860.238 242.76 860.238 236.749C860.238 230.739 865.11 225.867 871.121 225.867C877.132 225.867 882.005 230.739 882.005 236.749Z" fill="#EC7B4A"/>
            <path d="M232.107 793.308C232.107 802.752 224.45 810.409 215.005 810.409C205.559 810.409 197.902 802.752 197.902 793.308C197.902 783.863 205.559 776.207 215.005 776.207C224.45 776.207 232.107 783.863 232.107 793.308Z" fill="#ECC84A"/>
            <path d="M673.664 940.998C673.664 946.149 669.488 950.326 664.336 950.326C659.184 950.326 655.007 946.149 655.007 940.998C655.007 935.846 659.184 931.67 664.336 931.67C669.488 931.67 673.664 935.846 673.664 940.998Z" fill="#3ED37A"/>
            <path d="M732.746 1116.67C732.746 1120.96 729.265 1124.44 724.972 1124.44C720.679 1124.44 717.198 1120.96 717.198 1116.67C717.198 1112.38 720.679 1108.9 724.972 1108.9C729.265 1108.9 732.746 1112.38 732.746 1116.67Z" fill="#4A81EC"/>
          </svg>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1B1F2D] via-[#172C28] to-[#111648] flex items-center justify-center md:h-[300px] p-5">
        <div className="flex flex-wrap items-center justify-between w-full max-w-7xl md:flex-row flex-col">
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <img
              src="./images/table.jpg"
              alt="Your Image Description"
              className="object-cover w-full md:h-[250px]"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </div>
          <div className="flex-1 ml-4 text-white md:ml-0">
            <h2 className="text-center text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-center">
              At SIGMA, we are committed to providing our members with a wide range of services and activities to help them
              develop their skills and interests in business, data analytics, and machine learning. Our mission is to empower
              our members with the knowledge and resources they need to succeed in their careers and make a positive impact in
              their communities.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap pt-8 p-4 mb-15 md:w-9/10 m-auto md:pr-0 md:pb-0 md:pl-20 mx-auto">
        <div className="flex flex-col justify-center w-full md:pr-8 md:w-1/2">
          <h1 className="sigma text-4xl text-center mb-5 md:text-4xl md:pr-10">
            <span className="gradient-text">Experienced Leadership</span>
          </h1>
          <p className="text-sm text-center lg:text-lg md:text-md md:text-left">
            At SIGMA, we are proud to have a team of experienced leaders who are dedicated to providing our members with the best possible resources and opportunities. Our team consists of students from a variety of backgrounds who are passionate about business, data analytics, and machine learning. Our leaders have a wealth of experience in their respective fields, and they are committed to helping our members develop their skills and interests. They work hard to organize events, workshops, and other activities that provide our members with valuable learning experiences. We are always looking for new members to join our team, so if you are interested in becoming a part of SIGMA, please don't hesitate to get in touch.
          </p>
        </div>
        <div className="flex justify-center md:mt-20 md:mb-15 items-center w-full md:w-1/2 md:pr-8">
          <svg width="613" height="496" viewBox="0 0 1338 1313" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M753.247 734.786L694.697 642.78L752.47 579.233C753.777 577.76 754.45 575.832 754.345 573.866C754.239 571.9 753.362 570.055 751.905 568.731C750.448 567.407 748.528 566.711 746.561 566.793C744.593 566.875 742.738 567.729 741.396 569.17L686.363 629.697L648.493 570.19C647.818 569.127 646.885 568.252 645.782 567.645C644.678 567.039 643.439 566.72 642.18 566.72H597.286C595.944 566.719 594.627 567.079 593.473 567.762C592.318 568.445 591.368 569.426 590.723 570.602C590.077 571.778 589.76 573.106 589.804 574.447C589.848 575.788 590.251 577.092 590.973 578.223L649.522 670.219L591.749 733.814C591.074 734.538 590.55 735.39 590.207 736.318C589.864 737.247 589.708 738.235 589.75 739.224C589.791 740.213 590.028 741.184 590.448 742.081C590.867 742.978 591.46 743.782 592.193 744.448C592.926 745.114 593.784 745.628 594.716 745.96C595.649 746.292 596.639 746.435 597.627 746.382C598.616 746.329 599.585 746.08 600.476 745.65C601.368 745.22 602.166 744.617 602.823 743.876L657.856 683.35L695.726 742.857C696.407 743.911 697.342 744.777 698.445 745.375C699.548 745.974 700.784 746.285 702.039 746.28H746.933C748.273 746.28 749.589 745.919 750.742 745.237C751.895 744.554 752.844 743.574 753.489 742.4C754.134 741.225 754.452 739.899 754.41 738.56C754.367 737.221 753.965 735.917 753.247 734.786ZM706.145 731.317L610.913 581.683H638.037L733.306 731.317H706.145Z" fill="white"/>
            <path d="M670.555 938.888C829.089 938.888 957.634 812.474 957.634 656.5C957.634 500.526 829.089 374.112 670.555 374.112C512.021 374.112 383.476 500.526 383.476 656.5C383.476 812.474 512.021 938.888 670.555 938.888Z" stroke="#8A8FCF" stroke-width="2"/>
            <path d="M669 1119.23C929.713 1119.23 1141.1 912.075 1141.1 656.5C1141.1 400.925 929.713 193.774 669 193.774C408.287 193.774 196.902 400.925 196.902 656.5C196.902 912.075 408.287 1119.23 669 1119.23Z" stroke="#8A8FCF" stroke-width="2"/>
            <path d="M669 1312C1037.91 1312 1337 1018.54 1337 656.5C1337 294.46 1037.91 1 669 1C300.092 1 1 294.46 1 656.5C1 1018.54 300.092 1312 669 1312Z" stroke="#8A8FCF" stroke-width="2"/>
            <path d="M331.613 96.8325C331.613 106.277 323.956 113.933 314.511 113.933C305.065 113.933 297.408 106.277 297.408 96.8325C297.408 87.3879 305.065 79.7316 314.511 79.7316C323.956 79.7316 331.613 87.3879 331.613 96.8325Z" fill="#41A86A"/>
            <path d="M882.005 236.749C882.005 242.76 877.132 247.632 871.121 247.632C865.11 247.632 860.238 242.76 860.238 236.749C860.238 230.739 865.11 225.867 871.121 225.867C877.132 225.867 882.005 230.739 882.005 236.749Z" fill="#EC7B4A"/>
            <path d="M232.107 793.308C232.107 802.752 224.45 810.409 215.005 810.409C205.559 810.409 197.902 802.752 197.902 793.308C197.902 783.863 205.559 776.207 215.005 776.207C224.45 776.207 232.107 783.863 232.107 793.308Z" fill="#ECC84A"/>
            <path d="M673.664 940.998C673.664 946.149 669.488 950.326 664.336 950.326C659.184 950.326 655.007 946.149 655.007 940.998C655.007 935.846 659.184 931.67 664.336 931.67C669.488 931.67 673.664 935.846 673.664 940.998Z" fill="#3ED37A"/>
            <path d="M732.746 1116.67C732.746 1120.96 729.265 1124.44 724.972 1124.44C720.679 1124.44 717.198 1120.96 717.198 1116.67C717.198 1112.38 720.679 1108.9 724.972 1108.9C729.265 1108.9 732.746 1112.38 732.746 1116.67Z" fill="#4A81EC"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
