import { CornerDownLeft, Delete } from 'lucide-react'
import { Square } from './Square'
import { useUpdateBoard } from '@/lib/hooks/useUpdateBoard'

export type KeyButtonProps = {
    value: string
}

export const KeyButton = ({ value }: KeyButtonProps) => {
    const defineKeyValue = (value: string) => {
        if (value === 'Enter') {
            return <CornerDownLeft />
        }
        if (value === 'Backspace') {
            return <Delete />
        }
        return value
    }
    const { updateBoard } = useUpdateBoard({ newKey: value })

    return (
        <button onClick={() => updateBoard()}>
            <Square
                key={value}
                value={defineKeyValue(value)}
                className="bg-slate-800 transition-all hover:scale-110"
            />
        </button>
    )
}
