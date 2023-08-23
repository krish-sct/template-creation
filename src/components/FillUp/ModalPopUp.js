import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { Context } from "./Provider";
import { useContext } from "react";
const statusCode = ["Pending", "Completed", "Redo"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4
};

export default function ListModal() {
  const { open, handleClose, handleOpen } = useContext(Context);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack spacing={2} direction="row" style={{ float: "right" }}>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Stack>
          <Typography variant="h5">Modal</Typography>
          <br />
          <br />
          <TextField label="Task Name" variant="outlined" value={""} />
          <br />
          <br />
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={3}
            value={""}
          />
          <br />
          <br />
          <Select value={0} label="Status">
            {statusCode.map((e, i) => (
              <MenuItem key={i} value={i}>
                {e}
              </MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <Stack spacing={2} direction="row" style={{ float: "right" }}>
            <Button variant="contained">Submit</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
