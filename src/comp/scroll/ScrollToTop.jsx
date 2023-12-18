import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import React from "react";

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger({ threshold: 50 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        size="small"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 33,
          right: 33,
          ":hover .icon": { position: "relative", bottom: 2 },
        }}
      >
        <KeyboardArrowUp className="icon" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
