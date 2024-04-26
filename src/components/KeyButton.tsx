import { CornerDownLeft, Delete } from 'lucide-react'
import { Square } from './Square'
import { useUpdateBoard } from '@/lib/hooks/useUpdateBoard'

export type KeyButtonProps = {
    value: string
    secretWord: string
}

export const KeyButton = ({ value, secretWord }: KeyButtonProps) => {
    const defineKeyValue = (value: string) => {
        if (value === 'Enter') {
            return <CornerDownLeft />
        }
        if (value === 'Backspace') {
            return <Delete />
        }
        return value
    }
    const { updateBoard } = useUpdateBoard({
        newKey: value,
        secretWord: secretWord,
    })

    return (
        <button
            onClick={() => updateBoard()}
            className="relative flex size-14 items-center justify-center overflow-hidden rounded-sm border text-2xl font-black"
        >
            <Square
                squareId={value}
                key={value}
                value={defineKeyValue(value)}
                className="bg-slate-800 transition-all hover:scale-110"
            />
            <div id={'animated-bg-key-' + value} className=""></div>
        </button>
    )
}
