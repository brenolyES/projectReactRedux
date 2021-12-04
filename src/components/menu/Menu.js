import styles from './Menu.module.css'
import { Link } from "react-router-dom";
import { handleLogout } from '../../store/actions/Authentication';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

const Menu = ({ auth, dispatch }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to='/' >Inicio</Link></li>
        <li><Link to='/login' >Entrar</Link></li>
        {auth.auth ?
          <>
            <li><Link to='/pessoa' >Pessoas</Link></li>
            <li><Link to='/endereco' >Endereço</Link></li>
            <li><button onClick={() => handleLogout(dispatch, navigate)} className={styles.sair}>Sair</button></li>
          </>
          : null}
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  auth: state.authenticationReducer.auth
})

export default connect(mapStateToProps)(Menu);
