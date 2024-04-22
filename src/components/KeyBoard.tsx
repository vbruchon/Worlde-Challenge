import { KeyButton } from './KeyButton'

export const KeyBoard = () => {
    const alphabet = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
    const keys = [...alphabet, 'enter', 'backspace']

    return (
        <div className="flex max-w-2xl flex-wrap justify-center gap-1.5">
            {keys.map((key, index) => (
                <KeyButton value={key} key={index} />
            ))}
        </div>
    )
}
