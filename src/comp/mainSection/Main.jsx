import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

const Main = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ mt: 9, pt: 3, pb: 9 }}>
      {/* Title */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Product</Typography>
          <Typography variant="body1">
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, .5)",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="left"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            className="myButton"
            value="center"
            aria-label="centered"
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
          >
            MEN Category
          </ToggleButton>

          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="right"
            aria-label="right aligned"
          >
            WOMEN Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {/* Products */}
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {["aaa", "bbb", "ccc"].map((item) => {
          return (
            <Card
              key={item}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: ".5s ease",
                },
              }}
            >
              <CardMedia
                sx={{ height: 277 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6" component="div">
                    T-shirt
                  </Typography>

                  <Typography
                    fontWeight={"bold"}
                    color="success.main"
                    variant="subtitle1"
                    component="p"
                  >
                    $12.99
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={handleClickOpen}
                  sx={{ textTransform: "capitalize" }}
                  size="larg"
                >
                  <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                  Add To Cart
                </Button>

                <Rating value={4.5} precision={0.5} readOnly />
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            "&:hover": {
              rotate: "70deg",
              transition: ".3s ease",
              color: "red",
            },
            position: "absolute",
            top: 0,
            right: 0,
            mr: "10px",
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails />
      </Dialog>
    </Container>
  );
};

export default Main;
