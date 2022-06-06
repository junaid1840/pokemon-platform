import { IPokemon, IPokemonDetails } from "./pokemonInterfaces";

export interface IPokemonListResponse {
  results: IPokemon[];
  next: string;
  previous: string;
}
type IOfficialArtwork = {
  front_default: string;
};
type IOther = {
  "official-artwork": IOfficialArtwork;
};
type ISprites = {
  other: IOther;
};
export type IPokemonDetailsResponse = Omit<IPokemonDetails, "sprites"> & {
  sprites: ISprites;
};
