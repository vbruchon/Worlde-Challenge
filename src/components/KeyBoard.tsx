import { useKeyboardEvents } from '@/lib/hooks/useKeyboardEvents'
import { KeyButton } from './KeyButton'

export const KeyBoard = () => {
    const alphabet = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
    const keys = [...alphabet, 'Enter', 'Backspace']
    useKeyboardEvents()

    return (
        <div className="flex max-w-2xl flex-wrap justify-center gap-1.5">
            {keys.map((key, index) => (
                <KeyButton value={key} key={index} />
            ))}
        </div>
    )
}
