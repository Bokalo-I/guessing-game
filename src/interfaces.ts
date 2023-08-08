export interface ICity {
  id: number;
  countryCode: string;
  country: string;
  name: string;
  city: string;
}

export interface IGame {
  cityId: number;
  cityName: string;
  countryName: string;
  temperature: number;
  try: number;
  isSubmitted: boolean;
}

export interface IGameResult extends IGame {
  minWinValue: number;
  maxWinValue: number;
  win: boolean;
}
