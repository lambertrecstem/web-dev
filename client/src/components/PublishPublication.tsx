import PubPropsInput from "./PropsInputField";
import { useContext } from "react";
import { subjects } from "../utils/filterButtons";
import SelectInput from "./SelectInput";
import PublicationDataContext from "../context/PublicationDataProvider";
import PubContentTextEditor from "./PubContentTextEditor";

const PublishPublication = () => {
  const {
    titleSaved,
    setTitleSaved,
    title,
    setTitle,
    authorSaved,
    setAuthorSaved,
    author,
    setAuthor,
    dateSaved,
    setDateSaved,
    date,
    setDate,
    subjectSaved,
    setSubjectSaved,
    subject,
    setSubject,
    descSaved,
    setDescSaved,
    desc,
    setDesc,
    setPublication,
    setPublicationSubmitted,
    editMode,
    setPublicationEdited,
    publication,
    setEditedPublicationID,
    setContent,
    contentSaved,
    setContentSaved,
    content,
    pic,
    setPic,
    picSaved,
    setPicSaved,
  } = useContext(PublicationDataContext);

  const submitStyling = () => {
    if (
      titleSaved &&
      authorSaved &&
      dateSaved &&
      descSaved &&
      subjectSaved &&
      contentSaved &&
      picSaved
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmitPublish = () => {
    if (
      titleSaved &&
      authorSaved &&
      dateSaved &&
      descSaved &&
      subjectSaved &&
      contentSaved &&
      picSaved
    ) {
      setPublication({
        author: author,
        title: title,
        date: date,
        subject: subject.subject,
        slug: subject.slug,
        cardDescription: desc,
        publicationContent: content,
        picture: pic,
        accent: subject.accentColor,
      });

      setAuthorSaved(false);
      setTitleSaved(false);
      setSubjectSaved(false);
      setDateSaved(false);
      setDescSaved(false);
      setPicSaved(false);
      setAuthor("");
      setTitle("");
      setSubject(subjects[0]);
      setDate("");
      setDesc("");
      setContent("");
      setPic("");

      setPublicationSubmitted(true);
    }
  };

  const handleSubmitEdit = () => {
    if (
      titleSaved &&
      authorSaved &&
      dateSaved &&
      descSaved &&
      subjectSaved &&
      contentSaved &&
      picSaved
    ) {
      setPublication({
        _id: publication._id,
        author: author,
        title: title,
        date: date,
        subject: subject.subject,
        slug: subject.slug,
        cardDescription: desc,
        publicationContent: content,
        picture: pic,
        accent: subject.accentColor,
      });
      setAuthorSaved(false);
      setTitleSaved(false);
      setSubjectSaved(false);
      setDateSaved(false);
      setDescSaved(false);
      setPicSaved(false);
      setAuthor("");
      setTitle("");
      setSubject(
        subjects[subjects.findIndex((s) => s.slug === publication.slug)]
      );
      setDate("");
      setDesc("");
      setContent("");
      setPic("");
      setPublicationEdited(true);
      setEditedPublicationID(publication._id);
    }
  };
  return (
    <>
      <div className="relative grid grid-cols-[30%_70%] w-[90%] h-[75%] m-[5%] overflow-y-scroll  scrollbar-none bg-primary inner-shadow ">
        <div className="w-full h-full grid grid-rows-[14%_14%_14%_14%_14%_15%] border">
          <PubPropsInput
            label={"Title"}
            id={"title"}
            placeholder={"Title..."}
            valueSaved={titleSaved}
            setValue={(title) => setTitle(title)}
            value={title}
            setValueSaved={(saved) => setTitleSaved(saved)}
          />
          <PubPropsInput
            label={"Author"}
            id={"author"}
            placeholder={"Author..."}
            valueSaved={authorSaved}
            setValue={(author) => setAuthor(author)}
            value={author}
            setValueSaved={(saved) => setAuthorSaved(saved)}
          />
          <PubPropsInput
            label={"Date"}
            id={"date"}
            placeholder={"Date..."}
            valueSaved={dateSaved}
            setValue={(date) => setDate(date)}
            value={date}
            setValueSaved={(saved) => setDateSaved(saved)}
          />
          <SelectInput
            label={"subject"}
            id={"subject"}
            placeholder={"Subject..."}
            valueSaved={subjectSaved}
            setValue={(subject) => setSubject(subject)}
            value={subject}
            setValueSaved={(saved) => setSubjectSaved(saved)}
          />
          <PubPropsInput
            label={"Description"}
            id={"desc"}
            placeholder={"Card Description..."}
            valueSaved={descSaved}
            setValue={(desc) => setDesc(desc)}
            value={desc}
            setValueSaved={(saved) => setDescSaved(saved)}
          />
          <PubPropsInput
            label={"Picture URL"}
            id={"pic"}
            placeholder={"Picture URL..."}
            valueSaved={picSaved}
            setValue={(pic) => setPic(pic)}
            value={pic}
            setValueSaved={(saved) => setPicSaved(saved)}
          />
          <button
            disabled={false}
            onClick={() => {
              if (editMode) {
                handleSubmitEdit();
              } else {
                handleSubmitPublish();
              }
            }}
            className={
              submitStyling()
                ? "text-secondary text-[30pt] font-primary bg-redAccent"
                : "text-secondary text-[30pt] font-primary bg-greyAccent"
            }
          >
            PUBLISH
          </button>
        </div>
        <div className="grid grid-rows-[90%_10%]  w-full h-full overflow-y-scroll scrollbar-none border">
          <PubContentTextEditor
            editMode={editMode}
            value={content}
            placeholder={"Publication content goes here..."}
            setValue={(c) => setContent(c)}
            valueSaved={contentSaved}
            setValueSaved={(b) => setContentSaved(b)}
          />
        </div>
      </div>
    </>
  );
};

export default PublishPublication;

/*
Previous implementation of sections etc...

<div className=" w-full h-full ml-[10%] my-[10%] py-[2%]">
            <div className="w-[80px] h-[80px] absolute top-0 right-0 border">
              <button
                onClick={() => {
                  setSections([
                    ...sections,
                    {
                      sectionPlace: sections.length + 1,
                      sectionTitle: "",
                      sectionText: "",
                      titleSaved: false,
                      contentSaved: false,
                    },
                  ]);
                }}
                className="grid place-items-center w-full h-full text-white"
              >
                <div className="bg-greenAccent p-2 rounded-full">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </button>
            </div>
            <Sections
              sections={sections}
              setSections={(sect) => setSections(sect)}
            />
          </div>


*/
