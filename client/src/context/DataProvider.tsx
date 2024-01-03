import { createContext, useState } from "react";
import { Publication } from "../utils/filterButtons";
import { Officer } from "../components/OfficerCarousel";
import axios from "../api/axios";

const DataContext = createContext<any>({});

export const DataProvider = ({ children }: any) => {
  const [openedPublication, setOpenedPublication] = useState<Publication>();
  const [officers, setOfficers] = useState<Officer[]>([]);

  const fetchOfficers = async () => {
    await axios
      .get("/officer")
      .then((res) => setOfficers([...res.data]))
      .catch((err) => console.log(err));
  };

  console.log(officers);

  return (
    <DataContext.Provider
      value={{
        openedPublication,
        setOpenedPublication,
        officers,
        fetchOfficers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
