import { twMerge } from "tailwind-merge";

const setPublicationCardAccents = (accentColor: string) => {
  let dateStyle: string = twMerge(
      `text-[17pt] text-redAccent font-primary `,
      `text-greyAccent`
    );
  let buttonStyle: string = " w-[60%] py-[5%]  text-secondary font-light font-primarySub text-[14pt]  duration-500 hover:bg-secondary hover:text-redAccent hover:border-2 hover:border-redAccent bg-greyAccent";

  

  if (accentColor === "red") {
    buttonStyle = twMerge(
      ` w-[60%] py-[5%]  text-secondary font-light font-primarySub text-[14pt]  bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent hover:border-2 hover:border-redAccent `,
      `bg-redAccent `
    );
  } else if (accentColor === "yellow") {
    buttonStyle = twMerge(
      ` w-[60%] py-[5%]  text-secondary font-light font-primarySub text-[14pt]  bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent hover:border-2 hover:border-redAccent `,
      `bg-yellowAccent `
    );
  } else if (accentColor === "green") {
    buttonStyle = twMerge(
      ` w-[60%] py-[5%]  text-secondary font-light font-primarySub text-[14pt]  bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent hover:border-2 hover:border-redAccent `,
      `bg-greenAccent `
    );
  } else if (accentColor === "orange") {
    buttonStyle = twMerge(
      ` w-[60%] py-[5%]  text-secondary font-light font-primarySub text-[14pt]  bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent hover:border-2 hover:border-redAccent `,
      `bg-orangeAccent `
    );
  }

  if (accentColor === "red") {
    dateStyle = twMerge(
      `text-[17pt] text-redAccent font-primary `,
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



  return {
    dateStyle,
    buttonStyle,
  };
};

export default setPublicationCardAccents;
