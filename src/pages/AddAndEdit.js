import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { postPeople } from '../store/actions/Pessoa';
import { putPeople } from '../store/actions/Pessoa';
import { useNavigate } from 'react-router';

const AddAndEdit = ({ people, dispatch }) => {

  const navigate = useNavigate();
  let AddAndEdit = ''

  const Condition = () => {
    AddAndEdit = people.addOrEdit
    const idPeople = people.idPessoa
    if (AddAndEdit === 'edit') {
      return (
        <>
          <h1>Editar</h1>
          <Formik
            initialValues={{
              nome: people.nome,
              email: people.email,
              cpf: people.cpf,
              dataNascimento: people.dataNascimento
            }}
            onSubmit={(values) => {
              putPeople(values, navigate, idPeople);
            }}
          >
            <Form>
              <label htmlFor="nome">Nome </label>
              <Field id="nome" name="nome" placeholder="Nome" />

              <label htmlFor="email">E-mail</label>
              <Field id="email" name="email" placeholder="E-mail" />

              <label htmlFor="cpf">CPF</label>
              <Field id="cpf" name="cpf" placeholder="CPF" />

              <label htmlFor="dataNascimento">Data Nacimento</label>
              <Field id="dataNascimento" name="dataNascimento" placeholder="Data Nacimento" />
              
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </>
      );









    } else if (AddAndEdit === 'add') {
      return (
        <>
          <h1>Adicionar</h1>
          <Formik
            initialValues={{
              nome: '',
              email: '',
              cpf: '',
              dataNascimento: ''
            }}
            onSubmit={(values) => {
              postPeople(values, navigate);
            }}
          >
            <Form>
              <label htmlFor="nome">Nome </label>
              <Field id="nome" name="nome" placeholder="Nome" />

              <label htmlFor="email">E-mail</label>
              <Field id="email" name="email" placeholder="E-mail" />

              <label htmlFor="cpf">CPF</label>
              <Field id="cpf" name="cpf" placeholder="CPF" />

              <label htmlFor="dataNascimento">Data Nacimento</label>
              <Field id="dataNascimento" name="dataNascimento" placeholder="Data Nacimento" />
              
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </>
      );

    } else {
      return (
        <>
          {window.location.href = '/pessoa'}
        </>
      );
    }
  }

  return (
    <div className='container'>
      <div className='content'>
        {Condition()}
      </div>
    </div>
  )
}

const mapStateToPros = state => ({
  people: state.pessoaReducer.people
})

export default connect(mapStateToPros)(AddAndEdit);
