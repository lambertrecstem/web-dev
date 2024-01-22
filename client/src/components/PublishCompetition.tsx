import PubPropsInput from "./PropsInputFieldvTwo";
import { useContext } from "react";
import { subjectsComp } from "../utils/managementInterfaces";
import SelectInputComp from "./SelectInputComp";
import SelectInputComp2 from "./SelectInputComp2";
import CompetitionDataContext from "../context/CompetitionDataProvider";
import { faCheck, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublishCompetition = () => {
  const {
    title, setTitle, date, setDate, subject, setSubject,
    saved, setSaved, desc, setDesc, setCompetition, type, setType,
    setCompetitionSubmitted, editMode, setCompetitionEdited,
    competition, setEditedCompetitionID, setRedirectURL, redirectURL,
  } = useContext(CompetitionDataContext);

  const isSubmitEnabled = () => saved;

  const updateCompetitionData = () => {
    setCompetition({
      title, date, subject: subject.subject,
      slug: subject.slug, cardDescription: desc, 
      redirectURL, accent: subject.accentColor,
      type: type
    });
  };

  const handlePublish = () => {
    if (!saved) return;

    updateCompetitionData();
    setSaved(false);
    setTitle("");
    setSubject(subjectsComp[0]);
    setDate("");
    setDesc("");
    setRedirectURL("");
    setType("")

    if (editMode) {
      setCompetitionEdited(true);
      setEditedCompetitionID(competition._id);
    } else {
      setCompetitionSubmitted(true);
    }
  };

  return (
    <>
      <div className="relative grid grid-cols-[30%_70%] w-[90%] h-[75%] m-[5%] overflow-y-scroll scrollbar-none bg-primary inner-shadow ">
        {/* Inputs and button section */}
        <div className="w-full h-full grid grid-rows-[14%_14%_14%_14%_14%_15%] border">
          {/* Input fields */}
          <PubPropsInput label="Title" id="title" placeholder="Title..." valueSaved={saved} setValue={setTitle} value={title} />
          <PubPropsInput label="Redirect URL" id="url" placeholder="url..." valueSaved={saved} setValue={setRedirectURL} value={redirectURL} />
          <PubPropsInput label="Date" id="date" placeholder="Date..." valueSaved={saved} setValue={setDate} value={date} />
          <SelectInputComp label="subject" id="subject" placeholder="Subject..." valueSaved={false} setValue={setSubject} value={subject} />
          <PubPropsInput label="Description" id="desc" placeholder="Card Description..." valueSaved={saved} setValue={setDesc} value={desc} />
          <SelectInputComp2 label="subject" id="subject" placeholder="Subject..." valueSaved={false} setValue={setType} value={type} />


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

export default PublishCompetition;
