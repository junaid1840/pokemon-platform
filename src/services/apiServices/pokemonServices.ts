import { apiManager } from "../api-manager/apiManager";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";
import { IPokemonListResponse } from "../../redux/interfaces/pokemon/pokemonServiceInterfaces";

export const getPokemonListService = async (
  offsetParams: string
): Promise<IPokemonListResponse> => {
  const url = `https://pokeapi.co/api/v2/pokemon/?${offsetParams}`;
  const { data } = await apiManager.request(url, {}, "GET");
  return data;
};

export const failureService = async (): Promise<iApiResponse> => {
  const url = `https://3d048452-563b-44d1-8005-758190e56bb1.mock.pstmn.io/failed`;
  const { data } = await apiManager.request(url, {}, "GET");
  return data;
};
