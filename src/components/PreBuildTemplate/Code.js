import React, { useContext, useEffect } from "react";

//components
import Editor from "./Editor";

import { Box, styled } from "@mui/material";

import { Context } from "../../Provider";

const Container = styled(Box)`
  background-color: #060606;
  height: 100vh;
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const Code = () => {
  const {
    html,
    css,
    js,
    setHtml,
    setCss,
    setJs,
    jsxCode,
    setJsxCode,
    setHtmlJsx,
  } = useContext(Context);
  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon="/"
        color="#FF3C41"
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon="*"
        color="#0EBEFF"
      />
    </Container>
  );
};

export default Code;
