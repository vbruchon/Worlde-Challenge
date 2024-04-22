export type SquareProps = {
    value: string
}

export const Square = ({ value }: SquareProps) => {
    return (
        <div className="flex size-14 items-center justify-center rounded-sm border text-2xl font-black">
            {value}
        </div>
    )
}
