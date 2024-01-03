import { useContext } from "react";
import ManageOfficerCard from "./ManageOfficerCard";
import OfficerDataContext from "../context/OfficerDataProvider";

const ReviewOfficers = () => {
  const { filter, setFilter, page, allOfficers } =
    useContext(OfficerDataContext);

  return (
    <>
      {page === "review" ? (
        <div className="w-full h-[100%] grid place-items-center">
          <input
            className="shadow-xl bg-greyAccent h-[50%] p-2 text-secondary  w-[90%] placeholder:text-secondary  placeholder:p-2 focus:outline-none  "
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      ) : null}
      {page === "review" ? (
        <div className=" w-full h-full grid place-items-center">
          {allOfficers.map(
            ({ position, fname, lname, bio, picture, _id }: any) => {
              if (filter === "")
                return (
                  <ManageOfficerCard
                    id={_id}
                    key={fname}
                    position={position}
                    fname={fname}
                    lname={lname}
                    bio={bio}
                    picture={picture}
                  />
                );
              let fullName = fname + " " + lname;
              if (
                position.includes(filter) ||
                fname.includes(filter) ||
                fullName.includes(filter) ||
                lname.includes(filter) ||
                bio.includes(filter)
              )
                return (
                  <ManageOfficerCard
                    id={_id}
                    key={fname}
                    position={position}
                    fname={fname}
                    lname={lname}
                    bio={bio}
                    picture={picture}
                  />
                );
            }
          )}
        </div>
      ) : null}
    </>
  );
};

export default ReviewOfficers;
