import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { Box, Collapse, FormControlLabel, Switch, styled } from "@mui/material";
const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;
const Eidtor = ({ title, language, value, onChange, icon }) => {
  function handleChange(editer, data, value) {
    onChange(value);
  }
  return (
    <Container style={{}}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {title}
        </Heading>
      </Header>
      <ControlledEditor
        style={{ textAlign: "left" }}
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Container>
  );
};

export default Eidtor;
