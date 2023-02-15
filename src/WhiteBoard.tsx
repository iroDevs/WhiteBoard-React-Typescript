import react,{ useCallback } from 'react';
import ReactFlow, {
  Background, Controls, Position, Node, useEdgesState,useNodesState, addEdge,Connection,ConnectionMode, Edge
} from 'reactflow';
import { Quadrado } from './components/Nodes/quadrado';
import DefaultEdge from './components/Edge/DefaultEdge';

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
  return (
    
    <div className='w-[100%] h-[600px]'>
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
    </div>
   
  )
}

export default WhiteBoard
