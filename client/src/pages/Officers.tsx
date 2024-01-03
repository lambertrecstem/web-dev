import { useContext, useEffect } from "react";
import OfficerCarousel from "../components/OfficerCarousel";
import ScrollToTop from "../components/ScrollToTop";
import DataContext from "../context/DataProvider";

const Officers = () => {
  const { officers, fetchOfficers } = useContext(DataContext);
  useEffect(() => {
    fetchOfficers();
  }, []);
  return (
    <>
      {officers.length == 0 ? (
        <div className="w-full h-full bg-primary grid place-items-center">
          <p className="text-secondary font-primary text-[60pt]">
            Coming Soon...
          </p>
        </div>
      ) : (
        <div className="flex flex-col w-auto h-auto ">
          <ScrollToTop />
          <div className="w-auto h-screen p-[5%] bg-primary">
            <p className="text-[60pt] text-secondary font-primary ">
              meet the team that made it possible...
            </p>
            <p className="text-[20pt] text-secondary font-secondary ">
              Without this team, we would be unable to be at the point where we
              are now. Our hardworking team strives everyday to accomplish our
              mission.
            </p>
          </div>
          <div className="w-full bg-greyAccent ">
            <OfficerCarousel cards={officers} />
          </div>
        </div>
      )}
    </>
  );
};

export default Officers;
