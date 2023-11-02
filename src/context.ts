import { createContext, useContext, useState } from "react";

const GradesContext = createContext();

export const useGradesContext = () => {
  return useContext(GradesContext);
}

export const GradesProvider = ({ children }) => {
  const [totalResult, setTotalResult] = useState(0);

  return (
    <GradesContext.Provider  value={{ totalResult, setTotalResult }}>
      {children}
    </GradesContext.Provider>
  );
}
