import { useContext } from "react";
import NavBar from "../../components/CompManageNavBar";
import CompetitionDataContext from "../../context/CompetitionDataProvider";
import ReviewCompetition from "../../components/ReviewCompetition";
import PublishCompetition from "../../components/PublishCompetition";

const ManageCompetitions = () => {
  const { page } = useContext(CompetitionDataContext);

  return (
    <div className="w-full h-[100%] bg-primary ">
      <NavBar />

      <ReviewCompetition />
      {page === "publish" ? (
        <>
          <PublishCompetition />
        </>
      ) : null}
    </div>
  );
};

export default ManageCompetitions;
