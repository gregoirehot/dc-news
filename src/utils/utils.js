import moment from "moment";
import "moment/locale/fr";

export const addIdToElement = (array) => {
  array && array.forEach((element, i) => (element.id = i + 1));
  return array;
};

export const getDescription = (description) => {
  return `${description ? description.slice(0, 200) : ""}...`;
};

export const getHoureSince = (date) => {
  if (date) {
    const sinceHoure = moment(date).fromNow();
    return sinceHoure;
  }
  return "";
};
