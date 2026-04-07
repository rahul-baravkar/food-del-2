import { createContext } from "react";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
  const url = "https://food-del-2-backend-znom.onrender.com";

  const ContextValue = {
    url,
  };

  return (
    <AdminContext.Provider value={ContextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
