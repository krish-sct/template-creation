import React, { useEffect, useState } from "react";
import { images } from "./components/templateData";
const url = "​http://localhost:3001/";
export const Context = React.createContext();

const Provider = (props) => {
  const statusCode = ["Pending", "Completed", "Redo"];
  let initialTemplate = {
    menu: {
      menus: [],
    },
    heading: {
      text: "",
      variant: "h4",
    },
    para: {
      text: "",
      variant: "body",
    },
    slider: {
      count: images?.length,
      images,
    },
  };
  let initialEdits = {
    menu: false,
    heading: false,
    para: false,
    slider: false,
  };
  const [tempOne, setTempOne] = useState(initialTemplate);
  const [edits, setEdits] = useState(initialEdits);
  const handleEdits = (data) => {
    if (data !== "")
      setEdits((prev) => {
        return { ...prev, [data]: !prev[data] };
      });
  };
  const handleOnChange = (data) => {
    if ((data.key !== "", data.type !== ""))
      setTempOne((prev) => {
        return {
          ...prev,
          [data.key]: { ...prev[data.key], [data.type]: data.value },
        };
      });
  };
  const [loading, setLoading] = useState(true);
  const [template1, setTemplate1] = useState({ name: "", template: [] });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const add = (data) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    fetch("http://localhost:3001", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //console.log({ result });
        setLoading(false);
        setTempOne(initialTemplate);
      })
      .catch((error) => console.log("error", error));
  };
  const handleSubmit = () => {
    add({ template: { ...tempOne, templateName: "TemplateOne" } });
  };
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
        loading,
        tempOne,
        setTempOne,
        edits,
        setEdits,
        handleEdits,
        handleOnChange,
        handleSubmit,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
