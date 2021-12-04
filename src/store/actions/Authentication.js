import { apiMaicon } from "../../api"

export const handleLogin = async (values, dispatch) => {
  const { data } = await apiMaicon.post(`/auth`, values)
  if (data) {
    localStorage.setItem('token', data)
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
      loading: false
    }
    dispatch(logado)
    window.location.href = '/pessoa';
  } else {
    alert('Erro no login');
  }
}

export const handleLogout = (dispatch, navigate) => {
  const token = localStorage.getItem('token');
  if(token){
    localStorage.removeItem('token')
    const logout = {
      type: 'SET_LOGOUT',
      token: '',
      auth: false,
      loading: true
    }
    dispatch(logout);
    navigate('/login');
  }
}