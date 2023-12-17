import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Icons from "./Icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useTheme } from "@emotion/react";

const Hero = () => {
  const theme = useTheme();
  const heroImgList = [
    {
      title: "MEN",
      imgSrc: "./hero-imgs/slider-img1.jpg",
      imgAlt: "slider-img1",
    },
    {
      title: "WOMEN",
      imgSrc: "./hero-imgs/slider-img2.jpg",
      imgAlt: "slider-img2",
    },
  ];
  return (
    <Container sx={{ pt: .5, mt: 2 }}>
      <Box
        sx={{
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
          zIndex: 1,
        }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {heroImgList.map((item) => {
            return (
              <SwiperSlide
                key={item.title}
                className="parent-slider"
                sx={{ position: "relative" }}
              >
                <img src={item.imgSrc} alt={item.imgAlt} />

                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h6">
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                    variant="h3"
                  >
                    {item.title}
                  </Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h4">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#D23F57"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        backgroundColor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {useMediaQuery("(min-width: 965px)") && (
          <Box sx={{ minWidth: "26.7%" }}>
            <Box sx={{ position: "relative" }}>
              <img
                width={"100%"}
                src="./hero-imgs/mini-img1.jpg"
                alt="mini-img1"
              />

              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  sx={{ color: "#283445", fontSize: "18px" }}
                  variant="caption"
                >
                  NEW ARRIVALS
                </Typography>
                <Typography
                  sx={{ color: "#283445", fontSize: "16px" }}
                  variant="caption"
                >
                  SUMMER
                </Typography>
                <Typography
                  sx={{ color: "#283445", fontSize: "16px" }}
                  variant="caption"
                >
                  SALE 20% OFF
                </Typography>

                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    "&:hover": {
                      ".shop-now-icon": {
                        position: "relative",
                        left: "4px",
                      },
                      color: "#D23F57",
                    },
                    transition: ".2s ease",
                  }}
                >
                  <Typography variant="body1">Shop Now</Typography>
                  <ArrowForward
                    className="shop-now-icon"
                    sx={{ fontSize: "13px" }}
                  />
                </Link>
              </Stack>
            </Box>

            <Box sx={{ position: "relative" }}>
              <img
                width={"100%"}
                src="./hero-imgs/mini-img2.jpg"
                alt="mini-img2"
              />

              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  sx={{ color: "#283445", fontSize: "18px" }}
                  variant="caption"
                >
                  GAMING 4K
                </Typography>
                <Typography
                  sx={{ color: "#283445", fontSize: "16px" }}
                  variant="caption"
                >
                  DESKTOPS &
                </Typography>
                <Typography
                  sx={{ color: "#283445", fontSize: "16px" }}
                  variant="h6"
                >
                  LAPTOPS
                </Typography>

                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    "&:hover": {
                      ".shop-now-icon": {
                        position: "relative",
                        left: "4px",
                      },
                      color: "#D23F57",
                    },
                    transition: ".2s ease",
                  }}
                >
                  <Typography variant="body1">Shop Now</Typography>
                  <ArrowForward
                    className="shop-now-icon"
                    sx={{ fontSize: "13px" }}
                  />
                </Link>
              </Stack>
            </Box>
          </Box>
        )}
      </Box>

      <Icons />
    </Container>
  );
};

export default Hero;
