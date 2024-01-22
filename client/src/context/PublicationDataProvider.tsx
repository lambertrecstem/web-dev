import { useState, useEffect, createContext, ReactNode } from "react";
import { Publication, Subject, subjects } from "../utils/managementInterfaces";
import axios from "../api/axios";
import { axiosPrivate } from "../api/axios";

const PublicationDataContext = createContext<any>({});

interface Props {
  children: ReactNode;
}

export const PublicationDataProvider = ({ children }: Props) => {
  const [page, setPage] = useState<string>("review");
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState<Subject>(subjects[0]);
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState<string>("");
  const [pic, setPic] = useState<string>("");
  const [titleSaved, setTitleSaved] = useState(false);
  const [authorSaved, setAuthorSaved] = useState(false);
  const [dateSaved, setDateSaved] = useState(false);
  const [subjectSaved, setSubjectSaved] = useState(false);
  const [contentSaved, setContentSaved] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [descSaved, setDescSaved] = useState(false);
  const [picSaved, setPicSaved] = useState(false);
  const [publication, setPublication] = useState<Publication | null>();
  const [publicationSubmitted, setPublicationSubmitted] = useState(false);
  const [publicationEdited, setPublicationEdited] = useState(false);
  const [editedPublicationID, setEditedPublicationID] = useState<string>();
  const [deletePublicationID, setDeletePublicationID] = useState<string>();

  useEffect(() => {
    fetchPublications();
  }, [page]);
  useEffect(() => {
    addPublication();
  }, [publicationSubmitted]);
  useEffect(() => {
    editPublications();
  }, [publicationEdited]);
  useEffect(() => {
    deletePublications();
  }, [deletePublicationID]);

  const fetchPublications = async () => {
    const controller = new AbortController();

    await axios
      .get<Publication[]>("/publications", { signal: controller.signal })
      .then((res) => {
        setPublications([...res.data]);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  const editPublications = async () => {
    const controller = new AbortController();

    await axiosPrivate
      .patch<Publication>("/publications/" + editedPublicationID, publication, {
        signal: controller.signal,
      })
      .then((res: any) => {
        console.log(res);
        setEditMode(false);
        setPublicationEdited(false);

        fetchPublications();
      })
      .catch((err: any) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  const addPublication = async () => {
    if (publication) {
      await axiosPrivate
        .post("/publications", publication)
        .then(() => {
          setPublicationSubmitted(false);
          setPublication(null);
        })
        .catch((err) => console.log(err));
    }
  };

  const deletePublications = async () => {
    const controller = new AbortController();

    await axiosPrivate
      .delete<Publication[]>("/publications/" + deletePublicationID, {
        signal: controller.signal,
      })
      .then((res) => {
        res.data;

        fetchPublications();
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  return (
    <PublicationDataContext.Provider
      value={{
        page,
        setPage,
        publications,
        setPublications,
        filter,
        setFilter,
        title,
        setTitle,
        author,
        setAuthor,
        date,
        setDate,
        subject,
        setSubject,
        desc,
        setDesc,
        titleSaved,
        setTitleSaved,
        authorSaved,
        setAuthorSaved,
        dateSaved,
        setDateSaved,
        subjectSaved,
        setSubjectSaved,
        descSaved,
        setDescSaved,
        publication,
        setPublication,
        publicationSubmitted,
        setPublicationSubmitted,
        editMode,
        setEditMode,
        publicationEdited,
        setPublicationEdited,
        setEditedPublicationID,
        editedPublicationID,
        editPublications,
        deletePublicationID,
        setDeletePublicationID,
        deletePublications,
        contentSaved,
        setContentSaved,
        content,
        setContent,
        pic,
        setPic,
        picSaved,
        setPicSaved,
        fetchPublications,
      }}
    >
      {children}
    </PublicationDataContext.Provider>
  );
};

export default PublicationDataContext;
