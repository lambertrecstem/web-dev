import enlargedLogo from "../../../assets/logoEnlarged.png";

const IntroSection = () => {
  return (
    <>
      {/* Smaller Devices */}
      <div className="relative lg:hidden w-full h-[125%] bg-primary min-h-[1000px]   overflow-hidden">
        <div className="absolute ml-[5%] mt-[20%] w-[80%] h-[40%] grid grid-rows-[55%_15%_20%] z-10">
          <div className="text-[60pt] text-secondary font-primary">
            <p className="">Lambert</p>
            <p>recSTEM</p>
          </div>
          <div className="text-greyAccent font-primarySub font-light text-[20pt] w-[360px]">
            <p>
              <em>Providing STEM to all. One Step at a time</em>
            </p>
          </div>
          <div className=" self-center mt-[3rem] w-[200px] h-[2rem] grid gap-3 grid-cols-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.google.com/");
              }}
              className="  font-primary w-full h-full  text-white    shadow-lg shadow-black rounded-full transition-all duration-1000
                bg-gradient-to-l from-buttonRedGradientTo via-redAccent to-redAccent
                bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Learn
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.google.com/");
              }}
              className="  font-primary w-full h-full  text-white    shadow-lg shadow-black rounded-full transition-all duration-1000
                bg-gradient-to-l from-buttonRedGradientTo via-redAccent to-redAccent
                bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Learn
            </button>
          </div>
        </div>
        <div className=" absolute w-[350px] h-[350px] xs:top-[30%] xs:right-[-25%] sm:top-[5%] sm:right-[-30%] sm:w-[700px] sm:h-[700px] z-0">
          <img src={enlargedLogo} alt="" />
        </div>
      </div>
      {/* Larger Devices */}

      <div className="w-full h-[120%] bg-primary place-items-start justify-center xs:hidden lg:grid min-h-[912px] ">
        <div className="my-[3rem]  mx-[10rem]  flex flex-col content-center text-secondary text-center  ">
          <p className="xl:text-[20pt] lg:text-[16pt]  font-primary ">
            LAMBERT HIGHSCHOOL RECSTEM
          </p>
          <p className="xl:text-[55pt] lg:text-[45pt] font-primary">
            Fostering A Career In STEM
          </p>
          <p className="xl:text-[55pt] lg:text-[45pt] font-primary">
            By Making It Accessible To All
          </p>
          <p className="mt-4 xl:text-[20pt] lg:text-[12pt] font-primary text-greyAccent ">
            We have something for any students interested in STEM, whether it be
            artificial intelligence or astrophysics research. Join a community
            where your curiousity blossoms
          </p>
          <div className=" self-center mt-[3rem] w-[260px] h-[3rem] grid gap-6 grid-cols-2 ">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.google.com/");
              }}
              className="  font-primary w-full h-full  text-white    shadow-lg shadow-black rounded-full transition-all duration-1000
                bg-gradient-to-l from-buttonRedGradientTo via-redAccent to-redAccent
                bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Learn
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.google.com/");
              }}
              className="  font-primary w-full h-full  text-white    shadow-lg shadow-black rounded-full transition-all duration-1000
                bg-gradient-to-l from-buttonRedGradientTo via-redAccent to-redAccent
                bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Learn
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
