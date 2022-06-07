export const getPokemonIdFromUrl = (url: string): string => {
  const urlSplitArray = url.split("/");
  return urlSplitArray[urlSplitArray.length - 2];
};
