

const TestimonialSection = () => {
  return (
    <>
      <div className="relative w-[90%] h-[80%] bg-redAccent left-[5%] top-[-40%] rounded-[21px] xs:grid lg:hidden place-items-center">
        <div className="text-[50pt] font-primary text-secondary text-center">
          Coming soon...
        </div>
      </div>

      <div className={"relative w-[90%] h-[80%] bg-redAccent left-[5%] top-[-40%] rounded-[21px] xs:hidden lg:grid place-items-center"}>
        <div className="text-[50pt] font-primary text-secondary text-center ">
          Coming soon...
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
