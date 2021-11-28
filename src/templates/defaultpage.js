import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Header from "../components/header/header";
import Background from "./assets/img/Background4.jpg"

export const DefaultPage = ({ children }) => {

  return (
    <>
    <div 
      style={{
        width: "100%",
        maxHeight: "100%",
        background: `url(${Background})`,
        backgroundAttachment: "fixed",
        backgroundRepeat:"no-repeat"}}
        >
        <Header />
        <Box sx={{marginTop:"10px"}}>
          <Container>{children}</Container>
        </Box>
    </div>
    </>
  );
};