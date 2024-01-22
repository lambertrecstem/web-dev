
import { Subject, subjectsComp } from "../utils/managementInterfaces";

interface Props {
  label: string;
  id: string;
  placeholder: string;
  setValue: (value: Subject) => void;
  value: Subject;
  valueSaved: boolean;

}

const SelectInput = ({
  label,
  id,
  value,
  setValue,
  valueSaved,
  

}: Props) => {
  return (
    <div className="relative grid  place-items-center w-full h-full border">
      <div className="relative grid grid-rows-[30%_65%] w-full h-full place-items-center gap-[10px]">
        <h1 className="absolute text-secondary font-secondary top-[15%] left-[5%]  place-self-start">
          Enter your {label} here:
        </h1>
        <select
          className="row-start-2 h-[65%] w-[90%] rounded-lg mb-[5px] "
          id={id}
          disabled={!valueSaved ? false : true}
          value={value.slug}
          onChange={(e) => {
            const subject = subjectsComp.find((sub) => sub.slug === e.target.value);
            if (subject) setValue(subject);
          }}
        >
          {subjectsComp.map((s) => {
            return (
              <option key={s.slug} value={s.slug}>
                {s.subject}
              </option>
            );
          })}
        </select>
      </div>
     
    </div>
  );
};

export default SelectInput;
