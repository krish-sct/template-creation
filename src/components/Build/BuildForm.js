import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { Context } from "../../Provider";

export default function BuildForm() {
  const { template1, setTemplate1 } = useContext(Context);
  const handleSubmit = () => {};
  return (
    <div>
      <br />
      <TextField
        size="small"
        label="Template Name"
        variant="outlined"
        value={template1?.name}
        onChange={(e) => {
          setTemplate1((data) => {
            return { ...data, name: e.target.value };
          });
        }}
      />
      <Button
        disabled={!template1?.name?.length || !template1.template?.length}
        variant="contained"
        onClick={handleSubmit}
        style={{ marginLeft: "8px" }}
      >
        Submit
      </Button>
    </div>
  );
}
