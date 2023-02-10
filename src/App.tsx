import { useCallback } from 'react';
import ReactFlow, {
  Background, Controls, Position, Node
} from 'reactflow';
import { Quadrado } from './components/Nodes/qaudrado';


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
] satisfies Node[]

function App() {
  return (
    
    <div className='w-screen h-screen'>
      <ReactFlow
      nodeTypes={NODE_TYPES}
      nodes={INITIAL_NODES}
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
