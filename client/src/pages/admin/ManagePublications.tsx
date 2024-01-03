import { useContext } from "react";
import NavBar from "../../components/DashboardNavBar";
import ReviewPublication from "../../components/ReviewPublication";
import PublishPublication from "../../components/PublishPublication";
import PublicationDataContext from "../../context/PublicationDataProvider";

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
