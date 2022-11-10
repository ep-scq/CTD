
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import classNames from 'classnames';
import { useState } from "react";
import { Cards } from "./Cards/Cards";
import styles from './styles.module.css';

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState("");
  const [corHexadecimal, setCorHexadecimal] = useState("");
  const [allCores, setAllCores] = useState([]);
  const [erro, setErro] = useState(false);

  const containsNumber = (numero) => { //3. validação de número(color)
    return /[0-9]/.test(numero);
  }

  function validarForms(){
    if(nomeCor === null || nomeCor === undefined) return true;

    var nomeSemEspaco = nomeCor.trim();

    if(nomeSemEspaco.length < 3) return true;

    if (corHexadecimal.length < 6 && !containsNumber(corHexadecimal))return true;

    return false;
  }

  function adicionarCor(event) {
    event.preventDefault()
    let validacao = validarForms();
    const coloracao = {
      nomeCor: nomeCor,
      corHexadecimal: corHexadecimal
    }

    setErro(validacao)

    if (validacao) return;

    setAllCores([...allCores, coloracao])
  }

  return (
    <div className="App">
     <h1>Cores Favoritas</h1>
     <form className="formCadastro"  onSubmit={event => adicionarCor(event)}>

            <input type="text" 
      className="form-control" 
      value={nomeCor} 
      onChange={event => setNomeCor(event.target.value)} 
      placeholder="Entre com o nome da Cor"/>

            <input type="color" 
      className="form-control" 
      value={corHexadecimal} 
      onChange={event => setCorHexadecimal(event.target.value)} 
      placeholder="Escolha a cor"/>

            <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
    <small 
      className={classNames({
          [styles.erro]: erro
      })}
    >
      Por favor, verifique os dados inseridos no formulário
    </small>

     <Cards cores = {allCores}/>

    </div>
  )
  }

export default App