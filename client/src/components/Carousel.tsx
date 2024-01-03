import { twMerge } from "tailwind-merge";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

interface Card {
  title: string;
  background: string;
}

const Carousel = () => {
  const cards: Card[] = [
    { title: "title 1", background: "bg-red-400" },
    { title: "title 2", background: "bg-purple-400" },
    { title: "title 3", background: "bg-blue-400" },
    { title: "title 4", background: "bg-green-400" },
    { title: "title 4", background: "bg-yellow-400" },
    { title: "title 4", background: "bg-orange-400" },
    { title: "title 4", background: "bg-pink-400" },
    { title: "title 4", background: "bg-yellow-400" },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <>
      <div className="w-full h-[100px] bg-gray-400"></div>
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center  overflow-x-hidden  ">
          <motion.div style={{ x }} className="flex gap-[50px]">
            {cards.map((card) => {
              return (
                <div
                  className={twMerge(
                    "flex-none w-[400px] h-[400px]",
                    card.background
                  )}
                ></div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <div className="w-full h-[100px] bg-gray-400"></div>
    </>
  );
};

export default Carousel;
