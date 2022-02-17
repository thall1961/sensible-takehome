export const inputTypes: string[] = ["text", "radio"];
export const radioContent = [
  {id: "co", content: "Snowmass, CO", lat: "39.2130", long: "-106.9378"},
  {id: "ca", content: "Malibu, CA", lat: "34.0259", long: "-118.7798"},
  {id: "ny", content: "Catskill, NY", lat: "42.2146", long: "-73.9595"},
  {
    id: "wy",
    content: "Grand Teton National Park, WY",
    lat: "43.7904",
    long: "-110.6818",
  },
  {
    id: "or",
    content: "Columbia River Gorge, OR",
    lat: "45.7253",
    long: "-121.7300",
  },
];
export const fetchConfig: RequestInit = {
  method: 'POST',
  mode: 'same-origin',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer'
};