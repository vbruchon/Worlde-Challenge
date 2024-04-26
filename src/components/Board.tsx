import { useGame } from '@/lib/store/useGame'
import { Row } from './Row'

export const Board = () => {
    const { board } = useGame()

    return (
        <div>
            {board.map((row, index) => (
                <Row key={index} row={row} rowId={index} />
            ))}
        </div>
    )
}
