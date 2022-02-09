import './item.css';
import { FaBriefcase } from 'react-icons/fa';

const titulo = [
  "Profissional", 
  "Reguladore",
  "Sócio Ambiental",
  "Jurídico"
]
const item = "FaBriefcase"

function Item() {
  return (
    <div className="Item">
      <div className="icon"><FaBriefcase/></div>      
      <div className="titulo">Profissional</div>  
      <div className="descricao">O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são publicados nos Diários Oficiais de 
      empresas S.A. de capital aberto e limitadas (LTDA) de grande porte.</div>
      <div className="line">
        <div className="preco">R$29,99</div>
        <div className="saiba-mais">Saiba mais</div>
      </div>
    </div>
    
  );
}

export default Item;