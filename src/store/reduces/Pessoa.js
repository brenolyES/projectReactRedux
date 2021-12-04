const INICIAL_STATE = {
  people: {
    listPeople: [],
    addOrEdit: 'nada'
  },
  peopleDTO: {
    cpf: '',
    dataNascimento: '',
    email: '',
    nome: ''
  }
}


const pessoaReducer = (state = INICIAL_STATE, action) => {
  if(action.type === 'SET_LISTPEOPLE'){
    return {
      people: {
        listPeople: action.listPeople
      }
    }
  }
  if(action.type === 'SET_ADDOREDIT'){
    return {
      people: {
        addOrEdit: action.addOrEdit
      }
    }
  }
  return state;
}

export default pessoaReducer;