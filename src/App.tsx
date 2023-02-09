import { useCallback } from 'react';
import ReactFlow, {
  Background,
} from 'reactflow';


function App() {
  return (
    <ReactFlow>
    <div style={{ backgroundColor: 'white' ,width: '100vw', height: '100vh'}}>
      <Background 
       gap={20}
       size={2}
       color="#07303d"
       />
    </div>
    </ReactFlow>
  )
}

export default App
