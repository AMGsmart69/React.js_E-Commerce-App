import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        backgroundColor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"HighLightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed And Developed By
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            fontWeight: 300,
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          A.M.G
        </Button>
        &#169; 2024
      </Typography>
    </Box>
  );
};

export default Footer;
