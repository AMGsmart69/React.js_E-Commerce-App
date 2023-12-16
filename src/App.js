import Header1 from "./comp/headerSection/header1";
import Header2 from "./comp/headerSection/header2";
import Header3 from "./comp/headerSection/header3";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./style/theme";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
