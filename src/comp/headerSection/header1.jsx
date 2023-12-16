import { useContext } from "react";
import { ColorModeContext } from "../../style/theme";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";

const options = ["AR", "EN"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  // List Menu Codes
  const [anchorEl, setAnchorEl] = useState();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          {/* Left Typography */}
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              backgroundColor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
              flexGrow: "1",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          {/* Dark Mode Icon */}
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined sx={{ color: "#fff", fontSize: "18px" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{ color: "orange", fontSize: "18px" }} />
            </IconButton>
          )}

          {/* Change Language */}
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{ ".MuiTypography-root": { color: "#fff" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          {/* Social Media Icons */}
          <TwitterIcon sx={{ color: "#fff", fontSize: "16px" }} />

          <FacebookIcon sx={{ color: "#fff", fontSize: "16px", mx: 1 }} />

          <InstagramIcon sx={{ color: "#fff", fontSize: "16px" }} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
