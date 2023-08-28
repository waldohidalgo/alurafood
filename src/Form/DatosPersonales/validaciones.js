export const validarNombre = (nombre) => {
  const length = nombre.length;
  return length >= 3 && length <= 15 ? true : false;
};

export const validarApellidos = (apellidos) => {
  const length = apellidos.length;
  return length >= 10 && length <= 30 ? true : false;
};

export const validarTelefono = (telefono) => {
  const length = telefono.length;
  return length >= 9 && length <= 14 ? true : false;
};
