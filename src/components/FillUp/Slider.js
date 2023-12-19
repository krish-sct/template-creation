import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Context } from "../../Provider";
import { Grid, IconButton } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import AddImageToSlider from "./AddImageToSlider";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Slider() {
  const theme = useTheme();
  const { edits, tempOne, setTempOne, handleEdits } = React.useContext(Context);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tempOne?.slider?.images?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step || 0);
  };
  const handleRemoveImg = (data) => {
    setTempOne((prev) => {
      return {
        ...prev,
        slider: {
          count:
            prev?.slider?.images?.filter((e, i) => i !== Number(data))
              ?.length || 0,
          images:
            prev?.slider?.images?.filter((e, i) => i !== Number(data)) || [],
        },
      };
    });
  };
  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      {!edits.slider ? (
        <Grid>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleEdits("slider")}
          >
            Add an Image{" "}
            <IconButton color="primary">
              <AddCircleOutlineIcon />
            </IconButton>
          </Button>
        </Grid>
      ) : (
        <AddImageToSlider />
      )}
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{tempOne?.slider?.images[activeStep]?.label}</Typography>
        {tempOne?.slider?.images?.length ? (
          <IconButton color="error" onClick={() => handleRemoveImg(activeStep)}>
            <HighlightOff />
          </IconButton>
        ) : (
          ""
        )}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tempOne?.slider?.images?.map((step, index) => (
          <div key={step?.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 600,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={
              activeStep === maxSteps - 1 ||
              tempOne?.slider?.images?.length === 0
            }
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0 || tempOne?.slider?.images?.length === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Slider;
