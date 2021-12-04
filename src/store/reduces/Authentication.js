const INICIAL_STATE = {
  auth: {
    token: '',
    auth: false,
    loading: true
  }
}

const authenticationReducer = (state = INICIAL_STATE, action) => {
  if(action.type === 'SET_LOGIN'){
    return {
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading
      }
    }
  }
  if(action.type === 'SET_LOGOUT'){
    return {
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading
      }
    }
  }
  return state
}

export default authenticationReducer;