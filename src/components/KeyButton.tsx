import { CornerDownLeft, Delete } from 'lucide-react'
import { Square } from './Square'
import { useUpdateBoard } from '@/lib/hooks/useUpdateBoard'
import { useGame } from '@/lib/store/useGame'

export type KeyButtonProps = {
    value: string
}

export const KeyButton = ({ value }: KeyButtonProps) => {
    const { word } = useGame()
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
        secretWord: word,
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
