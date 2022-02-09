import './pagina-inicial.css';
import header from './imagens/header.jpg'
import logo from './imagens/logo.png'
import { BsGlobe } from 'react-icons/bs';
import { FaBriefcase } from 'react-icons/fa';
import { BsFillTreeFill } from 'react-icons/bs';
import { ImHammer2 } from 'react-icons/im';
import { ImBlocked } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';
import { GiCutDiamond } from 'react-icons/gi';
import { FaMale } from 'react-icons/fa';
import { AiFillBank } from 'react-icons/ai';
import { FaPiggyBank } from 'react-icons/fa';



function App() {
  return (
    <div className="App">      
      <div className="header">
        <div className="logo">
          <img src={logo}/>
          <div className="historico_empresarial">
            <p> | Histórico Empresarial</p>
          </div>
          <div className="descricao_header">
          <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos</p> 
          <p>os fatos e acontecimentos relevantes de uma empresa desde o seu ano</p>
          <p>de fundação</p>
        </div>
        </div>
        
        <div className="container">
          <img src={header} />
        </div>        
      </div>
      <div className="preco_header">
          <div className="simbolo">R$ </div>
          <div className="valor"> 40,00</div>
        </div>
      <div className="sabia_mais_header">Saiba mais</div>
      <ul className="social_list">
        <li>
          <BsGlobe/>
          <p>Todos</p>
        </li>
        <li>
          <FaBriefcase/>
          <p>Profissional</p>
        </li>
        <li>
          <AiFillBank/>
          <p>Reguladores</p>
        </li>
        <li>
          <BsFillTreeFill/>
          <p>Socio Ambiental</p>
        </li>
        <li>
          <ImHammer2/>
          <p>Jurídico</p>
        </li>
        <li>
          <ImBlocked/>
          <p>Listas Restritivas</p>
        </li>
        <li>
          <BiWorld/>
          <p>Mídia/Internet</p>
        </li>
        <li>
          <GiCutDiamond/>
          <p>Bens e Imóveis</p>
        </li>
        <li>
          <FaMale/>
          <p>Cadastro</p>
        </li>
        <li>
          <FaPiggyBank/>
          <p>Financeiro</p>
        </li>
      </ul>
      <div className="selection">
          <p>ORDENAR</p>
          <select name="ordenar" id="">
            <option value="">Lançamento</option>
            <option value="">Valor</option>
            <option value="">Nome</option>
          </select>
      </div>
    </div>    
    );
}

export default App;
