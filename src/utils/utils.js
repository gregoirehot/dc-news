export const addIdToElement = (array) => {
  array && array.forEach((element, i) => (element.id = i + 1));
  return array;
};
