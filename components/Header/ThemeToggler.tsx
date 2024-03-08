import { useTheme } from "next-themes";
import Image from "next/image";

// const ThemeToggler = () => {
//   const { theme, setTheme } = useTheme();

//   return (
//     <button
//       aria-label="theme toggler"
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
//     >
//     </button>
//   );
// };

// export default ThemeToggler;
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  // return (
  //   <button
  //     aria-label="theme toggler"
  //     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  //     className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-white dark:text-white lg:static"
  //     style={{ zIndex: 1000 }} // Add this line to ensure it's on top
  //   >
  //     Theme Toggle
  //   </button>
  // );
};

export default ThemeToggler;
