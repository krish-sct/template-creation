import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import { Context } from "../../Provider";
import Eidtor from "./Editor";
import Preview from "./Preview";
import { Button } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HtmlTemplate() {
  const {
    handleAddWebTemplate,
    html,
    setHtml,
    css,
    setCss,
    handleWebTemplate,
  } = React.useContext(Context);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddCart = () => {
    handleWebTemplate({
      cards: {
        imgUrl:
          "https://media.istockphoto.com/id/1439326389/photo/3d-print-image-icon-with-landscape-and-sun-picture-in-frame-gallery-sign-no-image-social.jpg?s=2048x2048&w=is&k=20&c=fIC1wQpQkrzRhHbNDsqdgWpID2FGAEw43l05mSrtUJs=",
        cardTitle: "Card 1",
        cardDesc:
          "jhgdeyfber ijdfljkgnlksjdfnjsd lgfjsndlgjfbl djblfgjbn sgjblgfdj blgfjbjfglbj fglb fg bljflbiasoehfaiohwer g fihdf bfg b agvfbagbver af afb  alirjuhgtf liaerlijulrt",
      },
    });
  };
  const handleAddButton = () => {};
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Html" {...a11yProps(0)} />
          <Tab label="CSS" {...a11yProps(1)} />
          <Tab label="Preview" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Eidtor
          title="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
          icon={<CodeIcon color="secondary" />}
        />

        <Button
          variant="outlined"
          onClick={handleAddCart}
          style={{ float: "left" }}
        >
          Add Card
        </Button>
        <Button
          variant="outlined"
          onClick={handleAddButton}
          style={{ float: "left" }}
        >
          Add Button
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Eidtor
          title="CSS"
          language="css"
          value={css}
          onChange={setCss}
          icon={<CodeIcon color="primary" />}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Preview />
      </CustomTabPanel>
      <Button variant="contained" onClick={handleAddWebTemplate}>
        Create Template
      </Button>
    </Box>
  );
}
