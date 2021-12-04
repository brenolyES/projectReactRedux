import React from 'react';
import { useNavigate } from 'react-router';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='content'>
        <h1>home</h1>
        <button onClick={() => navigate('/login')}>Iniciar</button>
      </div>
    </div>
  )
}

export default Home;
