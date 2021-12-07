const INICIAL_STATE = {
  cep: {
    cepJson: []
  }
}

const cepReducer = (state = INICIAL_STATE, action) => {
  if(action.type === "SET_CEP"){
    return{
      cep: {
        cepJson: action.cepJson
      }
    }
  }
  return state;
}

export default cepReducer;