import axios from 'axios';

const API_KEY = '543038ac6ec11c62ded8555f02ceb1bc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},gb`
  const request = axios.get(url, { crossdomain: true })

  console.log('request', request);

  return {
    type: FETCH_WEATHER,
    payload:  request
  };
}
