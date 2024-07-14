const books = ["O Hobbit", "Harry Potter"];

function HelloWorld() {
  const chosenBook = Math.random() > 0.5 ? books[0] : books[1];
  return (
    <div>
      <h1>Hello world</h1>
      <p>Livro escolhido aleatóriamente: {chosenBook}</p>
    </div>
  );
}

export default HelloWorld;
