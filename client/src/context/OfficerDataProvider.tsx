import { createContext, useEffect, useState } from "react";
import { Officer } from "../components/OfficerCarousel";
import { axiosPrivate } from "../api/axios";

const OfficerDataContext = createContext<any>({});

export const OfficerDataProvider = ({ children }: any) => {
  const [page, setPage] = useState("review");
  const [allOfficers, setAllOfficers] = useState<Officer[]>([]);
  const [position, setPosition] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [color, setColor] = useState<string>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [officer, setOfficer] = useState<Officer>();
  const [newSubmission, setNewSubmission] = useState<boolean>(false);
  const [deleteID, setDeleteID] = useState<string>("");
  const [editID, setEditID] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [positionSaved, setPositionSaved] = useState<boolean>(false);
  const [fnameSaved, setFnameSaved] = useState<boolean>(false);
  const [lnameSaved, setLnameSaved] = useState<boolean>(false);
  const [pictureSaved, setPictureSaved] = useState<boolean>(false);
  const [bioSaved, setBioSaved] = useState<boolean>(false);
  const [colorSaved, setColorSaved] = useState<boolean>(false);

  useEffect(() => {
    fetchOfficers();
  }, [page]);

  const fetchOfficers = async () => {
    await axiosPrivate
      .get("/officer")
      .then((res) => {
        console.log(res.data);
        setAllOfficers([...res.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteOfficer = async (id: string) => {
    await axiosPrivate
      .delete("/officer/" + id)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  const editOfficer = async (officer: Officer, id: string) => {
    await axiosPrivate
      .patch("/officer/" + id, officer)
      .then(({ data }) => {
        console.log(data);
        setEditMode(false);
      })
      .catch((err) => console.log(err));
  };

  const addOfficer = async (officer: Officer) => {
    await axiosPrivate
      .post("/officer", officer)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <OfficerDataContext.Provider
      value={{
        page,
        setPage,
        allOfficers,
        setAllOfficers,
        position,
        setPosition,
        fname,
        setFname,
        lname,
        setLname,
        picture,
        setPicture,
        bio,
        setBio,
        editMode,
        setEditMode,
        officer,
        setOfficer,
        deleteID,
        setDeleteID,
        editID,
        setEditID,
        newSubmission,
        setNewSubmission,
        filter,
        setFilter,
        positionSaved,
        setPositionSaved,
        fnameSaved,
        setFnameSaved,
        lnameSaved,
        setLnameSaved,
        pictureSaved,
        setPictureSaved,
        bioSaved,
        setBioSaved,
        color,
        setColor,
        colorSaved,
        setColorSaved,
        addOfficer,
        editOfficer,
        deleteOfficer,
        fetchOfficers,
      }}
    >
      {children}
    </OfficerDataContext.Provider>
  );
};

export default OfficerDataContext;
