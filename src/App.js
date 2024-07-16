import HelloWorld from "./components/UniqueComponents/HelloWorld";
import BookDetails from "./components/UniqueComponents/BookDetails";
import Counter from "./components/UniqueComponents/Counter";
import MirrorText from "./components/UniqueComponents/MirrorText";
import ToDoList from "./components/UniqueComponents/ToDoList";
import NavegacaoComAbas from "./components/UniqueComponents/NevegacaoComAbas";
import TimerComponent from "./components/UniqueComponents/LifeCycle";
import UseEffectDefinition from "./components/UniqueComponents/LifeCycle2";
import NewsUpdater from "./components/UniqueComponents/NewsUpdater";
import UserProfile from "./components/UniqueComponents/User";
import StdForm from "./components/UniqueComponents/Form";
import Form2 from "./components/UniqueComponents/Form2";
import RegistrationForm from "./components/UniqueComponents/Form3";
import MyChildren from "./components/lesson7/Filho";
import { MyProvider } from "./components/lesson7/Contexto";
import { useState, createContext, useContext } from "react";

const item = {
  author: "Gabriel",
  favoriteBook: "A ciência do sucesso - Napoleon Hill",
};

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
      <NavegacaoComAbas />
      <hr></hr>
      <TimerComponent />
      <hr></hr>
      <UseEffectDefinition />
      <hr></hr>
      <NewsUpdater />
      <hr></hr>
      <UserProfile />
      <hr></hr>
      <StdForm />
      <hr></hr>
      <Form2 />
      <hr></hr>
      <RegistrationForm />
      <hr></hr>
      <MyProvider>
        <MyChildren />
      </MyProvider>
      <hr></hr>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Toolbar />
        <button onClick={toggleTheme}>Mudar tema</button>
      </ThemeContext.Provider>
    </>
  );
}

function Toolbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "gray" : "blue",
        color: theme === "dark" ? "white" : "white",
      }}
    >
      Tema utilizado - {theme}
    </div>
  );
}

export default App;
