import { iRoutes } from "./routesInterface";
import { Home } from "../pages/home/Home";
import { ROUTES } from "./routeConstants";
import { PokemonList } from "../pages/pokemon-list/PokemonList";
import { MyPokemon } from "../pages/my-pokemon/MyPokemon";
import { PokemonDetails } from "../pages/pokemon-details/PokemonDetails";

const { HOME_PAGE, POKEMON_LIST, MY_POKEMON, POKEMON_DETAILS } = ROUTES;

export const routes: iRoutes[] = [
  {
    path: HOME_PAGE,
    exact: true,
    component: Home,
  },
  {
    path: POKEMON_LIST,
    exact: true,
    component: PokemonList,
  },
  {
    path: MY_POKEMON,
    exact: true,
    component: MyPokemon,
  },
  {
    path: POKEMON_DETAILS(),
    exact: true,
    component: PokemonDetails,
  },
];
