import { faCheck, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import OfficerDataContext from "../context/OfficerDataProvider";

export interface SelectColor {
  styleColor: string;
  selectColor: string;
}

const OfficerSelectInput = () => {
  const { color, setColor, colorSaved, setColorSaved } =
    useContext(OfficerDataContext);
  const colors: SelectColor[] = [
    { styleColor: "None", selectColor: "none" },
    { styleColor: "redAccent", selectColor: "red" },
    { styleColor: "greenAccent", selectColor: "green" },
    { styleColor: "yellowAccent", selectColor: "yellow" },
    { styleColor: "orangeAccent", selectColor: "orange" },
  ];
  return (
    <div className="relative grid grid-cols-[80%_20%] place-items-center w-full h-full border">
      <div className="relative grid grid-rows-[30%_65%] w-full h-full place-items-center gap-[10px]">
        <h1 className="absolute text-secondary font-secondary top-[15%] left-[5%]  place-self-start">
          Select your color here:
        </h1>
        <select
          className="row-start-2 h-[65%] w-[90%] rounded-lg mb-[5px] "
          id={"color"}
          disabled={!colorSaved ? false : true}
          value={colors.find((c) => c.styleColor === color) && "none"}
          onChange={(e) => {
            const c = colors.find((c) => c.selectColor === e.target.value);
            if (c) setColor(c);
          }}
        >
          {colors.map((c) => {
            return (
              <option key={c.selectColor} value={c.selectColor}>
                {c.selectColor}
              </option>
            );
          })}
        </select>
      </div>
      <div className="border w-full h-full ">
        {!colorSaved ? (
          <div className="text-secondary grid place-items-center h-full text-[20pt] ">
            <div
              onClick={() => setColorSaved(!colorSaved)}
              className="bg-greenAccent p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        ) : (
          <div className="text-secondary grid place-items-center h-full text-[20pt] ">
            <div
              onClick={() => setColorSaved(!colorSaved)}
              className="bg-redAccent p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faPencil} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfficerSelectInput;
