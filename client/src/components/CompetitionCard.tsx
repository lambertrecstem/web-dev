import { Competition } from "../utils/managementInterfaces";
import setPublicationCardAccents from "../utils/setPublicationCardAccents";
import { useNavigate } from "react-router";


interface Props {
  competition: Competition;
}

const CompetitionCard = ({ competition }: Props) => {
 
  const styles = setPublicationCardAccents(competition.accent);

  const navigate = useNavigate();
  const to = competition.redirectURL || "/";

  return (
    <div className={styles.borderStyle}>
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

export default CompetitionCard;
