import { useContext } from "react";
import CompetitionDataContext from "../../context/CompetitionDataProvider";

const CompManageNavBar = () => {
  const { setPage } = useContext(CompetitionDataContext);

  return (
    <div className="relative left-[100px] w-[90%] h-[10%] grid grid-cols-[50%_50%] place-items-center m-0">
      <div className="w-full h-full  grid place-items-center">
        <button
          onClick={() => {
            setPage("review");
          }}
          className="w-[50%] h-[50%] bg-redAccent  shadow-inner shadow-primary text-[12pt] text-secondary font-primary   duration-[100ms] transition-all  hover:shadow-none hover:text-[14pt]"
        >
          Review
        </button>
      </div>
      <div className="w-full h-full  grid place-items-center">
        <button
          onClick={() => setPage("publish")}
          className="w-[50%] h-[50%] bg-redAccent  shadow-inner shadow-primary text-[12pt] text-secondary font-primary   duration-[100ms] transition-all  hover:shadow-none hover:text-[14pt]"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default CompManageNavBar;
