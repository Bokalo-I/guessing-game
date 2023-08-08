import { ICity } from '../interfaces';
import cities from '../cities.json';

export const getCity = async (): Promise<ICity> => {
  const randomCityIndex = Math.floor(Math.random() * cities.length);
  const test = cities[randomCityIndex] as ICity;
  return test;
};
