// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react";

function NewsUpdater() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define uma função assíncrona para buscar notícias
    const fetchNews = async () => {
      // Define 'isLoading' como true para indicar que os dados estão sendo carregados
      setIsLoading(true);

      try {
        // Faz uma requisição para a API e espera pela resposta
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        // Atualiza o estado 'news' com os primeiros 5 itens do array de dados recebidos
        setNews(data.slice(0, 5));
      } catch (error) {
        console.error("Ligue pro suporte", error);
      }
      // Define 'isLoading' como false para indicar que os dados foram carregados
      setIsLoading(false);
    };
    fetchNews();

    // Configura um intervalo para buscar notícias a cada 30 segundos
    const interval = setInterval(fetchNews, 30000);

    // A função de limpeza é retornada e será chamada quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // O array vazio como segundo argumento garante que o efeito só será executado uma vez, após a montagem do componente

  return (
    <div>
      <h1>Últimas Notícias Simuladas</h1>
      {isLoading ? (
        <p>Carregando notícias</p>
      ) : (
        <ul>
          {news.map((article) => (
            <li key={article.id}>
              <p>{article.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsUpdater;
