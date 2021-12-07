import React from 'react'
import { connect } from 'react-redux';
import { getCep } from '../store/actions/Cep';
import { Formik, Field, Form } from 'formik';

const Endereco = ({ cep, dispatch }) => {
  return (
    <div className='container'>
      <div className='content'>
        <h1>Endereço</h1>
        <Formik
          initialValues={{
            cep: '',
            cidade: '',
            complemento: '',
            estado: '',
            logradouro: '',
            numero: '',
            pais: '',
            tipo: ''
          }}
          onSubmit={(values) => {

          }}
        >
          {props => (
            <Form>
              <div>
                <label htmlFor="cep">Cep </label>
                <Field id="cep" name="cep" placeholder="cep" />
                <button onClick={()=>getCep(props.values.cep, dispatch)}>Pesquisar</button>
              </div>
              <div>
                <label htmlFor="cidade">Cidade </label>
                <Field id="cidade" name="cidade" placeholder="cidade" value={cep.cepJson.localidade}/>
              </div>
              <div>
                <label htmlFor="complemento">Complemento </label>
                <Field id="complemento" name="complemento" placeholder="complemento" value={cep.cepJson.complemento}/>
              </div>
              <div>
                <label htmlFor="estado">Estado </label>
                <Field id="estado" name="estado" placeholder="estado" value={cep.cepJson.uf}/>
              </div>
              <div>
                <label htmlFor="logradouro">Logradouro </label>
                <Field id="logradouro" name="logradouro" placeholder="logradouro" value={cep.cepJson.logradouro}/>
              </div>
              <div>
                <label htmlFor="numero">Número </label>
                <Field id="numero" name="numero" placeholder="numero"/>
              </div>
              <div>
                <label htmlFor="pais">Pais </label>
                <Field id="pais" name="pais" placeholder="pais"/>
              </div>
              <div>
                <label htmlFor="tipo">Tipo </label>
                <Field id="tipo" name="tipo" placeholder="tipo"/>
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cep: state.cepReducer.cep
})

export default connect(mapStateToProps)(Endereco);
