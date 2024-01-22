import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../../api/axios";
import { Testimonial } from "../../../utils/managementInterfaces";
import { useEffect, useState } from "react";
import {  motion, useAnimate } from "framer-motion";

const TestimonialSection = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial>();
  const [index, setIndex] = useState(0);
  const fetchTestimonials = async () => {
    const controller = new AbortController();

    await axios
      .get<Testimonial[]>("/testimonials", { signal: controller.signal })
      .then((res) => {
        setTestimonials([...res.data]);
        console.log(res.data);
        setCurrentTestimonial(res.data[0]);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleLeftClick = async () => {
    animate("#quote", { x: "-75%", opacity: 0 });
    await animate("#picture", { x: "-75%", opacity: 0 });
    await setIndex((prev) => {
      setCurrentTestimonial(testimonials[prev - 1]);
      return prev - 1;
    });
    animate("#quote", { x: "200%", opacity: 0 });
    await animate("#picture", { x: "200%", opacity: 0 });
    animate("#quote", { x: 0, opacity: 1 });
    await animate("#picture", { x: 0, opacity: 1 });
  };

  const handleRightClick = async () => {
    animate("#quote", { x: "200%", opacity: 0 });
    await animate("#picture", { x: "200%", opacity: 0 });
    await setIndex((prev) => {
      setCurrentTestimonial(testimonials[prev + 1]);
      return prev + 1;
    });
     animate("#quote", { x: "-75%", opacity: 0 }, { duration: 0 });
     await animate("#picture", { x: "-75%", opacity: 0 }, { duration: 0 });
     animate("#quote", { x: 0, opacity: 1 });
     await animate("#picture", { x: 0, opacity: 1 });
  };

   const handleLeftClickMobile = async () => {
     animate2("#quote", { y: "-75%", opacity: 0 });
     await animate2("#picture", { y: "-75%", opacity: 0 });
     await setIndex((prev) => {
       setCurrentTestimonial(testimonials[prev - 1]);
       return prev - 1;
     });
     animate2("#quote", { y: "200%", opacity: 0 });
     await animate2("#picture", { y: "200%", opacity: 0 });
     animate2("#quote", { y: 0, opacity: 1 });
     await animate2("#picture", { y: 0, opacity: 1 });
   };

   const handleRightClickMobile = async () => {
     animate2("#quote", { y: "200%", opacity: 0 });
     await animate2("#picture", { y: "200%", opacity: 0 });
     await setIndex((prev) => {
       setCurrentTestimonial(testimonials[prev + 1]);
       return prev + 1;
     });
     animate2("#quote", { y: "-75%", opacity: 0 }, { duration: 0 });
     await animate2("#picture", { y: "-75%", opacity: 0 }, { duration: 0 });
     animate2("#quote", { y: 0, opacity: 1 });
     await animate2("#picture", { y: 0, opacity: 1 });
   };

  return (
    <>
      <div className="relative w-[90%] h-[80%] bg-redAccent left-[5%] top-[-40%] rounded-[21px] xs:grid lg:hidden place-items-center">
       <div className="w-full h-full grid grid-rows-[10%_80%_10%] overflow-hidden">
          {testimonials && index > 0 ? (
            <div
              onClick={handleLeftClickMobile}
              className="grid place-items-center text-secondary text-[30pt] rotate-90"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          ) : (
            <div></div>
          )}
          <div
            ref={scope2}
            className="grid grid-rows-[60%_40%] place-items-center"
          >
            {currentTestimonial ? (
              <motion.img
                id={"picture"}
                initial={{ x: -550, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -550, opacity: 0 }}
                className="md:w-[500px] sm:w-[400px] xs:w-[300px] h-auto border-[20px] rounded-lg shadow-2xl border-secondary"
                src={currentTestimonial.pictureURL}
              ></motion.img>
            ) : (
              <div></div>
            )}

            {currentTestimonial ? (
              <motion.div
                id={"quote"}
                className="relative bottom-0 w-full h-full grid place-items-center text-secondary  font-primary"
              >
                <p className="xs:text-[15pt] sm:text-[25pt] md:text-[30pt] w-[80%]">
                  "{currentTestimonial.quote}" -{" "}
                  <em>{currentTestimonial.author}</em>
                </p>
              </motion.div>
            ) : (
              <div></div>
            )}
          </div>
          {testimonials && index + 1 < testimonials.length ? (
            <div
              onClick={handleRightClickMobile}
              className="grid place-items-center text-secondary text-[30pt] rotate-90"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div
        className={
          "relative w-[90%] h-[80%] bg-redAccent left-[5%] top-[-40%] rounded-[21px] xs:hidden lg:grid place-items-center"
        }
      >
        <div className="w-full h-full grid grid-cols-[10%_80%_10%] overflow-hidden">
          {testimonials && index > 0 ? (
            <div
              onClick={handleLeftClick}
              className="grid place-items-center text-secondary text-[30pt]"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          ) : (
            <div></div>
          )}
          <div
            ref={scope}
            className="grid grid-cols-[40%_60%] place-items-center"
          >
            {currentTestimonial ? (
              <motion.img
                id={"picture"}
                initial={{ x: -550, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -550, opacity: 0 }}
                className="w-[100%] h-auto border-[20px] rounded-lg shadow-2xl border-secondary"
                src={currentTestimonial.pictureURL}
              ></motion.img>
            ) : (
              <div></div>
            )}

            {currentTestimonial ? (
              <motion.div
                id={"quote"}
                className="w-full h-full grid place-items-center text-secondary  font-primary"
              >
                <p className="text-[35pt] w-[80%]">
                  "{currentTestimonial.quote}" -{" "}
                  <em>{currentTestimonial.author}</em>
                </p>
              </motion.div>
            ) : (
              <div></div>
            )}
          </div>
          {testimonials && index + 1 < testimonials.length ? (
            <div
              onClick={handleRightClick}
              className="grid place-items-center text-secondary text-[30pt]"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
