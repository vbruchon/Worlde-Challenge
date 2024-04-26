import { useKeyboardEvents } from '@/lib/hooks/useKeyboardEvents'
import { KeyButton } from './KeyButton'

export const KeyBoard = ({ secretWord }: { secretWord: string }) => {
    const alphabet = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
    const keys = [...alphabet, 'Enter', 'Backspace']
    useKeyboardEvents(secretWord)

    return (
        <div
            id="keyBoard"
            className="flex max-w-2xl flex-wrap justify-center gap-1.5"
        >
            {keys.map((key, index) => (
                <KeyButton value={key} key={index} secretWord={secretWord} />
            ))}
        </div>
    )
}
