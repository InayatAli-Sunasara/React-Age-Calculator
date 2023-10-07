import React from "react";
import AgeCalculator from "./AgeCalculator";
import "./app.css";
import BasicDatePicker from "./BasicDatePicker";
import { StyledEngineProvider } from "@mui/material";
import NextBirthdayCalculator from "./NextBirthdayCalculator";
function App() {
  return (
    <>
      {/* <NextBirthdayCalculator /> */}
      {/*  */}
      <StyledEngineProvider injectFirst>
        <AgeCalculator />
      </StyledEngineProvider>
    </>
  );
}

export default App;
