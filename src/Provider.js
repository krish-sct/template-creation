import React, { useEffect, useState } from "react";
const url = "http://localhost:5000";
export const Context = React.createContext();
let data = []
let template = ['Template Name',
  'Careers', 'Articles', 'Events & Tradeshows', 'FAQ', 'News', 'Newsletters', 'Press Release', 'Podcasts', 'Testimonials', 'Videos'
]
const Provider = (props) => {
  const [isLoged, setIsLoged] = useState(false);
  const [role, setRole] = useState("Select User Role");
  const [templateData, setTemplateData] = useState(data)
  const [templateName, setTemplateName] = useState('Template Name')
  return (
    <Context.Provider
      value={{
        template, templateData, setTemplateData, templateName, setTemplateName,
        isLoged, setIsLoged, role, setRole
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
