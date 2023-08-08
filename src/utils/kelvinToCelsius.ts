export const kelvinToCelsius = (temp: number): number => {
  const kelvin = 273.15;
  const celsius = temp - kelvin;
  return Math.round(celsius);
};
