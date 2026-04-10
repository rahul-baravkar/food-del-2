import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
  const url = "https://food-del-2-backend-znom.onrender.com";
  const [token , setToken] = useState(localStorage.getItem("adminToken"))


  const ContextValue = {
    url,
    token,
    setToken
  };

  return (
    <AdminContext.Provider value={ContextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
