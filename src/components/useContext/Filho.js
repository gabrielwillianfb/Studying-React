import { useContext } from "react";
import { MyContext } from "./Contexto";

const MyChildren = () => {
    const context = useContext(MyContext);
    return (
        <div>
            <h1>{context.name}</h1>
        </div>
    );
}

export default MyChildren;