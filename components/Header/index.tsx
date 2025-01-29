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

  // const handleStickyMenu = () => {
  //   if (typeof window !== 'undefined') {
  //     const screenWidth = window.innerWidth;
  //     setStickyMenu(window.scrollY >= 80 && screenWidth >= 768);

  //     const header = document.querySelector('.bgcustomgradient') as HTMLElement | null;
  //     if (header) {
  //       if (screenWidth < 768 ) {
  //         // For small screens
  //         header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  //       } else {
  //         // For larger screens
  //         if (window.scrollY >= 100) {
  //           header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  //         } else {
  //           header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  //         }
  //       }
  //     }
  //   }
  // };

  const handleStickyMenu = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      const header = document.querySelector('.bgcustomgradient') as HTMLElement | null;
  
      if (header) {
        if (screenWidth < 768) {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
          if (window.scrollY >= 1) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
          }
        }
      }
    }
  };
  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleStickyMenu();
      window.addEventListener('scroll', handleStickyMenu);
      window.addEventListener('resize', handleStickyMenu);

      return () => {
        window.removeEventListener('scroll', handleStickyMenu);
        window.removeEventListener('resize', handleStickyMenu);
      };
    }
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
      className="fixed left-0 top-0 z-50 w-full py-4 md:py-7  bgcustomgradient transition duration-100 dark:bg-custom-gradient font-poppins">
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex items-center justify-between mr-[60px]">
          <a href="/" className="ml-5">
            <Image
              src="/images/sigma symbol.png"
              alt="logo"
              width={55}
              height={105}
              className="h-auto w-[50%] md:w-full"
            />
          </a>

          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden mr-[-60px]"
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
        
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-3 md:mt-4 h-[200px] max-h-[400px] xl:h-auto rounded-md bg-background p-7.5 shadow-solid-5 dark:bg-background xl:p-0 xl:shadow-none xl:dark:bg-background"
          }`}
        >
          <nav>
            <ul className="flex flex-col xl:flex-row xl:items-center lg:gap-[30px] 2xl:gap-[56px] text-[15px] md:text-[20px]">
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
                        className={`dropdown text-white rounded-[18px] w-[116px] bg-[hsla(236,32%,29%,0.8)] ${
                          activeSubmenu === menuItem.id ? "flex" : ""
                        }`}
                      >
                        {menuItem.submenu.map((subItem) => (
                          <li key={subItem.title} className="text-white text-[13px] font-semibold font-poppins">
                            <Link
                              href={subItem.path || "#"}
                              onClick={() => {
                                setActiveSubmenu(null);
                                toggleMobileMenu(); 
                              }}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={menuItem.path || "#"}
                      onClick={() => {
                        toggleMobileMenu(); 
                      }}
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
          <div className="mt-2 md:mt-7 flex items-center gap-6 xl:mt-0 text-black font-poppins">
            <Link
              href="/contactus"
              onClick={() => {
                toggleMobileMenu(); 
              }}
              className={clsx("md:p-2 font-semibold", buttonVariants({ variant: "cta" }))}
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















