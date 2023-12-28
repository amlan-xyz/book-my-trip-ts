import React, { ReactNode, createContext, useContext, useReducer } from "react";

import { travelReducer } from "../reducer/travel.reducer";
import { TravelAction, TravelState } from "../reducer/travel.reducer.types";

import { data } from "../data/data";

interface TravelProviderProps {
  children: ReactNode;
}

interface TravelContextValue extends TravelState {
  dispatch: React.Dispatch<TravelAction>;
}

const TravelContext = createContext<TravelContextValue | null>(null);

const initalState: TravelState = {
  continents: data.continents,
};

const TravelProvider: React.FC<TravelProviderProps> = ({ children }) => {
  const [{ continents }, dispatch] = useReducer(travelReducer, initalState);

  const value = {
    continents,
    dispatch,
  };

  return (
    <TravelContext.Provider value={value}>{children}</TravelContext.Provider>
  );
};

const useTravelContext = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error("useTravelContext must be used within TravelProvider");
  }
  return context;
};

export { TravelProvider, useTravelContext };
