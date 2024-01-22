import { twMerge } from "tailwind-merge";

const setPublicationCardAccents = (accentColor: string) => {
  let dateStyle: string = twMerge(
      `text-[17pt] text-redAccent font-primary `,
      `text-greyAccent`
    );
  let buttonStyle: string = " w-[175px] py-[10px]  text-secondary font-light font-primary text-[14pt]  duration-500 hover:bg-secondary hover:text-primary   bg-greyAccent";
  let borderStyle: string =
    "relative xl:w-[100%] xl:h-[350px] lg:w-[400px] lg:h-[400px] grid place-items-start  border-[5px] p-[35px]  border-black bg-primary rounded-[17px] border-greyAccent";
  

  if (accentColor === "red") {
    buttonStyle = twMerge(
      ` w-[175px] py-[10px]  text-secondary font-light font-primary text-[14pt]  bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent  hover:border-redAccent `,
      `bg-redAccent `
    );
  } else if (accentColor === "yellow") {
    buttonStyle = twMerge(
      ` w-[175px] py-[10px]  text-secondary font-light font-primary text-[14pt]  bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent  hover:border-redAccent `,
      `bg-yellowAccent `
    );
  } else if (accentColor === "green") {
    buttonStyle = twMerge(
      ` w-[175px] py-[10px]  text-secondary font-light font-primary text-[14pt]  bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent  hover:border-redAccent `,
      `bg-greenAccent `
    );
  } else if (accentColor === "orange") {
    buttonStyle = twMerge(
      ` w-[175px] h-[10px]  text-secondary font-light font-primary text-[14pt]  bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent  hover:border-redAccent `,
      `bg-orangeAccent `
    );
  }

  if (accentColor === "red") {
    dateStyle = twMerge(
      `text-[17pt] text-redAccent font-primary  `,
      `text-redAccent`
    );
  } else if (accentColor === "yellow") {
    dateStyle = twMerge(
      `text-[17pt] text-redAccent font-primary `,
      `text-yellowAccent`
    );
  } else if (accentColor === "green") {
    dateStyle = twMerge(
      `text-[17pt] text-redAccent font-primary `,
      `text-greenAccent`
    );
  } else if (accentColor === "orange") {
    dateStyle = twMerge(
      `text-[17pt] text-redAccent font-primary `,
      `text-orangeAccent`
    );
  }

   if (accentColor === "red") {
     borderStyle = twMerge(
       `relative xl:w-[100%] xl:h-[350px] lg:w-[400px] lg:h-[400px] grid place-items-start  border-[5px] p-[35px]  border-black bg-primary rounded-[17px] `,
       `border-redAccent`
     );
   } else if (accentColor === "yellow") {
     borderStyle = twMerge(
       `relative xl:w-[100%] xl:h-[350px] lg:w-[400px] lg:h-[400px] grid place-items-start  border-[5px] p-[35px]  border-black bg-primary rounded-[17px]  `,
       `border-yellowAccent`
     );
   } else if (accentColor === "green") {
     borderStyle = twMerge(
       `relative xl:w-[100%] xl:h-[350px] lg:w-[400px] lg:h-[400px] grid place-items-start  border-[5px] p-[35px]  border-black bg-primary rounded-[17px] `,
       `border-greenAccent`
     );
   } else if (accentColor === "orange") {
     borderStyle = twMerge(
       `relative xl:w-[100%] xl:h-[350px] lg:w-[400px] lg:h-[400px] grid place-items-start  border-[5px] p-[35px]  border-black bg-primary rounded-[17px] `,
       `border-orangeAccent`
     );
   }
  

 



  return {
    dateStyle,
    buttonStyle,
    accentColor,
    borderStyle
  };
};

export default setPublicationCardAccents;
