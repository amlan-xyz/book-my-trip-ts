export type Destination = {
  id: number;
  name: string;
  description: string;
  image: string;
  ratings: number;
  reviews: number;
  location: string;
  openingHours: string;
  ticketPrice: string;
  website: string;
};

export type Country = {
  id: number;
  name: string;
  image: string;
  destinations: Destination[];
};

export type Continent = {
  id: number;
  name: string;
  image: string;
  countries: Country[];
};

export type Travel = {
  continents: Continent[];
};
