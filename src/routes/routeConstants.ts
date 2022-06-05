export const ROUTES = {
  HOME_PAGE: "/",
  POKEMON_LIST: "/pokemon-list",
  MY_POKEMON: "/my-pokemon",
  POKEMON_DETAILS: (id = ":id"): string => `/pokemon-details/${id}`,
};
