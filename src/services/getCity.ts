import { ICity } from '../interfaces';

export const getCity = async (): Promise<ICity> => {
  const maxOffset = 27000;
  const randomOffset = Math.floor(Math.random() * maxOffset);

  const res = await fetch(
    `http://geodb-free-service.wirefreethought.com/v1/geo/cities?hateoasMode=off&limit=1&offset=${randomOffset}`,
  );
  const cityData = await res.json();
  const city = cityData.data as ICity[];
  return city[0];
};
