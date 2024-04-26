import { cn } from '@/lib/utils'

export type SquareProps = {
    value: string | React.ReactNode
    className?: string
    squareId: number | string
}

export const Square = ({ value, className, squareId }: SquareProps) => {
    const id = typeof squareId === 'number' ? 'square-' + squareId : squareId
    return (
        <div
            id={id}
            className={cn(
                'relative flex size-14 items-center justify-center overflow-hidden rounded-sm border text-2xl font-black',
                className
            )}
        >
            <div className="absolute z-10">{value}</div>
            <div id="animated-background-div" className=""></div>
        </div>
    )
}
