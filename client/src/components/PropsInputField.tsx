import { faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  label: string;
  id: string;
  placeholder: string;
  setValue: (title: string) => void;
  value: string;
  valueSaved: boolean;
  setValueSaved: (saved: boolean) => void;
}

const PropsInputField = ({
  label,
  id,
  placeholder,
  value,
  setValue,
  valueSaved,
  setValueSaved,
}: Props) => {
  return (
    <div className="grid grid-cols-[80%_20%] place-items-center w-full h-full border">
      <div className="grid grid-rows-[30%_65%] place-items-center gap-[10px]">
        <h1 className="text-secondary font-secondary  place-self-start">
          Enter your {label} here:
        </h1>
        <input
          className="h-full "
          type="text"
          id={id}
          placeholder={placeholder}
          disabled={!valueSaved ? false : true}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
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

export default PropsInputField;
