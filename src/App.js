import HelloWorld from "./components/UniqueComponents/HelloWorld";
import BookDetails from "./components/UniqueComponents/BookDetails";
import Counter from "./components/UniqueComponents/Counter";
import MirrorText from "./components/UniqueComponents/MirrorText";
import ToDoList from "./components/UniqueComponents/ToDoList";

const item = {
  author: "Gabriel",
  favoriteBook: "A ciência do sucesso - Napoleon Hill",
};

function App() {
  return (
    <>
      <HelloWorld />
      <hr></hr>
      {/* Passa o objeto item desestruturado como props para o componente BookDetails */}
      <BookDetails author={item.author} favoriteBook={item.favoriteBook} />
      <hr></hr>
      <Counter />
      <hr></hr>
      <MirrorText />
      <hr></hr>
      <ToDoList />
      <hr></hr>
    </>
  );
}

export default App;
