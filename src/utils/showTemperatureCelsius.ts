export const showTemperatureCelsius = (celsius: number | undefined) => {
  if (celsius !== undefined) {
    const formattedTemperature = celsius > 0 ? `+${celsius}` : celsius;
    return `${formattedTemperature}°C`;
  }

  return celsius;
};
