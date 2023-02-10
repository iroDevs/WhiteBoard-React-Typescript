import { useCallback } from 'react';
import ReactFlow, {
  Background, Controls,
} from 'reactflow';

import 'reactflow/dist/style.css';



function App() {
  return (
    
      <ReactFlow>
    <div className='w-screen h-screen'>
      <Background 
       gap={20}
       size={2}
       color="#07303d"
       />
      <Controls />
    </div>
    </ReactFlow>
   
  )
}

export default App
