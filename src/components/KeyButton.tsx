import { CornerDownLeft, Delete } from 'lucide-react'
import { Square } from './Square'

export type KeyButtonProps = {
    value: string
}

export const KeyButton = ({ value }: KeyButtonProps) => {
    const defineKeyValue = (value: string) => {
        if (value === 'enter') {
            return <CornerDownLeft />
        }
        if (value === 'backspace') {
            return <Delete />
        }
        return value
    }
    return (
        <button onClick={() => console.log(value)}>
            <Square
                key={value}
                value={defineKeyValue(value)}
                className=" bg-slate-800 transition-all hover:scale-110"
            />
        </button>
    )
}
