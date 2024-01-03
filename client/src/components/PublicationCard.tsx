import { Publication } from "../utils/filterButtons";
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
    <div className="flex flex-col  border-[5px] p-[5%] my-[5%] border-black bg-primary rounded-[17px] ">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-[20pt] text-secondary font-primary ">
            {publication.title}
          </p>
        </div>
        <div>
          <p className={styles.dateStyle}> {publication.date}</p>
        </div>
        <div>
          <p className="text-[13pt] text-greyAccent font-primary ">
            {publication.cardDescription}
          </p>
        </div>
        <div className="w-full h-[30%]">
          <button
            onClick={() => {
              setOpenedPublication(publication);
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

export default PubCard;
