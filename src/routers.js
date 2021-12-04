import React from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NotFound from './pages/NotFound';
import Pessoas from './pages/Pessoas';
import Endereco from './pages/Endereco';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiMaicon } from './api';
import AddAndEdit from './pages/AddAndEdit';


const Routers = ({auth, dispatch}) => {

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token !== null){
      apiMaicon.defaults.headers.common['Authorization']= token;
      dispatch({
        type: 'SET_LOGIN',
        token: localStorage.getItem('token'),
        auth: true,
        loading: false
      })
    }
  },[])

  return (
    <div>
      <BrowserRouter>
          <Header/>
          {auth.auth ?
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/pessoa" element={<Pessoas/>} />
            <Route path="/endereco" element={<Endereco/>} />
            <Route path='/addandedit' element={<AddAndEdit/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          :
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          }
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.authenticationReducer.auth
})

export default connect(mapStateToProps) (Routers);
