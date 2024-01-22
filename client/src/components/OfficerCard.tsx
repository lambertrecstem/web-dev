import { motion, useAnimation } from "framer-motion";

interface Props {
  position: string;
  fname: string;
  lname: string;
  bio: string;
  picture: string;
}

const OfficerCard = ({ position, fname, lname, bio, picture }: Props) => {
  const controls = useAnimation();
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer w-[500px] h-[500px]"
      onMouseEnter={() => controls.start({ opacity: 1, y: -100 })}
      onMouseLeave={() => controls.start({ opacity: 0, y: 0 })}
    >
      <div className="image-container">
        <img src={picture} alt={fname} className="w-full h-48 object-cover" />
      </div>
      <div className="info px-6 py-4">
        <div className="name text-xl font-semibold">{fname + " " + lname}</div>
        <p className="role text-gray-700 text-base">{position}</p>
      </div>
      <motion.div
        className="description px-6 py-4 bg-redAccent w-full h-full text-secondary"
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
