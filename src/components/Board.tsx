import { Row } from './Row'

type BoardProps = {
    numberOfCharacters: number
    attemptCount: number
}

export const Board = ({ numberOfCharacters, attemptCount }: BoardProps) => {
    const board = []
    for (let i = 0; i < attemptCount; i++) {
        board.push(
            <div className="mb-2">
                <Row numberOfCharacters={numberOfCharacters} />
            </div>
        )
    }
    return <div className="mt-5">{board}</div>
}
