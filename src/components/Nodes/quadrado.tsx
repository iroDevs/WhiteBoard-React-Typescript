import { Handle, NodeProps, Position } from "reactflow";

export function Quadrado(props: NodeProps)
{
    return (
        <div className="bg-blue-500 rounded w-[200px] h-[200px]">
            <Handle id="right" className="-right-6 w-5 h-5 bg-blue-4000/80" type="source" position={Position.Right} />
            <Handle id="left" className="-left-6 w-5 h-5 bg-blue-4000/80" type="source" position={Position.Left} />
            <Handle id="bottom" className="-bottom-6 w-5 h-5 bg-blue-4000/80" type="source" position={Position.Bottom} />
            <Handle id="top" className="-top-6 w-5 h-5 bg-blue-4000/80" type="source" position={Position.Top} />
        </div>
    )
} 