import { Competition } from "../utils/managementInterfaces";
import setPublicationCardAccents from "../utils/setPublicationCardAccents";
import {  subjects } from "../utils/managementInterfaces";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";
import CompetitionDataContext from "../context/CompetitionDataProvider";

interface Props {
  competition: Competition;
}

const ManageCompCard = ({ competition }: Props) => {

  const {
    setPage,
    setTitle,
    setDate,
    setSubject,
    setDesc,
    setCompetition,
    setEditMode,
    setEditedCompetitionID,
    setDeleteCompetitionID,
    fetchCompetitions,
  } = useContext(CompetitionDataContext);
 
  const styles = setPublicationCardAccents(competition.accent);

  const navigate = useNavigate();
  const to = competition.redirectURL || "/";

  return (
    <div className={twMerge("relative flex flex-col  border-[5px] p-[5%] my-[5%] border-black bg-primary rounded-[17px] ", `border-${styles.accentColor}`)}>
        <div className="absolute top-0 right-0 flex flex-row gap-2">
        <button
          onClick={() => {
           
            setDate(competition.date);
            setTitle(competition.title);
            setDesc(competition.cardDescription);
           
          
            setSubject(subjects.find((s: any) => s.slug === competition.slug));
            setPage("publish");
            setEditMode(true);
            setEditedCompetitionID(competition._id);
            setCompetition(competition);
          }}
          className=" bg-secondary border-black border-[5px] font-Primary px-3 py-1 rounded-lg  duration-500 transition-all hover:border-secondary hover:bg-black hover:text-secondary"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setDeleteCompetitionID(competition._id);
            fetchCompetitions();
          }}
          className=" bg-secondary border-black border-[5px] font-Primary px-3 py-1 rounded-lg  duration-500 transition-all hover:border-secondary hover:bg-black hover:text-secondary"
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-[20pt] text-secondary font-primary ">
            {competition.title}
          </p>
        </div>
        <div>
          <p className={styles.dateStyle}> {competition.date}</p>
        </div>
        <div>
          <p className="text-[13pt] text-greyAccent font-primary ">
            {competition.cardDescription}
          </p>
        </div>
        <div className="w-full h-[30%]">
          <button
            onClick={() => {

              navigate(to, { replace: true });
            }}
            className={styles.buttonStyle}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCompCard;
