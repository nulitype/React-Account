import axios from 'axios';

const api = process.env.REACT_APP_RECORDS_API_URL || "https://5b35d7606005b00014c5dc67.mockapi.io";

export const getAll = () => 
  axios.get(`${api}/records`)

export const create = (body) => 
  axios.post(`${api}/records`, body)

export const update = (id, body) => {
  console.log(`${api}/records/${id}`);
  console.log(JSON.stringify(body));
  return axios.put(`${api}/records/${id}`, body)
}

export const remove = (id) => {
  console.log(`${api}/records/${id}`);
  return axios.delete(`${api}/records/${id}`)
}