import {
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import OfficerCard from "./OfficerCard";

export interface Officer {
  _id: string;
  position: string;
  fname: string;
  lname: string;
  bio: string;
  picture: string;
  color: string;
}

interface Props {
  cards: Officer[];
}

const Carousel = ({ cards }: Props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  console.log(cards);
  return (
    <>
      <div ref={targetRef} className="w-full h-[300vh] bg-primary">
        <div className="sticky top-0 flex w-full   h-screen items-center  overflow-x-hidden  ">
          <motion.div style={{ x }} className="flex gap-[50px]">
            {cards.map((card) => {
              return (
                <OfficerCard
                  position={card.position}
                  fname={card.fname}
                  lname={card.lname}
                  bio={card.bio}
                  picture={card.picture}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
