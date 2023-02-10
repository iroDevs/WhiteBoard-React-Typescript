import react,{ useCallback } from 'react';
import ReactFlow, {
  Background, Controls, Position, Node, useEdgesState, addEdge,Connection,ConnectionMode, Edge
} from 'reactflow';
import { Quadrado } from './components/Nodes/quadrado';


import 'reactflow/dist/style.css';


const NODE_TYPES = {
  quadrado: Quadrado
}

const INITIAL_NODES = [
  {
    id: 'quadrado-1',
    type: 'quadrado',
    position: {
      x:200,
      y:400,
    },
    data: {},
  }, 
  {
    id: 'quadrado-2',
    type: 'quadrado',
    position: {
      x:1000,
      y:400,
    },
    data: {},
  },
] satisfies Node[]
  


function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  console.log(edges);
 
  const onConnect = useCallback((connection: Connection)=> {
    return setEdges(edges => addEdge(connection,edges))
  },[])
  return (
    
    <div className='w-screen h-screen'>
      <ReactFlow
      nodeTypes={NODE_TYPES}
      nodes={INITIAL_NODES}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      connectionMode={ConnectionMode.Loose}
      >
          <Background 
          gap={20}
          size={2}
          color="#07303d"
          />
          <Controls />
      </ReactFlow>
    </div>
   
  )
}

export default App
