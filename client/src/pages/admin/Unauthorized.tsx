const Unauthorized = () => {
  return (
    <div className="w-full h-[75%] bg-primary grid place-items-center p-[5%]">
      <div className="bg-secondary p-[4%] grid grid-rows-[90%_10%]">
        <p className="text-redAccent text-[50pt] font-primary text-center">
          YOU ARE NOT AUTHORIZED TO VIEW THIS PAGE
        </p>
        <p className="text-redAccent text-[13pt] font-primary text-center">
          We hope you are not trying to do something you are not allowed to
          do...
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
