import { TravelAction, TravelState } from "./travel.reducer.types";

export const travelReducer = (state: TravelState, action: TravelAction) => {
  switch (action.type) {
    case "FETCH_CONTINENTS":
      return {
        ...state,
        continents: action.payload,
      };
    default:
      return state;
  }
};
