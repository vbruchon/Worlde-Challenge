import { Square } from './Square'

export type RowProps = {
    numberOfCharacters: number
}

export const Row = ({ numberOfCharacters }: RowProps) => {
    const squares = []
    for (let i = 0; i < numberOfCharacters; i++) {
        squares.push(<Square value={String(i)} />)
    }

    return <div className="flex gap-x-1">{squares}</div>
}
