import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  to: string;
}

const ExploreCard = ({ title, description, to }: Props) => {
  return (
    <div className="grid grid-rows-[20%_50%_30%] w-[90%] h-full border-[10px] border-black rounded-[23px] p-4 place-items-center">
      <p className="text-center xs:text-[32pt] 2xl:text-[42pt] xl:text-[36pt] lg:text-[28pt] text-secondary font-primary">
        {title}
      </p>
      <p className="mt-[5%] text-center 2xl:text-[26px] xl:text-[20pt] lg:text-[14pt] text-secondary font-secondary">
        {description}
      </p>

      <NavLink
        to={to}
        className=" w-[80%] h-[50%] grid place-items-center   text-center  text-primary font-primary text-[20pt] self-center  bg-secondary rounded-[12px] duration-500 transition-all  hover:border-2 hover:border-secondary hover:bg-primary hover:text-secondary"
      >
        <p className="">Learn more</p>
      </NavLink>
    </div>
  );
};

export default ExploreCard;
