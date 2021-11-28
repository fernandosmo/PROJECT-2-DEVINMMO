import React from 'react';
import reactDOM from "react-dom";
import { CssBaseline , createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import Routes from './Routes/routes'

import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          margin: 0;
          font-family:montserrat;
          font-size: 2vw;
          font-weight: bold;
          text-align: center;
        }
      `,
    },
  },
});

const Index = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
          </ThemeProvider>
      </Router>
      </>
  );
};
reactDOM.render(<Index />, document.getElementById("root"));
