import { useState, useEffect, useContext } from "react";

import { Box, styled } from "@mui/material";
import { Context } from "../../Provider";

const Container = styled(Box)`
  height: 100vh;
  width: 100%;
`;

const Preview = () => {
  const { html, css, js, src, srcDoc } = useContext(Context);
  return (
    <Container style={html || css || js ? null : { background: "#444857" }}>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Preview;
