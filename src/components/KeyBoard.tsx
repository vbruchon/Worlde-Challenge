import { useKeyboardEvents } from '@/lib/hooks/useKeyboardEvents'
import { KeyButton } from './KeyButton'
import { useGame } from '@/lib/store/useGame'

export const KeyBoard = () => {
    const alphabet = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
    const keys = [...alphabet, 'Enter', 'Backspace']
    const { word } = useGame()
    useKeyboardEvents(word)

    return (
        <div
            id="keyBoard"
            className="flex max-w-2xl flex-wrap justify-center gap-1.5"
        >
            {keys.map((key, index) => (
                <KeyButton value={key} key={index} />
            ))}
        </div>
    )
}
