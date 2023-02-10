import { Handle, NodeProps, Position } from "reactflow";

export function Quadrado(props: NodeProps)
{
    return (
        <div className="bg-blue-500 rounded w-[200px] h-[200px]">
            <Handle id="right" type="source" position={Position.Right} />
            <Handle id="left" type="source" position={Position.Left} />
            <Handle id="bottom" type="source" position={Position.Bottom} />
            <Handle id="top" type="source" position={Position.Top} />
        </div>
    )
} 