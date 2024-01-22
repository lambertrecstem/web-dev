import { useContext } from "react";
import TestimonialDataContext from "../../context/TestimonialDataProvider";
import NavBar from "../../components/TestimonialManageNavBar";
import PublishTestimonial from "../../components/PublishTestimonial";
import ReviewTestimonial from "../../components/ReviewTestimonial";


const ManageTestimonials = () => {
  const { page } = useContext(TestimonialDataContext);

  return (
    <div className="w-full h-[100%] bg-primary ">
      <NavBar />

      <ReviewTestimonial />
      {page === "publish" ? (
        <>
          <PublishTestimonial />
        </>
      ) : null}
    </div>
  );
};

export default ManageTestimonials;
