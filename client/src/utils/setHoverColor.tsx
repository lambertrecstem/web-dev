import { twMerge } from "tailwind-merge";

const setHoverColor = (accentColor: string) => {
    switch (accentColor) {
      case "red":
        return twMerge(
          ` btn-filter duration-500 transition-all `,
          `hover:bg-redAccent `
        );
      case "yellow":
        return twMerge(
          ` btn-filter duration-500 transition-all `,
          `hover:bg-yellowAccent `
        );
      case "green":
        return twMerge(
          ` btn-filter duration-500 transition-all `,
          `hover:bg-greenAccent `
        );
      case "orange":
        return twMerge(
          ` btn-filter duration-500 transition-all `,
          `hover:bg-orangeAccent `
        );
    }
    return twMerge(
      ` btn-filter duration-500 transition-all `,
      `hover:bg-greyAccent `
    );
};
  
export default setHoverColor;