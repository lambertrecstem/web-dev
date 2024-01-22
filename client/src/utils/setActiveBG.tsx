import { twMerge } from "tailwind-merge";

const setActiveBG = (accentColor: string) => {
  switch (accentColor) {
    case "red":
      return twMerge(` btn-filter`, `bg-redAccent `);
    case "yellow":
      return twMerge(` btn-filter`, `bg-yellowAccent `);
    case "green":
      return twMerge(` btn-filter`, `bg-greenAccent `);
    case "orange":
      return twMerge(` btn-filter`, `bg-orangeAccent `);
    case "secondary":
      return twMerge(` btn-filter`, `bg-secondary text-primary`);
  }
  return twMerge(` btn-filter`, `bg-greyAccent `);
};

export default setActiveBG;
