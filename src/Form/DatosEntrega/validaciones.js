export const validarDireccion = (direccion) => {
  const length = direccion.length;
  return length >= 3 ? true : false;
};

export const validarCiudad = (ciudad) => {
  const length = ciudad.length;
  return length >= 5 ? true : false;
};

export const validarEstado = (estado) => {
  const length = estado.length;
  return length >= 5 ? true : false;
};
