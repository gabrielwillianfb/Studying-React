import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
      const userData = await response.json();
      setUser(userData);
    };
    fetchUserData();

    // A função de limpeza é retornada e será chamada quando o componente for desmontado
    return () => setUser(null);
  }, []); // O array vazio garante que o efeito só será executado uma vez, após a montagem do componente

  return (
    <div>
      {/* Se 'user' não for null, exibe os dados do usuário */}
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>
      ) : (
        <p>Carregando perfil de Usuário</p>
      )}
    </div>
  );
}

export default UserProfile;
