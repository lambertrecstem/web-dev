import { useContext } from "react";
import DataContext from "../context/DataProvider";

const ViewPublication = () => {
  const { openedPublication } = useContext(DataContext);
  const createMarkup = (rawContent: string) => {
    return { __html: rawContent };
  };

  return (
    <>
     {openedPublication ? (<><div
        // style={{ backgroundImage: `url(${openedPublication.picture})` }}
        className="flex justify-center items-center overflow-hidden w-full h-screen"
      >
        <img
          className="object-cover w-full h-full"
          src={openedPublication.picture}
          alt=""
        />
      </div>
      <div
        className="p-[10%] bg-primary text-secondary"
        dangerouslySetInnerHTML={createMarkup(
          openedPublication.publicationContent
        )}
      ></div></>) : <div className="w-full h-full bg-primary grid place-items-center text-center">
      <p className="text-secondary font-primary text-[50pt]">Please revisit the publications page and click on one of the publications to view</p>
    </div>}
    </>
  );
};

export default ViewPublication;
