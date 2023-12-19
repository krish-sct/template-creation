import { Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../Provider";
import HtmlTemplate from "./HtmlTemplate";

const TemplateTwo = () => {
  const { tempOne } = useContext(Context);
  return (
    <Container maxWidth="">
      <HtmlTemplate />
    </Container>
  );
};

export default TemplateTwo;
