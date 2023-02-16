import react,{ useCallback } from 'react';
import ReactFlow, {
  Background, Controls, Position, Node, useEdgesState,useNodesState, addEdge,Connection,ConnectionMode, Edge
} from 'reactflow';
import { Quadrado } from './components/Nodes/quadrado';
import DefaultEdge from './components/Edge/DefaultEdge';
import * as Toolbar from '@radix-ui/react-toolbar';

import 'reactflow/dist/style.css';



const NODE_TYPES = {
  quadrado: Quadrado
}

const EDGE_TYPES = {
  default: DefaultEdge
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
  


function WhiteBoard() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [nodes,setNodes,onNodesChange] = useNodesState(INITIAL_NODES)
  console.log(edges);
 
  const onConnect = useCallback((connection: Connection)=> {
    return setEdges(edges => addEdge(connection,edges))
  },[])

  function addSquare(){
    setNodes(nodes =>[
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'quadrado',
        position: {
          x:750,
          y:600,
        },
        data: {},
      }
    ])
  }
  return (
    
    <div className='box w-[100%] h-[650px]'>
      <ReactFlow
      nodeTypes={NODE_TYPES}
      edgeTypes={EDGE_TYPES}
      nodes={nodes}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      onConnect={onConnect}
      connectionMode={ConnectionMode.Loose}
      defaultEdgeOptions={{
        type:"default"
      }}
      >
          <Background 
          gap={20}
          size={2}
          color="#07303d"
          />
          <Controls />
      </ReactFlow>

      <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-400 px-10 h-20 w-90 overflow-hidden">
        <Toolbar.Button onClick={addSquare} className='h-20 w-20 bg-blue-500 transition-transform hover:-translate-y-2'>
          ADD
        </Toolbar.Button>
      </Toolbar.Root>
    </div>
   
  )
}

export default WhiteBoard
