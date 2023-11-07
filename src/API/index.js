export const getAllData = () => {
  return fetch("https://api.nilu.no/aq/utd/").then((res) => res.json());
};

export const getDataPm10 = () => {
  return fetch("https://api.nilu.no/obs/utd?areas=bergen;trondheim&components=pm10").then((res) => res.json());
};

export const getStationId = () => {
  return fetch("https://api.nilu.no/aq/utd?station=STATION_ID").then((res) => res.json());
};

export const getStationNames = () => {
  return fetch("https://api.nilu.no/lookup/stations").then((res) => res.json());
};
export const getFilter4 = () => {
  return fetch("https://api.nilu.no/aq/utd/").then((res) => res.json());
};
