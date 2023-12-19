import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BuildTemplate from "../../src/components/Build/BuildTemplate";
import BuildForm from "./Build/BuildForm";
import FillUpTemplate from "./FillUp/FillUpTemplate";
import TemplateOne from "./PreBuildTemplate/TemplateOne";
import TemplateTwo from "./PreBuildTemplate/TemplateTwo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Header() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "auto" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Build Template" {...a11yProps(0)} />
          <Tab label="Fill up Template" {...a11yProps(1)} />
          <Tab label="Template One" {...a11yProps(2)} />
          <Tab label="Template Two" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Build Template
          <BuildForm />
          <br />
          <BuildTemplate />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Fill Up Template
          <br />
          <FillUpTemplate />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Template One
          <br />
          <TemplateOne />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Template Two
          <br />
          <TemplateTwo />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
