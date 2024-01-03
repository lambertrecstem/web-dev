import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Publication } from "../utils/filterButtons";
import PubCard from "./ManagePubCard";
import PublicationDataContext from "../context/PublicationDataProvider";

const EditPublication = () => {
  const { page, setFilter, publications, filter } = useContext(
    PublicationDataContext
  );

  return (
    <>
      {page === "review" ? (
        <div className="grid grid-rows-[15%_85%] w-[90%] h-[75%] m-[5%] overflow-y-scroll  scrollbar-none bg-secondary inner-shadow place-items-center">
          <div className="w-full h-[100%] grid grid-cols-[35%_5%_25%_35%] place-items-center">
            <div className="text-secondary grid w-[90%] h-[50%] col-start-2 text-[12pt]  bg-greyAccent rounded-full shadow-xl duration-500 transition-all    text-center">
              <label htmlFor="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </label>
            </div>
            <input
              className="shadow-xl bg-greyAccent h-[50%] p-2 text-secondary  w-[90%] placeholder:text-secondary  placeholder:p-2 focus:outline-none  "
              type="text"
              id="search"
              name="search"
              placeholder="Search..."
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="h-[100%] w-[50%] bg-transparent">
            {publications.map((p: Publication) => {
              if (filter === "") return <PubCard key={p._id} publication={p} />;
              if (
                p.cardDescription.includes(filter) ||
                p.title.includes(filter) ||
                p.date.includes(filter) ||
                p.subject.includes(filter)
              )
                return <PubCard key={p._id} publication={p} />;
              return null;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditPublication;
