import { Square } from './Square'

export type RowProps = {
    row: string[]
    rowId: number
}

export const Row = ({ row, rowId }: RowProps) => {
    return (
        <div className="mb-2 flex gap-x-1" id={'row-' + rowId}>
            {row.map((cell, x) => (
                <Square key={x} value={cell} squareId={x} />
            ))}
        </div>
    )
}
