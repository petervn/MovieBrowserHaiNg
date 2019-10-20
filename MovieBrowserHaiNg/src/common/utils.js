import CONSTANTS from '../constants';
export const getImage = backdropPath => {
  return backdropPath
    ? {uri: `${CONSTANTS.URL.IMAGE_URL}${backdropPath}`}
    : {uri: `${CONSTANTS.URL.PLACEHOLDER_IMAGE}${backdropPath}`};
};

export const convertMinsToHrsMins = minutes => {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return h + 'h: ' + m + ' minutes';
};
