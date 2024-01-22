import { useState, useEffect, createContext, ReactNode } from "react";
import { Competition, Publication, Subject, subjectsComp } from "../utils/managementInterfaces";
import axios from "../api/axios";
import { axiosPrivate } from "../api/axios";

const CompetitionDataContext = createContext<any>({});

interface Props {
  children: ReactNode;
}

export const CompetitionDataProvider = ({ children }: Props) => {
  const [page, setPage] = useState<string>("review");
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [title, setTitle] = useState("");
  const [redirectURL, setRedirectURL] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState<Subject>(subjectsComp[0]);
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState<string>("");
  const [pic, setPic] = useState<string>("");
  const [type, setType] = useState<string>("external");
  const [saved, setSaved] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [competition, setCompetition] = useState<Competition | null>();
  const [competitionSubmitted, setCompetitionSubmitted] = useState(false);
  const [competitionEdited, setCompetitionEdited] = useState(false);
  const [editedCompetitionID, setEditedCompetitionID] = useState<string>();
  const [deleteCompetitionID, setDeleteCompetitionID] = useState<string>();

  useEffect(() => {
    fetchCompetitions();
  }, [page]);
  useEffect(() => {
    addCompetition();
  }, [competitionSubmitted]);
  useEffect(() => {
    editCompetitions();
  }, [competitionEdited]);
  useEffect(() => {
    deleteCompetitions();
  }, [deleteCompetitionID]);

  const fetchCompetitions = async () => {
    const controller = new AbortController();

    await axios
      .get<Competition[]>("/competitions", { signal: controller.signal })
      .then((res) => {
        setCompetitions([...res.data]);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  const editCompetitions = async () => {
    const controller = new AbortController();

    await axiosPrivate
      .patch<Publication>("/competitions/" + editedCompetitionID, competition, {
        signal: controller.signal,
      })
      .then((res: any) => {
        console.log(res);
        setEditMode(false);
        setCompetitionEdited(false);

        fetchCompetitions();
      })
      .catch((err: any) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  const addCompetition = async () => {
    if (competition) {
      await axiosPrivate
        .post("/competitions", competition)
        .then(() => {
          setCompetitionSubmitted(false);
          setCompetition(null);
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteCompetitions = async () => {
    const controller = new AbortController();

    await axiosPrivate
      .delete<Publication[]>("/competitions/" + deleteCompetitionID, {
        signal: controller.signal,
      })
      .then((res) => {
        res.data;

        fetchCompetitions();
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  return (
    <CompetitionDataContext.Provider
      value={{
        page,
        setPage,
        competitions,
        setCompetitions,
        filter,
        setFilter,
        title,
        setTitle,
        redirectURL,
        setRedirectURL,
        date,
        setDate,
        subject,
        setSubject,
        desc,
        setDesc,
        setCompetition,
        competitionSubmitted,
        setCompetitionSubmitted,
        setCompetitionEdited,
        editCompetitions,
        deleteCompetitions,
        content,
        setContent,
        pic,
        setPic,
        fetchCompetitions,
        saved,
        setSaved,
        editMode,
        setEditMode,
        editedCompetitionID,
        setEditedCompetitionID,
        deleteCompetitionID,
        setDeleteCompetitionID,
        competitionEdited,
        type,
        setType,
      }}
    >
      {children}
    </CompetitionDataContext.Provider>
  );
};

export default CompetitionDataContext;
