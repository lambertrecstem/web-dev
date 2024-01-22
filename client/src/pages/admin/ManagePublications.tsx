import { useContext } from "react";
import NavBar from "../../components/DashboardNavBar";

import PublicationDataContext from "../../context/PublicationDataProvider";
import PublishPublication from "../../components/PublishPublication";
import ReviewPublication from "../../components/ReviewPublication";

const ManagePublications = () => {
  const { page } = useContext(PublicationDataContext);

  return (
    <div className="w-full h-[100%] bg-primary ">
      <NavBar />

      <ReviewPublication />
      {page === "publish" ? (
        <>
          <PublishPublication />
        </>
      ) : null}
    </div>
  );
};

export default ManagePublications;
