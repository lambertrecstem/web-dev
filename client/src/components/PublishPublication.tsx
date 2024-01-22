import PubPropsInput from "./PropsInputField";
import { useContext } from "react";
import { subjects } from "../utils/managementInterfaces";
import SelectInput from "./SelectInput";
import PublicationDataContext from "../context/PublicationDataProvider";
import PubContentTextEditor from "./PubContentTextEditor";

const PublishPublication = () => {
  const {
    titleSaved, setTitleSaved, title, setTitle,
    authorSaved, setAuthorSaved, author, setAuthor,
    dateSaved, setDateSaved, date, setDate,
    subjectSaved, setSubjectSaved, subject, setSubject,
    descSaved, setDescSaved, desc, setDesc,
    setPublication, setPublicationSubmitted, editMode,
    setPublicationEdited, publication, setEditedPublicationID,
    setContent, contentSaved, setContentSaved, content,
    pic, setPic, picSaved, setPicSaved,
  } = useContext(PublicationDataContext);

  const isFormValid = titleSaved && authorSaved && dateSaved && descSaved && subjectSaved && contentSaved && picSaved;

  const resetForm = () => {
    setTitleSaved(false);
    setAuthorSaved(false);
    setSubjectSaved(false);
    setDateSaved(false);
    setDescSaved(false);
    setPicSaved(false);
    setContentSaved(false);

    setTitle("");
    setAuthor("");
    setSubject(subjects[0]);
    setDate("");
    setDesc("");
    setPic("");
    setContent("");
  };

  const createPublicationObject = () => ({
    _id: editMode ? publication._id : undefined,
    author, title, date,
    subject: subject.subject, slug: subject.slug,
    cardDescription: desc, publicationContent: content, picture: pic,
    accent: subject.accentColor,
  });

  const handleSubmit = () => {
    if (!isFormValid) return;

    setPublication(createPublicationObject());
    resetForm();
    editMode ? setPublicationEdited(true) : setPublicationSubmitted(true);
    if (editMode) {
      setEditedPublicationID(publication._id);
    }
  };

  return (
    <>
      <div className="relative grid grid-cols-[30%_70%] w-[90%] h-[75%] m-[5%] overflow-y-scroll scrollbar-none bg-primary inner-shadow">
        <div className="w-full h-full grid grid-rows-[14%_14%_14%_14%_14%_15%] border">
          <PubPropsInput
            label="Title"
            id="title"
            placeholder="Title..."
            valueSaved={titleSaved}
            setValue={setTitle}
            value={title}
            setValueSaved={setTitleSaved}
          />
          <PubPropsInput
            label="Author"
            id="author"
            placeholder="Author..."
            valueSaved={authorSaved}
            setValue={setAuthor}
            value={author}
            setValueSaved={setAuthorSaved}
          />
          <PubPropsInput
            label="Date"
            id="date"
            placeholder="Date..."
            valueSaved={dateSaved}
            setValue={setDate}
            value={date}
            setValueSaved={setDateSaved}
          />
          <SelectInput
            label="Subject"
            id="subject"
            placeholder="Subject..."
            valueSaved={subjectSaved}
            setValue={setSubject}
            value={subject}
            setValueSaved={setSubjectSaved}
          />
          <PubPropsInput
            label="Description"
            id="desc"
            placeholder="Card Description..."
            valueSaved={descSaved}
            setValue={setDesc}
            value={desc}
            setValueSaved={setDescSaved}
          />
          <PubPropsInput
            label="Picture URL"
            id="pic"
            placeholder="Picture URL..."
            valueSaved={picSaved}
            setValue={setPic}
            value={pic}
            setValueSaved={setPicSaved}
          />
          <button
            onClick={handleSubmit}
            className={isFormValid ? "text-secondary text-[30pt] font-primary bg-redAccent" : "text-secondary text-[30pt] font-primary bg-greyAccent"}
          >
            {editMode ? "EDIT" : "PUBLISH"}
          </button>
        </div>
        <div className="grid grid-rows-[90%_10%] w-full h-full overflow-y-scroll scrollbar-none border">
          <PubContentTextEditor
            editMode={editMode}
            value={content}
            placeholder="Publication content goes here..."
            setValue={setContent}
            valueSaved={contentSaved}
            setValueSaved={setContentSaved}
          />
        </div>
      </div>
    </>
  );
};

export default PublishPublication;
