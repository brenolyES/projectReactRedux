import { apiCep } from "../../api";

export const getCep = async (cep, dispatch) => {
  const { data } = await apiCep.get(`${cep}/json`)
  const setCep = {
    type: "SET_CEP",
    cepJson: data
  }
  dispatch(setCep);
}