import { apiMaicon } from "../../api";

// listPessoasParametro

export const getPeople = async (dispatch) => {
  const { data } = await apiMaicon.get('/pessoa')
  const People = {
    type: 'SET_LISTPEOPLE',
    listPeople: data
  }
  dispatch(People);
}

export const deletePeople = async (idPessoa, dispatch) => {
  const { data } = await apiMaicon.delete(`/pessoa/${idPessoa}`)
}

export const postPeople = async (values, navigate)=> {
  await apiMaicon.post('/pessoa', values);
  navigate('/pessoa')
}