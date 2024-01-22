import { Testimonial } from "../utils/managementInterfaces";
import { useContext } from "react";

import { twMerge } from "tailwind-merge";
import TestimonialDataContext from "../context/TestimonialDataProvider";

interface Props {
  testimonial: Testimonial;
}

const ManageTestimonialCard = ({ testimonial }: Props) => {

  const {
    setPage,
    setAuthor,
    setQuote,
    setPictureURL,
    setTestimonial,
    setEditMode,
    setEditedTestimonialID,
    setDeleteTestimonialID,
    fetchTestimonials,
  } = useContext(TestimonialDataContext);
 

  
  return (
    <div className={twMerge("relative flex flex-col  border-[5px] p-[5%] my-[5%] border-black bg-primary rounded-[17px] ")}>
        <div className="absolute top-0 right-0 flex flex-row gap-2">
        <button
          onClick={() => {
           
          
           setAuthor(testimonial.author)
           setQuote(testimonial.quote)
           setPictureURL(testimonial.pictureURL)
          
            
            setPage("publish");
            setEditMode(true);
            setEditedTestimonialID(testimonial._id);
            setTestimonial(testimonial);
          }}
          className=" bg-secondary border-black border-[5px] font-Primary px-3 py-1 rounded-lg  duration-500 transition-all hover:border-secondary hover:bg-black hover:text-secondary"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setDeleteTestimonialID(testimonial._id);
            fetchTestimonials();
          }}
          className=" bg-secondary border-black border-[5px] font-Primary px-3 py-1 rounded-lg  duration-500 transition-all hover:border-secondary hover:bg-black hover:text-secondary"
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-[20pt] text-secondary font-primary ">
            {testimonial.author}
          </p>
        </div>
        <div>
          <p className={"text-black"}> {testimonial.quote}</p>
        </div>
        <div>
          <p className="text-[13pt] text-greyAccent font-primary ">
            {testimonial.pictureURL}
          </p>
        </div>
        <div className="w-full h-[30%]">
         
        </div>
      </div>
    </div>
  );
};

export default ManageTestimonialCard;
