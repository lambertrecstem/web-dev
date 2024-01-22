import PubPropsInput from "./PropsInputFieldvTwo";
import { useContext } from "react";
import TestimonialDataContext from "../context/TestimonialDataProvider";
import { faCheck, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublishTestimonial = () => {
  const {
    
    saved, setSaved, setTestimonial,
    setTestimonialSubmitted, editMode, setTestimonialEdited,
    testimonial, setEditedTestimonialID, author, setAuthor,
    quote, setQuote, pictureURL, setPictureURL
  } = useContext(TestimonialDataContext);

  const isSubmitEnabled = () => saved;

  const updateCompetitionData = () => {
    setTestimonial({
      author: author, quote: quote, pictureURL: pictureURL
    });
  };

  const handlePublish = () => {
    if (!saved) return;

    updateCompetitionData();
    setSaved(false);
    setAuthor("");
    setQuote("");
    setPictureURL("");

    if (editMode) {
      setTestimonialEdited(true);
      setEditedTestimonialID(testimonial._id);
    } else {
      setTestimonialSubmitted(true);
    }
  };

  return (
    <>
      <div className="relative grid grid-cols-[30%_70%] w-[90%] h-[75%] m-[5%] overflow-y-scroll scrollbar-none bg-primary inner-shadow ">
        {/* Inputs and button section */}
        <div className="w-full h-full grid grid-rows-[14%_14%_14%_14%_14%_15%] border">
          {/* Input fields */}
          <PubPropsInput label="Author" id="Author" placeholder="Author..." valueSaved={saved} setValue={setAuthor} value={author} />
          <PubPropsInput label="Quote" id="quote" placeholder="quote..." valueSaved={saved} setValue={setQuote} value={quote} />
          <PubPropsInput label="PictureURL" id="PictureURL" placeholder="Picture URL..." valueSaved={saved} setValue={setPictureURL} value={pictureURL} />
          {/* Publish/Edit button */}
          <button
            onClick={handlePublish}
            className={isSubmitEnabled() ? "text-secondary text-[30pt] font-primary bg-redAccent" : "text-secondary text-[30pt] font-primary bg-greyAccent"}
          >
            {editMode ? "EDIT" : "PUBLISH"}
          </button>
        </div>

        {/* Save toggle section */}
        <div className="text-secondary grid place-items-center h-full text-[20pt] ">
          <div
            onClick={() => setSaved(!saved)}
            className={`bg-${saved ? 'redAccent' : 'greenAccent'} p-2 rounded-full`}
          >
            <FontAwesomeIcon icon={saved ? faPencil : faCheck} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishTestimonial;
