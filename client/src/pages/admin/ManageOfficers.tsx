import { useContext } from "react";
import OfficerDataContext from "../../context/OfficerDataProvider";
import ReviewOfficers from "../../components/ReviewOfficers";
import PropsInputField from "../../components/PropsInputField";
import OfficerSelectInput from "../../components/OfficerSelectInput";

const ManageOfficers = () => {
  const {
    page,
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
    editID,
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
  } = useContext(OfficerDataContext);

  const handleEdit = () => {
    if (
      positionSaved &&
      fnameSaved &&
      lnameSaved &&
      bioSaved &&
      pictureSaved &&
      colorSaved
    ) {
      setPosition("");
      setFname("");
      setLname("");
      setBio("");
      setPicture("");

      setPositionSaved(false);
      setFnameSaved(false);
      setLnameSaved(false);
      setBioSaved(false);
      setPictureSaved(false);
      setColorSaved(false);

      let { styleColor } = color;

      let officer = {
        _id: editID,
        position: position,
        fname: fname,
        lname: lname,
        bio: bio,
        picture: picture,
        color: styleColor,
      };

      editOfficer(officer, officer._id);
    }
  };

  const handleAdd = () => {
    if (
      positionSaved &&
      fnameSaved &&
      lnameSaved &&
      bioSaved &&
      pictureSaved &&
      colorSaved
    ) {
      setPosition("");
      setFname("");
      setLname("");
      setBio("");
      setPicture("");
      setColor({ styleColor: "None", selectColor: "none" });

      setPositionSaved(false);
      setFnameSaved(false);
      setLnameSaved(false);
      setBioSaved(false);
      setPictureSaved(false);
      setColorSaved(false);

      let { styleColor } = color;

      let officer = {
        position: position,
        fname: fname,
        lname: lname,
        bio: bio,
        picture: picture,
        color: styleColor,
      };

      addOfficer(officer);
    }
  };

  const submitStyling = () => {
    if (
      positionSaved &&
      fnameSaved &&
      lnameSaved &&
      bioSaved &&
      pictureSaved &&
      colorSaved
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="w-full h-full border-2 border-secondary grid place-items-center">
      <div className="border-2 border-secondary w-[80%] h-[80%] grid grid-rows-[10%_10%_80%] overflow-y-scroll  scrollbar-none ">
        <NavBar />
        <ReviewOfficers />
        {page === "add" ? (
          <>
            <button
              onClick={() => {
                if (editMode) handleEdit();
                else handleAdd();
              }}
              className={
                submitStyling()
                  ? "text-secondary text-[30pt] font-primary bg-redAccent"
                  : "text-secondary text-[30pt] font-primary bg-greyAccent"
              }
            >
              {editMode
                ? `Edit ${fname}'s Officer Details`
                : "Assign a new Officer"}
            </button>
            <div className="grid ">
              <PropsInputField
                label={"Position"}
                id={"position"}
                placeholder={"Position..."}
                setValue={(p) => setPosition(p)}
                value={position}
                valueSaved={positionSaved}
                setValueSaved={(s) => setPositionSaved(s)}
              />
              <PropsInputField
                label={"First Name"}
                id={"fname"}
                placeholder={"First name..."}
                setValue={(p) => setFname(p)}
                value={fname}
                valueSaved={fnameSaved}
                setValueSaved={(s) => setFnameSaved(s)}
              />
              <PropsInputField
                label={"Last name"}
                id={"lname"}
                placeholder={"Last name..."}
                setValue={(p) => setLname(p)}
                value={lname}
                valueSaved={lnameSaved}
                setValueSaved={(s) => setLnameSaved(s)}
              />
              <PropsInputField
                label={"Bio"}
                id={"bio"}
                placeholder={"Bio..."}
                setValue={(p) => setBio(p)}
                value={bio}
                valueSaved={bioSaved}
                setValueSaved={(s) => setBioSaved(s)}
              />
              <PropsInputField
                label={"Picture URL"}
                id={"picture"}
                placeholder={"Picture URL make sure its a url..."}
                setValue={(p) => setPicture(p)}
                value={picture}
                valueSaved={pictureSaved}
                setValueSaved={(s) => setPictureSaved(s)}
              />
              <OfficerSelectInput />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

const NavBar = () => {
  const { setPage } = useContext(OfficerDataContext);
  return (
    <div className="w-full h-full border-2 grid grid-cols-[50%_50%]">
      <div className="border-2 grid place-items-center">
        <button
          onClick={() => setPage("review")}
          className="w-[80%] h-[80%] bg-redAccent text-secondary "
        >
          Review
        </button>
      </div>
      <div className="border-2 grid place-items-center">
        {" "}
        <button
          onClick={() => setPage("add")}
          className="w-[80%] h-[80%] bg-redAccent text-secondary "
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ManageOfficers;
