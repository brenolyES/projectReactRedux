import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { handleLogin } from '../store/actions/Authentication';

const Login = ({ auth, dispatch }) => {

  const formik = useFormik({
    initialValues: {
      usuario: '',
      senha: ''
    },
    onSubmit: values => {
      handleLogin(values, dispatch)
    },
  });

  if(localStorage.getItem('token')){
    return(window.location.href = '/pessoa');
  }

  return (
    <div className='container'>
      <div className='content'>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="usuario">Nome de usuario</label>
            <input id="usuario" name="usuario" type="text" onChange={formik.handleChange} value={formik.values.usuario} />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input id="senha" name="senha" type="text" onChange={formik.handleChange} value={formik.values.senha} />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.authenticationReducer.auth
})

export default connect(mapStateToProps)(Login);