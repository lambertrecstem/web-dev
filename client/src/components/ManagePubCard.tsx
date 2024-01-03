import { useContext } from "react";
import PublicationDataContext from "../context/PublicationDataProvider";
import { Publication, subjects } from "../utils/filterButtons";
import setPublicationCardAccents from "../utils/setPublicationCardAccents";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataProvider";

interface Props {
  publication: Publication;
}

const PubCard = ({ publication }: Props) => {
  const styles = setPublicationCardAccents(publication.accent);

  const { setOpenedPublication } = useContext(DataContext);

  const navigate = useNavigate();
  const to = "/publications/view";

  const {
    setPage,
    setTitle,
    setAuthor,
    setDate,
    setSubject,
    setDesc,
    setPublication,
    setEditMode,
    setEditedPublicationID,
    setDeletePublicationID,
    setContent,
    fetchPublications,
    setPic
  } = useContext(PublicationDataContext);

  return (
    <div className="relative flex flex-col  border-[5px] p-[5%] my-[5%] border-black bg-primary rounded-[17px] ">
      <div className="absolute top-0 right-0 flex flex-row gap-2">
        <button
          onClick={() => {
            setAuthor(publication.author);
            setDate(publication.date);
            setTitle(publication.title);
            setDesc(publication.cardDescription);
            setContent(publication.publicationContent);
            setPic(publication.picture);
            setSubject(subjects.find((s) => s.slug === publication.slug));
            setPage("publish");
            setEditMode(true);
            setEditedPublicationID(publication._id);
            setPublication(publication);
          }}
          className=" bg-secondary border-black border-[5px] font-Primary px-3 py-1 rounded-lg  duration-500 transition-all hover:border-secondary hover:bg-black hover:text-secondary"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setDeletePublicationID(publication._id);
            fetchPublications();
          }}
          className=" bg-secondary border-black border-[5px] font-Primary px-3 py-1 rounded-lg  duration-500 transition-all hover:border-secondary hover:bg-black hover:text-secondary"
        >
          Delete
        </button>
      </div>
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
