export const convertTime = (unixTime) => {
  const fecha = new Date(unixTime * 1000); // multiplicar por 1000 para convertir a milisegundos
  const hora = fecha.toLocaleTimeString(); // obtener la hora como una cadena en formato legible
  return hora;
};
