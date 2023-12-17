import React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";

const Links = ({ title }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        "&:hover .show-when-hover": { display: "block" },
        "&:hover": { cursor: "pointer" },
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore />

      <Box
        className="show-when-hover"
        sx={{
          //   border: "2px solid red",
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
          zIndex: 2,
        }}
      >
        <Paper sx={{ mt: "10px" }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                sx={{
                  "&:hover .pro-links": { display: "block" },
                  position: "relative",
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Products"
                  />

                  <KeyboardArrowRight />
                </ListItemButton>

                {/* Product Sub-Links */}
                <Box
                  className="pro-links"
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: "100%",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: "150px" }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              p: 0,
                              px: 1.5,
                            }}
                          >
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary="Add Product"
                            />
                          </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              p: 0,
                              px: 1.5,
                            }}
                          >
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary="Edit Product"
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
