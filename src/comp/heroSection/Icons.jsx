import { useTheme } from "@emotion/react";
import {
  AccessAlarm,
  ElectricBolt,
  Paid,
  WorkspacePremium,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Icons = () => {
  const iconsList = [
    { text1: "Fast Delivery", text2: "Start from $10", icon: <ElectricBolt /> },
    {
      text1: "Money Guarantee",
      text2: "7 Days Back",
      icon: <WorkspacePremium />,
    },
    { text1: "Payment", text2: "Secure System", icon: <Paid /> },
    { text1: "For Free Return", text2: "365 Days", icon: <AccessAlarm /> },
  ];

  const theme = useTheme();

  return (
    <Container
      sx={{ mt: 3, backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width: 600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        {iconsList.map((item) => {
          return (
            <Box
              key={item.text1}
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                py: 1.6,
                justifyContent: { sm: "center", xs: "left" },
              }}
            >
              <Box
                sx={{ color: theme.palette.mode === "light" ? "#000" : "#fff" }}
              >
                {item.icon}
              </Box>
              <Box sx={{ ml: 2, width: "150px", position: "relative", top: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 300,
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                  }}
                >
                  {item.text1}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 300,
                    color: theme.palette.text.secondary,
                    fontSize: "13px",
                  }}
                >
                  {item.text2}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Icons;
