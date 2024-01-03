import { faCheck, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Subject, subjects } from "../utils/filterButtons";

interface Props {
  label: string;
  id: string;
  placeholder: string;
  setValue: (value: Subject) => void;
  value: Subject;
  valueSaved: boolean;
  setValueSaved: (saved: boolean) => void;
}

const SelectInput = ({
  label,
  id,
  placeholder,
  value,
  setValue,
  valueSaved,
  setValueSaved,
}: Props) => {
  return (
    <div className="relative grid grid-cols-[80%_20%] place-items-center w-full h-full border">
      <div className="relative grid grid-rows-[30%_65%] w-full h-full place-items-center gap-[10px]">
        <h1 className="absolute text-secondary font-secondary top-[15%] left-[5%]  place-self-start">
          Enter your {label} here:
        </h1>
        <select
          className="row-start-2 h-[65%] w-[90%] rounded-lg mb-[5px] "
          id={id}
          placeholder={placeholder}
          disabled={!valueSaved ? false : true}
          value={value.slug}
          onChange={(e) => {
            const subject = subjects.find((sub) => sub.slug === e.target.value);
            if (subject) setValue(subject);
          }}
        >
          {subjects.map((s) => {
            return (
              <option key={s.slug} value={s.slug}>
                {s.subject}
              </option>
            );
          })}
        </select>
      </div>
      <div className="border w-full h-full ">
        {!valueSaved ? (
          <div className="text-secondary grid place-items-center h-full text-[20pt] ">
            <div
              onClick={() => setValueSaved(!valueSaved)}
              className="bg-greenAccent p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        ) : (
          <div className="text-secondary grid place-items-center h-full text-[20pt] ">
            <div
              onClick={() => setValueSaved(!valueSaved)}
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

export default SelectInput;
