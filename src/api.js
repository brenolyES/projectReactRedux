import axios from "axios";

export const apiMaicon = axios.create({
  baseURL: 'https://my-application-teste.herokuapp.com'
})

export const apiCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});