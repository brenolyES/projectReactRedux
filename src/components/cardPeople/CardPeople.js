import styles from './CardPeople.module.css'
import moment from 'moment';
import { BsPersonCircle } from 'react-icons/bs';

const CardPeople = ({people, deletePeople, setEdit}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div>
          <span className={styles.iconImg}><BsPersonCircle/></span>
          </div>
          <div>
          <p><strong>Nome:</strong> {people.nome}</p>
          <p><strong>E-mail:</strong> {people.email}</p>
          <p><strong>CPF:</strong> {people.cpf}</p>
          <p><strong>Nascimento:</strong> {moment(people.dataNascimento).format('DD/MM/YYYY')}</p>
          </div>
        </div>
        <div className={styles.rigth}>
          <button onClick={()=>deletePeople(people.idPessoa)}>Deletar</button>
          <button onClick={()=>setEdit()}>Editar</button>
        </div>
      </div>
    </div>
  )
}

export default CardPeople;
