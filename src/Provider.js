import React, { useEffect, useState } from "react";
const url = "​http://localhost:3000/";
export const Context = React.createContext();

const Provider = (props) => {
  const statusCode = ["Pending", "Completed", "Redo"];
  const [loading, setLoading] = useState(true);
  const [template1, setTemplate1] = useState({ name: "", template: [] });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        handleOpen,
        handleClose,
        template1,
        setTemplate1,
        statusCode,
        loading
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
