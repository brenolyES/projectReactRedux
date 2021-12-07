const INICIAL_STATE = {
  people: {
    listPeople: [],
    cpf: '',
    dataNascimento: '',
    email: '',
    nome: '',
    idPessoa: 0,
    addOrEdit: true
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
  if(action.type === 'SET_ADD'){
    return {
      people: {
        addOrEdit: action.addOrEdit
      }
    }
  }
  if(action.type === 'SET_EDIT'){
    return {
      people: {
        cpf: action.cpf,
        dataNascimento: action.dataNascimento,
        email: action.email,
        nome: action.nome,
        idPessoa: action.idPessoa,
        addOrEdit: action.addOrEdit
      }
    }
  }
  return state;
}

export default pessoaReducer;