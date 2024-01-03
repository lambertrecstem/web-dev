import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import OfficerDataContext from "../context/OfficerDataProvider";

interface Props {
  position: string;
  fname: string;
  lname: string;
  bio: string;
  picture: string;
  id: string;
}

const OfficerCard = ({ position, fname, lname, bio, picture, id }: Props) => {
  const controls = useAnimation();
  const {
    setPage,
    setPosition,
    setFname,
    setLname,
    setPicture,
    setBio,
    setEditMode,
    setEditID,
    color,
    setColor,
    deleteOfficer,
    fetchOfficers,
  } = useContext(OfficerDataContext);
  return (
    <motion.div
      className="m-[5%] relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer w-[400px] h-[400px]"
      onMouseEnter={() => controls.start({ opacity: 1, y: -100 })}
      onMouseLeave={() => controls.start({ opacity: 0, y: 0 })}
    >
      <div className="absolute top-0 left-0">
        <button
          onClick={() => {
            setEditMode(true);

            setFname(fname);
            setPosition(position);
            setLname(lname);
            setBio(bio);
            setPicture(picture);
            setColor(color.selectColor);
            setEditID(id);
            setPage("add");
          }}
          className="z-20 bg-secondary border-black border-[5px] font-Primary px-3 py-1 rounded-lg  duration-500 transition-all hover:border-secondary hover:bg-black hover:text-secondary"
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteOfficer(id);
            fetchOfficers();
          }}
          className="z-20 bg-secondary border-black border-[5px] font-Primary px-3 py-1 rounded-lg  duration-500 transition-all hover:border-secondary hover:bg-black hover:text-secondary"
        >
          Delete
        </button>
      </div>
      <div className="image-container">
        <img src={picture} alt={fname} className="w-full h-48 object-cover" />
      </div>
      <div className="info px-6 py-4">
        <div className="name text-xl font-semibold">{fname + " " + lname}</div>
        <p className="role text-gray-700 text-base">{position}</p>
      </div>
      <motion.div
        className="description px-6 py-4 bg-redAccent w-full h-full text-secondary overflow-scroll scrollbar-none"
        initial={{ opacity: 0, y: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        {bio}
      </motion.div>
    </motion.div>
  );
};

export default OfficerCard;
