import { kelvinToCelsius } from '../utils/kelvinToCelsius';

export const getCityTemperature = async (
  cityName: string,
  countryCode: string,
): Promise<number> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=b355db3a8217ae32abe405b8021b20a5`,
  );
  const data = await res.json();
  return kelvinToCelsius(data.main.temp as number);
};
