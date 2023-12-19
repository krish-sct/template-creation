import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import { Context } from "../../Provider";

export default function Cards() {
  const { setTempOne } = React.useContext(Context);
  const [cardData, setCardData] = React.useState({
    imgUrl: "",
    cardTitle: "",
    cardDesc: "",
  });
  const handleAddCard = () => {
    setTempOne((prev) => {
      let prevCard = prev?.customComponent?.cards || [];
      return {
        ...prev,
        customComponent: {
          ...prev?.customComponent,
          cards: [...prevCard, cardData],
        },
      };
    });
    setCardData({
      imgUrl: "",
      cardTitle: "",
      cardDesc: "",
    });
  };
  return (
    <Grid sx={{ display: "flex", maxWidth: "100%" }}>
      <Card sx={{ maxWidth: 420 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/1439326389/photo/3d-print-image-icon-with-landscape-and-sun-picture-in-frame-gallery-sign-no-image-social.jpg?s=2048x2048&w=is&k=20&c=fIC1wQpQkrzRhHbNDsqdgWpID2FGAEw43l05mSrtUJs="
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description .....
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Grid item>
        <Grid>
          <TextField
            size="small"
            sx={{ m: 2 }}
            label="Card Title"
            variant="outlined"
            value={cardData.cardTitle}
            onChange={(e) =>
              setCardData((prev) => {
                return { ...prev, cardTitle: e.target.value };
              })
            }
          />
          <TextField
            size="small"
            sx={{ m: 2 }}
            label="Image URL"
            variant="outlined"
            value={cardData?.imgUrl}
            onChange={(e) =>
              setCardData((prev) => {
                return { ...prev, imgUrl: e.target.value };
              })
            }
          />
          <TextField
            size="small"
            sx={{ m: 2 }}
            multiline
            rows={3}
            label="Card description"
            variant="outlined"
            value={cardData?.cardDesc}
            onChange={(e) =>
              setCardData((prev) => {
                return { ...prev, cardDesc: e.target.value };
              })
            }
          />
        </Grid>
        <Button onClick={handleAddCard} variant="outlined">
          Add a card
        </Button>
      </Grid>
    </Grid>
  );
}
