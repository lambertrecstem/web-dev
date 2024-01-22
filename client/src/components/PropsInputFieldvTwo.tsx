
interface Props {
  label: string;
  id: string;
  placeholder: string;
  setValue: (title: string) => void;
  value: string;
  valueSaved: boolean;
  
}

const PropsInputField = ({
  label,
  id,
  placeholder,
  value,
  setValue,
  valueSaved,
  
}: Props) => {
  return (
    <div className="grid place-items-center w-full h-full border">
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
      
    </div>
  );
};

export default PropsInputField;
