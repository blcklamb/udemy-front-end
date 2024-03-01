export interface Nara {
  code: string;
  commonName: string;
  flagEmoji: string;
  flagImg: string;
  capital: string[];
  region: string;
  population: number;
}

export interface NaraSearchByCode extends Nara {
  officialName: string;
  googleMapURL: string;
}
