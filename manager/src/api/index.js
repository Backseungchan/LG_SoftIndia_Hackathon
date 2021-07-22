import axios from "axios";

export const getData = () => axios.get('https://digital-signage-lgsi.herokuapp.com/data');

export const createData = (data) => axios.post('https://digital-signage-lgsi.herokuapp.com/data', data);

export const deleteData = (id) => axios.delete(`https://digital-signage-lgsi.herokuapp.com/data/${id}`);

export const getImageOCR = (data) => axios.post('http://220.66.218.240:8000/detail', data);
