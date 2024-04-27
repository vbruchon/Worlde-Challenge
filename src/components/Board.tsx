import { useGame } from '@/lib/store/useGame'
import { Row } from './Row'
import { useEffect, useState } from 'react'

export const Board = () => {
    const { board, setWord, words } = useGame()
    const [secretWord] = useState(
        () => words[Math.floor(Math.random() * words.length)]
    )
    useEffect(() => {
        setWord(secretWord)
    }, [secretWord, setWord])
    return (
        <div>
            {board.map((row, index) => (
                <Row key={index} row={row} rowId={index} />
            ))}
        </div>
    )
}
