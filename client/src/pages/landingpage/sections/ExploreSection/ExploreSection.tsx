import ExploreCard from "./ExploreCard";

const  ExploreSection = () => {
  return (
    <div className="grid xs:h-[180%]  p-[5%] w-full xl:h-[125%] lg:h-[110%] lg:min-h-[973px] xs:min-h-[1500px] bg-primary overflow-hidden  ">
      <div className="relative  top-[7.5%] grid grid-rows-[10%_60%] place-items-center">
        <div className="h-auto w-[100%] mb-[2%]">
          <p className="m-[2%] text-[40pt] text-secondary font-primary">
            explore
          </p>
        </div>
        <div className=" grid lg:grid-cols-[33.3%_33.3%_33.3%] lg:grid-rows-[100%] xs:grid-rows-[33%_33%_33%] xs:grid-cols-[100%] gap-5 h-full w-full place-items-center">
          <ExploreCard
            title={"Competitions"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatum, earum dicta nobis facilis laudantium, reiciendis"
            }
            to="/competitions"
          />
          <ExploreCard
            title={"Events"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatum, earum dicta nobis facilis laudantium, reiciendis"
            }
            to="/events"
          />
          <ExploreCard
            title={"Publications"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatum, earum dicta nobis facilis laudantium, reiciendis"
            }
            to="/publications"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
