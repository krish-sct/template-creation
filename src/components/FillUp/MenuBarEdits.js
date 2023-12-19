import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Context } from "../../Provider";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const menus = ["Product", "Pricing", "Blogs", "About", "Contact", "Others"];

export default function MenuBarEdits() {
  const { tempOne, handleOnChange, handleEdits } = React.useContext(Context);
  const [menuName, setMenuName] = React.useState(tempOne?.menu?.menus || []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMenuName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    handleOnChange({ key: "menu", type: "menus", value });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 360 }} size="small">
        <Select
          multiple
          value={menuName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {menus.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={menuName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
