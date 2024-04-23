import { Row } from './Row'
import { useBoardStore } from '@/lib/store/useBoardStore'

export const Board = () => {
    const { board } = useBoardStore()
    return (
        <div>
            {board.map((row, index) => (
                <Row key={index} row={row} />
            ))}
        </div>
    )
}
