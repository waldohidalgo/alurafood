import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const StepperComponent = ({ step }) => {
  const steps = ["Datos de usuario", "Datos personales", "Datos de entrega"];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step} alternativeLabel>
        {step !== 3
          ? steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))
          : false}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
