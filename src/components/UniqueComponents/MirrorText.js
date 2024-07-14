import { useState } from "react"; // Importa o hook useState da biblioteca React

function MirrorText() {
  // Declara uma variável de estado chamada 'text' e uma função 'setText' para atualizá-la
  // useState('') inicializa 'text' com uma string vazia
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Atualiza 'text' conforme o usuário digita
      />
      <p>Você digitou: {text}</p>
    </div>
  );
}

export default MirrorText;
