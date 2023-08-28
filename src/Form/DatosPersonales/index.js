import React from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  validarApellidos,
  validarNombre,
  validarTelefono,
} from "./validaciones";
import { useState } from "react";

const DatosPersonales = ({ updateStep }) => {
  const [estado, setEstado] = useState({
    nombre: { value: "", valid: true },
    apellidos: { value: "", valid: true },
    telefono: { value: "", valid: true },
  });

  return (
    <Box
      onSubmit={(e) => {
        e.preventDefault();
        if (
          validarNombre(estado.nombre.value) &&
          validarApellidos(estado.apellidos.value) &&
          validarTelefono(estado.telefono.value)
        ) {
          updateStep(2);
        } else {
          console.log("error de formulario 1: Personales");
        }
      }}
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "2rem",
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={estado.nombre.value}
        onChange={(e) => {
          const valueName = e.target.value;
          const valid = validarNombre(valueName);
          setEstado({ ...estado, nombre: { value: valueName, valid: valid } });
        }}
        onBlur={(e) => {
          const valueName = e.target.value;
          const valid = validarNombre(valueName);
          setEstado({ ...estado, nombre: { value: valueName, valid: valid } });
        }}
        error={!estado.nombre.valid}
        helperText={
          !estado.nombre.valid && "Ingresa un nombre entre 3 y 15 caracteres"
        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={estado.apellidos.value}
        onChange={(e) => {
          const valueApellidos = e.target.value;
          const valid = validarApellidos(valueApellidos);
          setEstado({
            ...estado,
            apellidos: { value: valueApellidos, valid: valid },
          });
        }}
        onBlur={(e) => {
          const valueApellidos = e.target.value;
          const valid = validarApellidos(valueApellidos);
          setEstado({
            ...estado,
            apellidos: { value: valueApellidos, valid: valid },
          });
        }}
        error={!estado.apellidos.valid}
        helperText={
          !estado.apellidos.valid &&
          "Ingresa apellidos entre 10 y 30 caracteres"
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={estado.telefono.value}
        onChange={(e) => {
          const valueTelefono = e.target.value;
          const valid = validarTelefono(valueTelefono);
          setEstado({
            ...estado,
            telefono: { value: valueTelefono, valid: valid },
          });
        }}
        onBlur={(e) => {
          const valueTelefono = e.target.value;
          const valid = validarTelefono(valueTelefono);
          setEstado({
            ...estado,
            telefono: { value: valueTelefono, valid: valid },
          });
        }}
        error={!estado.telefono.valid}
        helperText={
          !estado.telefono.valid &&
          "Ingresa un teléfono entre 9 y 14 caracteres"
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
