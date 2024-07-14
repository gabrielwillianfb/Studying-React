// Define um componente funcional chamado BookDetails que recebe um objeto props como argumento e o desestrutura.
function BookDetails({ author, favoriteBook }) {
  return (
    <div>
      {/* Renderiza um parágrafo com o autor recebido via props */}
      <p>Nome: {author}</p>

      {/* Renderiza um parágrafo com o livro favorito recebido via props */}
      <p>Livro favorito: {favoriteBook}</p>
    </div>
  );
}
export default BookDetails;
