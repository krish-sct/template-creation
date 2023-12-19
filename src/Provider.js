import React, { useEffect, useState } from "react";
import { images } from "./components/templateData";
const url = "http://localhost:5000";
export const Context = React.createContext();

const Provider = (props) => {
  const statusCode = ["Pending", "Completed", "Redo"];
  let initialTemplate = {
    menu: {
      menus: [],
      type: "",
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
    cards: {},
    customComponent: {},
  };
  let initialEdits = {
    menu: false,
    heading: false,
    para: false,
    slider: false,
    cards: false,
    customComponent: false,
  };
  const [tempOne, setTempOne] = useState(initialTemplate);
  const [edits, setEdits] = useState(initialEdits);
  const [webTemplate, setWebTemplate] = useState({});
  const handleEdits = (data) => {
    if (data !== "")
      setEdits((prev) => {
        return { ...prev, [data]: !prev[data] };
      });
  };
  const handleOnChange = (data) => {
    if (data.key !== "" && data.type !== "")
      setTempOne((prev) => {
        return {
          ...prev,
          [data.key]: { ...prev[data.key], [data.type]: data.value },
        };
      });
  };
  const handleWebTemplate = (component) => {
    setWebTemplate((prev) => {
      return { ...prev, ...component };
    });
  };
  const [loading, setLoading] = useState(true);
  const [template1, setTemplate1] = useState({ name: "", template: [] });
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setsrcDoc] = useState("");
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

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //console.log({ result });
        setLoading(false);
        setTempOne(initialTemplate);
        setEdits(initialEdits);
      })
      .catch((error) => console.log("error", error));
  };
  const addWebTemplate = (data) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    fetch("http://localhost:5000/webTemplate", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //console.log({ result });
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };
  const handleSubmit = () => {
    add({ template: { ...tempOne, templateName: "TemplateOne" } });
  };
  const handleAddWebTemplate = () => {
    addWebTemplate({
      webTemplate: { ...webTemplate, templateName: "AboutUS" },
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setsrcDoc(`
    <html>   
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>`);
      handleWebTemplate({ html, css, js });
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);
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
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
        srcDoc,
        setsrcDoc,
        webTemplate,
        setWebTemplate,
        handleWebTemplate,
        handleAddWebTemplate,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
