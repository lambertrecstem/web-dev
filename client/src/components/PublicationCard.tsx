import { Publication } from "../utils/managementInterfaces";
import setPublicationCardAccents from "../utils/setPublicationCardAccents";
import DataContext from "../context/DataProvider";
import { useContext } from "react";
import { useNavigate } from "react-router";


interface Props {
  publication: Publication;
}

const PubCard = ({ publication }: Props) => {
  const { setOpenedPublication } = useContext(DataContext);

  const styles = setPublicationCardAccents(publication.accent);

  const navigate = useNavigate();
  const to = "/publications/view";

  return (
    <div
      className={styles.borderStyle}
    >
      <div className="grid  gap-2 grid-rows-[40px_40px_40px_70px_50px]">
        <div>
          <p className="h-full text-[20pt] text-secondary font-primary overflow-hidden">
            {publication.title}
          </p>
        </div>
        <div>
          <p className={styles.dateStyle}> {publication.date}</p>
        </div>
        <div>
          <p className={"text-[17pt] text-greyAccent font-primary"}>
            {" "}
            {publication.author}
          </p>
        </div>
        <div>
          <p className="text-[13pt] text-greyAccent font-primary h-[50px] overflow-hidden ">
            {publication.cardDescription}
          </p>
        </div>
        <div className="w-full h-[30%] relative bottom-0">
          <button
            onClick={() => {
              setOpenedPublication(publication);
              navigate(to, { replace: true });
            }}
            className={styles.buttonStyle}
          >
            Check it out
          </button>
        </div>
      </div>
    </div>
  );
};

export default PubCard;
