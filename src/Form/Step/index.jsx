import React from "react";
import { TextField, Button, Box } from "@mui/material";

import { useContext } from "react";

import DatosUsuario from "../DatosUsuario";
import Complete from "../Complete";
import { counterContext } from "../../Context";

const StepDatos = ({ data, step, onChange, onSubmit }) => {
  const counter = useContext(counterContext);

  if (step === 0) {
    return <DatosUsuario data={data} onChange={onChange} onSubmit={onSubmit} />;
  } else if (step === 3) {
    return <Complete />;
  } else {
    const { inputs, buttonText } = data;
    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "2rem",
        }}
        onSubmit={(e) => onSubmit(e, step)}
      >
        {inputs.map((input, index) => {
          const { label, type, value, valid, helperText, validator } = input;

          return (
            <TextField
              key={index}
              label={label}
              variant="outlined"
              error={valid === false}
              fullWidth
              margin="dense"
              type={type}
              helperText={valid === false && helperText}
              value={value}
              onChange={(e) => onChange(e, index, step, validator)}
              onBlur={(e) => onChange(e, index, step, validator)}
            />
          );
        })}

        <Button variant="contained" type="submit">
          {buttonText}
        </Button>
      </Box>
    );
  }
};

export default StepDatos;
