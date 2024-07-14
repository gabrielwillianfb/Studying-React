import { useState } from "react"; // Importa o hook useState da biblioteca React

function Counter() {
  // Declara uma variável de estado chamada 'count' e uma função 'setCount' para atualizá-la
  // useState(0) inicializa 'count' com o valor 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Counter;
