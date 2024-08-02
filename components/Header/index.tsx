// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import clsx from "clsx";
// import menuData from "./menuData";
// import { buttonVariants } from "../button";

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

//   const handleSubmenuItemClick = () => {
//     setActiveSubmenu(null);
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

//   const mobileMenuOptionsStyles: React.CSSProperties = {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     gap: "10px",
//     width: "100%",
//     marginRight: "10px",
//     fontSize: "0.875rem"
//   };

//   const laptopMenuOptionsStyles: React.CSSProperties = {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     gap: "40px",
//   };

//   return (
//     <header
//       className={`fixed left-0 top-0 z-50 w-full py-7 bg-background shadow transition-all duration-300 dark:bg-background text-white text-lg ${
//         stickyMenu ? "sticky" : ""
//       }`}
//     >
//       <div className="relative mx-auto max-w-screen-xl flex items-center justify-between lg:justify-start gap-20">
//         <a href="/" className="ml-5">
//           <Image
//             src="/images/sigma symbol.png"
//             alt="logo"
//             width={35}
//             height={35}
//             className="w-full"
//             style={{ width: "35px" }}
//           />
//         </a>

//         <button className="lg:hidden text-white pr-1 ml-1" onClick={toggleMobileMenu}>
//           ☰
//         </button>

//         <nav
//           className={`lg:flex lg:items-center lg:gap-8 ${
//             isMobileMenuOpen ? "block" : "hidden"
//           } lg:block`}
//         >
//           <ul
//             className={`flex flex-col lg:flex-row ${isMobileMenuOpen ? "mobile-text" : ""}`}
//             style={isMobileMenuOpen ? mobileMenuOptionsStyles : laptopMenuOptionsStyles}
//           >
//             {menuData.map((menuItem) => (
//               <li key={menuItem.id} className="relative">
//                 {menuItem.submenu ? (
//                   <div className="group">
//                     <button
//                       className="flex items-center justify-between gap-3"
//                       onClick={() => handleSubmenuToggle(menuItem.id)}
//                     >
//                       {menuItem.title}
//                       <span className={clsx("transform transition-transform", {
//                           "rotate-180": activeSubmenu === menuItem.id,
//                       })}>
//                           <DownCaret />
//                       </span>
//                     </button>
//                     <ul
//                       className={clsx(
//                         "absolute left-0 mt-2 w-48 rounded-md bg-background p-2 shadow-lg z-50 transition-opacity duration-300 ease-in-out",
//                         {
//                           "opacity-100": activeSubmenu === menuItem.id,
//                           "opacity-0 pointer-events-none": activeSubmenu !== menuItem.id,
//                         }
//                       )}
//                     >
//                       {menuItem.submenu.map((subItem) => (
//                         <li key={subItem.title} className="p-2 hover:bg-gray-700">
//                           <Link
//                             href={subItem.path || "#"}
//                             onClick={handleSubmenuItemClick}
//                           >
//                             {subItem.title}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <Link
//                     href={menuItem.path || "#"}
//                     className={clsx(
//                       "p-2",
//                       {
//                         "text-primary": pathUrl === menuItem.path,
//                         [buttonVariants({ variant: "cta" })]:
//                           menuItem.title === "Contact Us",
//                       }
//                     )}
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






"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import menuData from "./menuData";
import { buttonVariants } from "../button";
import './styles.css';

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
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
    setNavigationOpen((prev) => !prev);
  };

  const handleSubmenuToggle = (menuItemId) => {
    setActiveSubmenu((prev) => (prev === menuItemId ? null : menuItemId));
  };

  const DownCaret = () => (
    <svg
      className="h-3 w-3 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      aria-label="Down Caret"
    >
      <path
        d="M1.5 3.5L5 7l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-7 ${
        stickyMenu ? "bg-custom-gradient shadow transition duration-100 dark:bg-custom-gradient" : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/" className="ml-5">
            <Image
              src="/images/sigma symbol.png"
              alt="logo"
              width={35}
              height={35}
              className="w-full"
              style={{ width: "35px" }}
            />
          </a>

         {/*starts here */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={toggleMobileMenu}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/*ends here */}

        
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-background p-7.5 shadow-solid-5 dark:bg-background xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-background"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-14">
              {menuData.map((menuItem) => (
                <li key={menuItem.id} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => handleSubmenuToggle(menuItem.id)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-white"
                      >
                        {menuItem.title}
                        <span>
                          <DownCaret />
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${
                          activeSubmenu === menuItem.id ? "flex" : ""
                        }`}
                      >
                        {menuItem.submenu.map((subItem) => (
                          <li key={subItem.title} className="hover:text-white text-black">
                            <Link href={subItem.path || "#"} onClick={() => setActiveSubmenu(null)}>
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={menuItem.path || "#"}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-white"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-7 flex items-center gap-6 xl:mt-0 text-black">
            <Link
              href="/contactus"
              className={clsx("p-2", buttonVariants({ variant: "cta" }))}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
