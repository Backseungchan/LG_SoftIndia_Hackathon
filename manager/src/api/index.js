import axios from "axios";

const API = axios.create({ baseURL: 'https://digital-signage-lgsi.herokuapp.com/' });

export const getData = () => API.get('/data');
export const createData = (data) => API.post('/data', data);