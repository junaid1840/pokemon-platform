import { IPokemon } from "./pokemonInterfaces";

export interface IPokemonListResponse {
  results: IPokemon[];
  next: string;
  previous: string;
}
