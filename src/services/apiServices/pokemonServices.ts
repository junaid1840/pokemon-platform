import { apiManager } from "../api-manager/apiManager";
import {
  IPokemonDetailsResponse,
  IPokemonListResponse,
} from "../../redux/interfaces/pokemon/pokemonServiceInterfaces";

export const getPokemonListService = async (
  offsetParams: string
): Promise<IPokemonListResponse> => {
  const url = `https://pokeapi.co/api/v2/pokemon/?${offsetParams}`;
  const { data } = await apiManager.request(url, {}, "GET");
  return data;
};

export const getPokemonDetailsService = async (
  pokemonId: string
): Promise<IPokemonDetailsResponse> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const { data } = await apiManager.request(url, {}, "GET");
  return data;
};
