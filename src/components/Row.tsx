import { Square } from './Square'

export type RowProps = {
    row: string[]
}

export const Row = ({ row }: RowProps) => {
    return (
        <div className="mb-2 flex gap-x-1">
            {row.map((cell, x) => (
                <Square key={x} value={cell} />
            ))}
        </div>
    )
}
