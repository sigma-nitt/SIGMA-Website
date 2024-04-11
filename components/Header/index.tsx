// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import 'animate.css';
// import { buttonVariants } from "../button";
// import { Icons } from "../icons";

// import clsx from 'clsx';
// export function cn(...inputs) {
//   return clsx(inputs);
// }

// import menuData from "./menuData";

// const Header = () => {
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);

//   const pathUrl = usePathname();

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleDesktopMenu = () => {
//     setIsDesktopMenuOpen(!isDesktopMenuOpen);
//   };


//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//     return () => {
//       window.removeEventListener("scroll", handleStickyMenu);
//     };
//   }, []);

//   return (
//     <header className={`fixed left-0 top-0 z-99999 w-full py-7 bg-background shadow transition duration-100000 dark:bg-background text-white text-lg ${stickyMenu ? 'sticky' : ''}`}>
//       <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
//         <div className="flex w-full items-start justify-between lg:w-1/4">
//           <a href="/">
//             <Image
//               src="/images/sigma symbol.png"
//               alt="logo"
//               width={35}
//               height={35}
//               className="w-full"
//             />
//           </a>

//           <button className="lg:hidden" onClick={toggleMobileMenu}>
//             ☰
//           </button>

//           <nav className={`lg:hidden ${isMobileMenuOpen ? 'visible' : 'hidden'} ${isMobileMenuOpen ? 'h-70 text-sm' : ''}`}>
//             {menuData.map((item) => (
//               <div key={item.id}>
//                 {item.submenu ? (
//                   <div className="group relative">
//                     <button
//                       onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                       // className="flex items-center justify-between gap-3 hover:text-primary focus:outline-none transition-transform transform"
//                       className="flex items-center justify-between gap-3 focus:outline-none transition-transform transform"
//                     >
//                       {item.title}
//                       <span>
//                         <svg
//                           className="h-3 w-3 cursor-pointer fill-waterloo"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 512 512"
//                         >
//                           <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
//                         </svg>
//                       </span>
//                     </button>

//                     <ul className={`dropdown ${isMobileMenuOpen ? 'flex' : ''}`}>
//                       {item.submenu.map((subItem, subKey) => (
//                         <li key={subKey} className="hover:text-primary group-hover:text-black">
//                           <Link href={subItem.path || "#"}>
//                             {subItem.title}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.path || "#"}
//                     className={
//                       pathUrl === item.path
//                         // ? "text-primary hover:text-primary"
//                         // : "hover:text-primary"
//                         ? "text-primary"
//                         : "text-primary"
//                     }
//                   >
//                     {item.title}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>


//         <div className={`lg:flex lg:w-full ${isDesktopMenuOpen ? 'visible' : 'hidden'} ${navigationOpen && 'navbar mt-4 h-auto max-h-[400px] rounded-md bg-background text-white p-7.5 shadow-solid-5 dark:bg-background lg:p-0 xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent'}`}>
//           <nav>
//             <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
//               {menuData.map((menuItem, key) => (
//                 <li key={key} className={menuItem.submenu && "group relative"}>
//                   {menuItem.submenu ? (
//                     <>
//                       <button
//                         onClick={toggleDesktopMenu}
//                         // className="flex items-center justify-between gap-3 hover:text-primary focus:outline-none transition-transform transform"
//                         className="flex items-center justify-between gap-3 text-white focus:outline-none transition-transform transform"
//                       >
//                         {menuItem.title}
//                         <span>
//                           <svg
//                             className="h-3 w-3 cursor-pointer fill-waterloo"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 512 512"
//                           >
//                             <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
//                           </svg>
//                         </span>
//                       </button>

//                       <ul className={`dropdown ${isDesktopMenuOpen ? 'flex' : ''}`}>
//                         {menuItem.submenu.map((item, key) => (
//                           <li key={key} className="hover:text-primary group-hover:text-black">
//                             <Link href={item.path || "#"}>{item.title}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       href={`${menuItem.path}`}
//                       className={
//                         pathUrl === menuItem.path
//                           // ? "text-primary hover:text-primary"
//                           ? "text-primary"
//                           : menuItem.title === "Contact Us"
//                           ? cn(
//                               buttonVariants({ variant: "cta" }),
//                               "flex h-12 items-center justify-center space-x-5 p-[.25rem_.3rem_.25rem_1.3rem] text-base"
//                             )
//                           // : "hover:text-primary"
//                           : "text-primary"
//                       }
//                     >
//                       {menuItem.title}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;













// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import clsx from 'clsx';
// export function cn(...inputs) {
//   return clsx(inputs);
// }
// import menuData from "./menuData";
// import { buttonVariants } from "../button";
// // import DropdownIcon from '@/public/images/dropdown.png';

// const Header = () => {
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   const pathUrl = usePathname();

//   const handleStickyMenu = () => {
//     setStickyMenu(window.scrollY >= 80);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//     return () => {
//       window.removeEventListener("scroll", handleStickyMenu);
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   const handleSubmenuToggle = (menuItemId) => {
//     setActiveSubmenu((prev) => (prev === menuItemId ? null : menuItemId));
//   };

//   const DownCaret = () => (
//     <svg
//       className="h-3 w-3 fill-current"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 10 10"
//       aria-label="Down Caret"
//     >
//       <path d="M1.5 3.5L5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
  
//   return (
//     <header
//       className={`fixed left-0 top-0 z-50 w-full py-7 bg-background shadow transition-all duration-300 dark:bg-background text-white text-lg ${
//         stickyMenu ? "sticky" : ""
//       }`}
//     >
//       <div className="relative ml-15 mx-auto max-w-screen-xl flex items-center justify-between lg:justify-start gap-20">
//         <a href="/">
//           <Image
//             src="/images/sigma symbol.png"
//             alt="logo"
//             width={35}
//             height={35}
//             className="w-full"
//           />
//         </a>

//         <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
//           ☰
//         </button>

//         <nav
//           className={`lg:flex lg:items-center lg:gap-8 ${
//             isMobileMenuOpen ? "block" : "hidden"
//           } lg:block`}
//         >
//           <ul className="flex flex-col lg:flex-row">
//             {menuData.map((menuItem) => (
//               <li key={menuItem.id} className="relative pl-11">
//                 {menuItem.submenu ? (
//                   <div className="group">
//                     <button
//                       className="flex items-center justify-between gap-3"
//                       onClick={() => handleSubmenuToggle(menuItem.id)}
//                     >
//                       {menuItem.title}
//                       <span className="transform transition-transform group-hover:rotate-180">
//                         <DownCaret />
//                       </span>
//                     </button>
//                     <ul
//                       className={`absolute left-0 mt-2 w-48 rounded-md bg-background p-2 shadow-lg z-50 transition-opacity duration-300 ease-in-out ${
//                         activeSubmenu === menuItem.id ? "opacity-100" : "opacity-0 pointer-events-none"
//                       }`}
//                     >
//                       {menuItem.submenu.map((subItem) => (
//                         <li key={subItem.title} className="p-2 hover:bg-gray-700">
//                           <Link href={subItem.path || "#"}>{subItem.title}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <Link
//                     href={menuItem.path || "#"}
//                     className={`p-2 ${
//                       pathUrl === menuItem.path
//                         ? "text-primary"
//                         : menuItem.title === "Contact Us"
//                         ? cn(
//                             buttonVariants({ variant: "cta" }),
//                             "flex h-12 items-center justify-center text-base"
//                           )
//                         : "text-primary"
//                     }`}
//                   >
//                     {menuItem.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;





// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import clsx from 'clsx';
// export function cn(...inputs) {
//   return clsx(inputs);
// }
// import menuData from "./menuData";
// import { buttonVariants } from "../button";
// // import DropdownIcon from '@/public/images/dropdown.png';

// const Header = () => {
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   const pathUrl = usePathname();

//   const handleStickyMenu = () => {
//     setStickyMenu(window.scrollY >= 80);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//     return () => {
//       window.removeEventListener("scroll", handleStickyMenu);
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   const handleSubmenuToggle = (menuItemId) => {
//     setActiveSubmenu((prev) => (prev === menuItemId ? null : menuItemId));
//   };

//   const DownCaret = () => (
//     <svg
//       className="h-3 w-3 fill-current"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 10 10"
//       aria-label="Down Caret"
//     >
//       <path d="M1.5 3.5L5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );

//   const handleSubmenuItemClick = () => {
//     // Close the submenu when an option is clicked
//     setActiveSubmenu(null);
//   };

//   return (
//     <header
//       className={`fixed left-0 top-0 z-50 w-full py-7 bg-background shadow transition-all duration-300 dark:bg-background text-white text-lg ${
//         stickyMenu ? "sticky" : ""
//       }`}
//     >
//       <div className="relative ml-15 mx-auto max-w-screen-xl flex items-center justify-between lg:justify-start gap-20">
//         <a href="/">
//           <Image
//             src="/images/sigma symbol.png"
//             alt="logo"
//             width={35}
//             height={35}
//             className="w-full"
//           />
//         </a>

//         <button className="lg:hidden text-white pr-3" onClick={toggleMobileMenu}>
//           ☰
//         </button>

//         <nav
//           className={`lg:flex lg:items-center lg:gap-8 ${
//             isMobileMenuOpen ? "block" : "hidden"
//           } lg:block`}
//         >
//           <ul className="flex flex-col lg:flex-row">
//             {menuData.map((menuItem) => (
//               <li key={menuItem.id} className="relative pl-11">
//                 {menuItem.submenu ? (
//                   <div className="group">
//                     <button
//                       className="flex items-center justify-between gap-3"
//                       onClick={() => handleSubmenuToggle(menuItem.id)}
//                     >
//                       {menuItem.title}
//                       <span className="transform transition-transform group-hover:rotate-180">
//                         <DownCaret />
//                       </span>
//                     </button>
//                     <ul
//                       className={`absolute left-0 mt-2 w-48 rounded-md bg-background p-2 shadow-lg z-50 transition-opacity duration-300 ease-in-out ${
//                         activeSubmenu === menuItem.id ? "opacity-100" : "opacity-0 pointer-events-none"
//                       }`}
//                     >
//                       {menuItem.submenu.map((subItem) => (
//                         <li key={subItem.title} className="p-2 hover:bg-gray-700">
//                           <Link href={subItem.path || "#"} onClick={handleSubmenuItemClick}>
//                             {subItem.title}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <Link
//                     href={menuItem.path || "#"}
//                     className={`p-2 ${
//                       pathUrl === menuItem.path
//                         ? "text-primary"
//                         : menuItem.title === "Contact Us"
//                         ? cn(
//                             buttonVariants({ variant: "cta" }),
//                             "flex h-12 items-center justify-center text-base"
//                           )
//                         : "text-primary"
//                     }`}
//                   >
//                     {menuItem.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;




"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import menuData from "./menuData";
import { buttonVariants } from "../button";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleSubmenuToggle = (menuItemId) => {
    setActiveSubmenu((prev) => (prev === menuItemId ? null : menuItemId));
  };

  const handleSubmenuItemClick = () => {
    setActiveSubmenu(null);
  };

  const DownCaret = () => (
    <svg
      className="h-3 w-3 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      aria-label="Down Caret"
    >
      <path d="M1.5 3.5L5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const mobileMenuOptionsStyles: React.CSSProperties = {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  };

  const laptopMenuOptionsStyles: React.CSSProperties = {
    flexDirection: "row",
    alignItems: "flex-start", 
    gap: "40px",
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-7 bg-background shadow transition-all duration-300 dark:bg-background text-white text-lg ${
        stickyMenu ? "sticky" : ""
      }`}
    >
      <div className="relative mx-auto max-w-screen-xl flex items-center justify-between lg:justify-start gap-20">
        <a href="/">
          <Image
            src="/images/sigma symbol.png"
            alt="logo"
            width={35}
            height={35}
            className="w-full"
          />
        </a>

        <button className="lg:hidden text-white pr-3" onClick={toggleMobileMenu}>
          ☰
        </button>

        <nav
          className={`lg:flex lg:items-center lg:gap-8 ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul
            className="flex flex-col lg:flex-row"
            style={isMobileMenuOpen ? mobileMenuOptionsStyles : laptopMenuOptionsStyles}
          >
            {menuData.map((menuItem) => (
              <li key={menuItem.id} className="relative">
                {menuItem.submenu ? (
                  <div className="group">
                    <button
                      className="flex items-center justify-between gap-3"
                      onClick={() => handleSubmenuToggle(menuItem.id)}
                    >
                      {menuItem.title}
                      <span className="transform transition-transform group-hover:rotate-180">
                        <DownCaret />
                      </span>
                    </button>
                    <ul
                      className={clsx(
                        "absolute left-0 mt-2 w-48 rounded-md bg-background p-2 shadow-lg z-50 transition-opacity duration-300 ease-in-out",
                        {
                          "opacity-100": activeSubmenu === menuItem.id,
                          "opacity-0 pointer-events-none": activeSubmenu !== menuItem.id,
                        }
                      )}
                    >
                      {menuItem.submenu.map((subItem) => (
                        <li key={subItem.title} className="p-2 hover:bg-gray-700">
                          <Link
                            href={subItem.path || "#"}
                            onClick={handleSubmenuItemClick}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={menuItem.path || "#"}
                    className={clsx(
                      "p-2",
                      {
                        "text-primary": pathUrl === menuItem.path,
                        [buttonVariants({ variant: "cta" })]:
                          menuItem.title === "Contact Us",
                      }
                    )}
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
