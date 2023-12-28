import { Continent } from "../data/data.types";
export type TravelState = {
  continents: Continent[];
};

export type TravelAction = {
  type: "FETCH_CONTINENTS";
  payload: Continent[];
};
