import { Box, Button } from "@mui/material";
import React from "react";
import BuildTemplate from "../Build/BuildTemplate";
import FillUpTemplate from "../FillUp/FillUpTemplate";

const CustomCompHome = () => {
  return (
    <div
      style={{ padding: "8px", marginTop: "4px", border: "1px dashed grey" }}
    >
      <Box component="div">
        <BuildTemplate />
      </Box>
      <Box component="div">
        <FillUpTemplate />
      </Box>
    </div>
  );
};

export default CustomCompHome;
