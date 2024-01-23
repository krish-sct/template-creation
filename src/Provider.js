import React, { useEffect, useState } from "react";
const url = "http://localhost:5000";
export const Context = React.createContext();
import { template } from "./template-json";
import { preDefinedTemplate } from "./template/common";
let data = [];
let templateNames = [
  "Template Name",
  "Careers",
  "Articles",
  "Events & Tradeshows",
  "FAQ",
  "News",
  "Newsletters",
  "Press Release",
  "Podcasts",
  "Testimonials",
  "Videos",
];
const Provider = (props) => {
  const [isLoged, setIsLoged] = useState(false);
  const [role, setRole] = useState("Select User Role");
  const [templateData, setTemplateData] = useState(data);
  const [templateName, setTemplateName] = useState("Template Name");

  const handleAddComponent = (component) => {
    setTemplateData((prev) => {
      return [...prev, template?.components?.[component]];
    });
  };
  const handleRemoveComponent = (index, component, componentIndex) => {
    setTemplateData((prev) => {
      let newArr;
      if (component === "") {
        newArr = prev?.filter((_e, i) => i !== index);
      }
      if (component === "img") {
        newArr = prev?.map((e, i) => {
          return index === i
            ? {
                ...e,
                imgs: e?.imgs?.filter((_img, imgI) => componentIndex !== imgI),
              }
            : e;
        });
      }
      if (component === "list") {
        newArr = prev?.map((e, i) => {
          return index === i
            ? {
                ...e,
                lists: e?.lists?.filter(
                  (_list, listI) => componentIndex !== listI
                ),
              }
            : e;
        });
      }
      return newArr;
    });
  };
  const handleAddImg = (index) => {
    setTemplateData((prev) => {
      return prev?.map((e, i) => {
        return i === index
          ? {
              ...e,
              imgs: [...e?.imgs, { src: "", alt: "" }],
            }
          : e;
      });
    });
  };
  const handleAddList = (index) => {
    setTemplateData((prev) => {
      return prev?.map((e, i) => {
        return i === index
          ? {
              ...e,
              lists: [
                ...e?.lists,
                {
                  key: "listText",
                  value: "",
                },
              ],
            }
          : e;
      });
    });
  };
  const handleUpdateValue = (value, index, component, componentIndex) => {
    setTemplateData((prev) => {
      let newData;
      if (component === "") {
        newData = prev?.map((e, i) => {
          return i === index ? { ...e, value } : e;
        });
      }
      if (component === "img") {
        value = { src: value, alt: value };
        newData = prev?.map((e, i) => {
          return i === index
            ? {
                ...e,
                imgs: e?.imgs?.map((img, imgI) => {
                  return imgI === componentIndex ? value : img;
                }),
              }
            : e;
        });
      }
      if (component === "list") {
        let data = { value, key: "listText" };
        newData = prev?.map((e, i) => {
          return i === index
            ? {
                ...e,
                lists: e?.lists?.map((list, listI) => {
                  return listI === componentIndex ? data : list;
                }),
              }
            : e;
        });
      }
      return newData;
    });
  };
  const handleSwap = async (index1, index2) => {
    setTemplateData((prev) => {
      let data = swapElements([...prev], index1, index2);
      return data;
    });
  };
  const fetchTemplateData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      //body: raw,
      redirect: "follow",
    };
    let data = await fetch(
      `http://localhost:7234/getAllDetails/${templateName}?page=1&limit=20`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
    return data;
  };
  const handleGetTemplateData = async () => {
    const res = await fetchTemplateData();
    console.log({ res });
  };
  useEffect(() => {
    console.log({ templateName });
    if (templateName !== template[0]) {
      setTemplateData(
        preDefinedTemplate?.filter((e) => e.template === templateName)[0]
          ?.components
      );
    }
  }, [templateName]);
  return (
    <Context.Provider
      value={{
        templateNames,
        template,
        templateData,
        setTemplateData,
        templateName,
        setTemplateName,
        handleAddImg,
        handleRemoveComponent,
        isLoged,
        setIsLoged,
        role,
        setRole,
        handleGetTemplateData,
        handleSwap,
        handleUpdateValue,
        handleAddList,
        handleAddComponent,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
