import { getPokemonIdFromUrl } from "./commonUtils";
const testData = [
  {
    input: "https://pokeapi.co/api/v2/pokemon/1/",
    output: "1",
  },
  {
    input: "https://pokeapi.co/api/v2/pokemon/2/",
    output: "2",
  },
  {
    input: "https://pokeapi.co/api/v2/pokemon/3/",
    output: "3",
  },
  {
    input: "https://pokeapi.co/api/v2/pokemon/4/",
    output: "4",
  },
];
describe("Common Utils - ", () => {
  it("getPokemonIdFromUrl return correct Id from given url", async () => {
    testData.forEach((item) => {
      expect(getPokemonIdFromUrl(item.input)).toEqual(item.output);
    });
  });
});
