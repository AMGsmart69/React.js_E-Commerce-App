import Header1 from "./comp/headerSection/header1";
import Header2 from "./comp/headerSection/header2";
import Header3 from "./comp/headerSection/header3";
import Hero from "./comp/heroSection/Hero";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./style/theme";
import Main from "./comp/mainSection/Main";
import Footer from "./comp/footerSection/Footer";
import ScrollToTop from "./comp/scroll/ScrollToTop";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />

        <Box sx={{ backgroundColor: theme.palette.bg.main }}>
          <Hero />
          <Main />
          <Footer />
          <ScrollToTop />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
