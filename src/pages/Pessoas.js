import React from 'react'
import { getPeople } from '../store/actions/Pessoa';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import CardPeople from '../components/cardPeople/CardPeople';
import { apiMaicon } from '../api';
import { useNavigate } from 'react-router';

const Pessoas = ({ people, dispatch }) => {

  const navigate = useNavigate();

  useEffect(() => {
    getPeople(dispatch);
  }, [])

  const deletePeople = async (idPessoa) => {
    await apiMaicon.delete(`/pessoa/${idPessoa}`);
    getPeople(dispatch);
  }

  const setAdd = () => {
    dispatch({
      type: 'SET_ADD',
      addOrEdit: 'add'
    })
    navigate('/addandedit')
  }

  const setEdit = (peopleEdit) => {
    dispatch({
      type: 'SET_EDIT',
      cpf: peopleEdit.cpf,
      dataNascimento: peopleEdit.dataNascimento,
      email: peopleEdit.email,
      nome: peopleEdit.nome,
      idPessoa: peopleEdit.idPessoa,
      addOrEdit: 'edit'
    })
    navigate('/addandedit')
  }

  return (
    <div className='container'>
      <div className='content'>
        <div className='pessoa'>
          <div className='header'>
            <h1>Lista de Pessoas</h1>
            <button onClick={()=> setAdd()}>Add</button>
          </div>
          {
            people.listPeople &&
          people.listPeople.map(people => (
            <CardPeople key={people.idPessoa} people={people} deletePeople={deletePeople} setEdit={setEdit}/>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToPros = state => ({
  people: state.pessoaReducer.people
})

export default connect(mapStateToPros)(Pessoas);
