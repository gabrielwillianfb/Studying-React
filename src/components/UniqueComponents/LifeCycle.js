import { useState, useEffect } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);

  // useEffect é um hook que executa um efeito colateral
  // O efeito aqui é iniciar um temporizador que incrementa 'count' a cada segundo
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
      console.log("Timer foi limpo");
    };
  }, []);
  // O array vazio como segundo argumento garante que o efeito só será executado uma vez, após a montagem do componente

  // Renderiza um elemento <h1> que exibe o valor atual de 'count'
  return <h1>{count}</h1>;
}

export default TimerComponent;
