import react,{ useCallback } from 'react';
import WhiteBoard from './WhiteBoard';


function App() {
 return (
  <div className='main'>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5 text-center ">
       Bem vindo Ao projeto White Board 
      </p>
    </div>
    <p className='text-2xl text-gray-700 font-bold mb-5 text-center'>
      O objetivo deste projeto é criar uma plataforma interativa onde os usuários possam desenhar e conectar diferentes elementos (nodos) na tela, como quadrados. O componente ReactFlow está sendo usado para gerenciar o estado e a lógica de conexão entre os nodos, enquanto Taiwind e PostCSS estão sendo usados para garantir uma experiência de usuário elegante e responsiva. Este projeto é uma solução interessante e eficiente para várias necessidades, como brainstorming, apresentações e diagramação.
    </p>
    <div className='container mx-auto border p-8 m-10' >
      <WhiteBoard />
    </div>
  </div>
 )
}

export default App
