import { NavLink } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      {/* Smaller Devices */}
      <>
        <div className="absolute xs:grid lg:hidden w-full h-[75%] bg-secondary"></div>
        <div className="xs:grid lg:hidden w-full h-[100%] bg-secondary  grid-cols-[70%_30%]">
          <div className="relative  h-[70%] grid grid-rows-[15%_60%_25%] text-primary ml-[20%] ">
            <div className=" ">
              <p className="font-primary text-[30pt]">about us</p>
            </div>
            <p className="  overflow-scroll max-w-full max-h-full font-secondary text-[15pt]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              labore dolor reiciendis velit magni corrupti fugiat rerum dolorem
              asperiores voluptatum libero perspiciatis odio perferendis vero
              neque temporibus, eius ipsum unde dolorum? Eos deserunt molestiae,
              quaerat ullam, reiciendis quod soluta consequatur quisquam
              praesentium ex nobis. Vel laudantium repellendus natus veritatis
              molestias!
            </p>

            <NavLink
              to={"/officers"}
              className="relative w-full h-full self-end  text-center"
            >
              <p className="absolute left-0 bottom-0 p-4 text-secondary font-light font-primarySub text-[14pt]  bg-redAccent  duration-500 hover:bg-secondary hover:text-redAccent hover:border-2 hover:border-redAccent">
                Meet the Officers
              </p>
            </NavLink>
          </div>
          <div className="relative h-[70%] w-[60%] bg-greyAccent left-[40%]  "></div>
        </div>
      </>
      {/* Larger Devices */}
      <>
        <div className="absolute xs:hidden lg:grid w-full h-[55%] max-h-[500px] bg-secondary"></div>
        <div className="xs:hidden lg:grid w-full h-[100%] min-h-[816px] bg-secondary  grid-cols-2">
          <div className="relative top-0 h-[70%] w-[70%] bg-greyAccent grid place-items-center "></div>
          <div className="relative h-[70%] grid grid-rows-[25%_50%_25%] text-primary mr-[20%] ">
            <div className=" ">
              <p className="font-primary text-[70pt]">about us</p>
            </div>
            <p className="  overflow-y-scroll max-w-full max-h-full font-secondary text-[30pt]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              labore dolor reiciendis velit magni corrupti fugiat rerum dolorem
              asperiores voluptatum libero perspiciatis odio perferendis vero
              neque temporibus, eius ipsum unde dolorum? Eos deserunt molestiae,
              quaerat ullam, reiciendis quod soluta consequatur quisquam
              praesentium ex nobis. Vel laudantium repellendus natus veritatis
              molestias!
            </p>
            <div className="absolute self-end text-nowrap bottom-14 ">
              <NavLink
                to={"/officers"}
                className="mt-[5%] text-secondary font-light font-primarySub text-[24pt] px-[16%] py-[6%] bg-redAccent duration-500 hover:bg-secondary hover:text-redAccent hover:border-2 hover:border-redAccent"
              >
                MEET THE OFFICERS
              </NavLink>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AboutSection;
