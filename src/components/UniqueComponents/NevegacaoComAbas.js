import { useState } from "react"; // Importa o hook useState da biblioteca React

const conteudos = [
  ["Conteúdo 0", "Conteúdo 1", "Conteúdo 2"],
  ["Conteúdo 3", "Conteúdo 4", "Conteúdo 5"],
  ["Conteúdo 6", "Conteúdo 7", "Conteúdo 8"],
];

function NavegacaoComAbas() {
  const [estadoAtual, setEstado] = useState(0);

  return (
    <>
      <div>
        <header>
          <img src="" alt="" /> {/* Imagem do cabeçalho (não especificada) */}
          <h1>Aula +praTi - React</h1>
          <p>Navegação com abas sem recarregar a página</p>
        </header>
      </div>

      <div id="abas">
        <nav>
          <button onClick={() => setEstado(0)}>Link 1</button>
          <button onClick={() => setEstado(1)}>Link 2</button>
          <button onClick={() => setEstado(2)}>Link 3</button>
        </nav>
      </div>

      <div id="conteudo">
        <ul>
          {conteudos[estadoAtual].map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavegacaoComAbas;
