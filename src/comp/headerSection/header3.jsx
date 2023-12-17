import React from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import Drawer from "@mui/material/Drawer";
import { Close, ExpandMore } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Links from "./Links";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const acordionList = [
    {
      mainLink: "Home",
      subLinks: ["Home_link_1", "Home_link_2", "Home_link_3"],
    },
    {
      mainLink: "Mega menu",
      subLinks: ["Mega_link_1", "Mega_link_2", "Mega_link_3"],
    },
    {
      mainLink: "Full screen menu",
      subLinks: ["Full_link_1", "Full_link_2", "Full_link_3"],
    },
    {
      mainLink: "Pages",
      subLinks: ["Pages_link_1", "Pages_link_2", "Pages_link_3"],
    },
    {
      mainLink: "User Account",
      subLinks: ["User_link_1", "User_link_2", "User_link_3"],
    },
    {
      mainLink: "Vendor Account",
      subLinks: ["Vendor_link_1", "Vendor_link_2", "Vendor_link_3"],
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Box>
        <Button
          sx={{
            backgroundColor: theme.palette.menuColor.main,
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <WindowIcon />
          <Typography
            variant="p"
            sx={{ p: 0, textTransform: "capitalize", mx: 1 }}
          >
            Categories
          </Typography>

          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ElectricBikeOutlinedIcon sx={{ mr: 2 }} />
            Bikes
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ComputerOutlinedIcon sx={{ mr: 2 }} />
            Electronics
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <MenuBookOutlinedIcon sx={{ mr: 2 }} />
            Books
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <SportsEsportsOutlinedIcon sx={{ mr: 2 }} />
            Games
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width: 965px)") && (
        <Stack gap={2} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width: 964px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
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
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {acordionList.map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ backgroundColor: "inherit" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {item.mainLink}
                </AccordionSummary>

                {item.subLinks.map((link) => {
                  return (
                    <List sx={{ py: 0, my: 0 }}>
                      <ListItem sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  );
                })}
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
