import React, { useEffect, useState } from "react";
const url = "http://192.168.1.199:7234";
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
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const Provider = (props) => {
  const [isLoged, setIsLoged] = useState(false);
  const [role, setRole] = useState("Select User Role");
  const [templateData, setTemplateData] = useState(data);
  const [templateName, setTemplateName] = useState("Template Name");
  const [selectedTab, setSelectedTab] = useState(0);
  const [isAddNew, setIsAddNew] = useState(null);
  const [pageList, setPageList] = useState([]);
  const [dashboardData, setDashboardData] = useState({});
  const [selectedDashboard, setSelectedDashboard] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [toEmail, setToEmail] = useState("");
  const handleAddPreview = () => {
    if (isAddNew) {
      setIsAddNew(false);
    }
    setIsEdit(false);
  };
  const handleLogout = () => {
    setIsLoged(false);
    setIsAddNew(null);
    setRole("Select User Role");
    setTemplateName("Template Name");
    setDashboardData({});
    setPageList([]);
    setIsEdit(false);
  };
  const handleGenerateLink = (stage, templateName, id) => {
    templateName =
      templateName === "News" ? "newses" : templateName.toLowerCase();
    let domain = "http://192.168.1.220:3000/stage/";
    let link = `${domain}${stage}/${templateName}/${id}-${Date.now()}`;
    toEmail !== ""
      ? sendEmailNotification("Preview link", stage + " : " + link)
      : true;
    window.open(link);
    return link;
  };
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
  const handleSwapUpDown = (index, isUp) => {
    handleSwap(index, isUp ? index - 1 : index + 1);
  };
  const sendEmailNotification = (subject, message) => {
    let data = {
      recipient: toEmail,
      subject,
      message,
    };
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(url + "/notification/email", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log({ result });
      })
      .catch((error) => console.log("error", error));
    setToEmail("");
  };
  const handleUpdate = (templateData) => {
    let data = {
      staging: {
        previewComponent: templateData,
        prewiewSession: Date.now(),
        isPreview: false,
      },
    };
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(url + "/" + templateName + "/" + editId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log({ result });
        setTemplateName("Template Name");
        setTemplateData([]);
        setIsEdit(false);
        setEditId(null);
        const link = handleGenerateLink(
          "preview",
          templateName,
          result?.results?.data?._id
        );
      })
      .catch((error) => console.log("error", error));
  };
  const handleSubmit = (templateData) => {
    //console.log({ isEdit, templateData });
    if (isEdit) {
      handleUpdate(templateData);
      return;
    } else {
      const object = [];
      templateData?.forEach((element, index) => {
        object.push(element);
      });
      let data = {
        components: [],
        staging: {
          previewComponent: object,
          prewiewSession: Date.now(),
          isPreview: false,
        },
      };

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(url + "/createPage/" + templateName, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log({ result });
          setTemplateName("Template Name");
          setTemplateData([]);
          const link = handleGenerateLink(
            "preview",
            templateName,
            result?.results?.data?._id
          );
        })
        .catch((error) => console.log("error", error));
    }
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
      url + `/getAllPages/${templateName}?page=1&limit=20`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
    return data;
  };
  const handleGetTemplateData = async () => {
    const res = await fetchTemplateData();
    console.log({ res });
    if (!res?.error) {
      setPageList(res?.results?.data?.result);
    }
  };
  const handleDashboardData = (pageList) => {
    let previewData = pageList?.filter((e) => !e?.staging?.isPreview);
    let publishData = pageList?.filter(
      (e) => !e?.staging?.isPublish && e?.staging?.isPreview
    );
    let seoData = pageList?.filter(
      (e) => e?.staging?.isPreview && !e?.staging?.isSEOVerified
    );
    setDashboardData({ previewData, publishData, seoData });
  };
  useEffect(() => {
    console.log({ templateName });
    if (templateName !== templateNames[0]) {
      handleGetTemplateData();
      setTemplateData(
        preDefinedTemplate?.filter((e) => e.template === templateName)[0]
          ?.components
      );
    }
  }, [templateName]);
  useEffect(() => {
    console.log({ role });
    if (role !== "Select User Role") {
      setIsAddNew(true);
    }
  }, [role]);
  useEffect(() => {
    if (pageList?.length > 0) handleDashboardData(pageList);
  }, [pageList]);
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
        handleSubmit,
        selectedTab,
        setSelectedTab,
        handleLogout,
        isAddNew,
        setIsAddNew,
        handleAddPreview,
        pageList,
        dashboardData,
        setDashboardData,
        selectedDashboard,
        setSelectedDashboard,
        handleGenerateLink,
        isEdit,
        setIsEdit,
        editId,
        setEditId,
        toEmail,
        setToEmail,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
