import { cn } from '@/lib/utils'

export type SquareProps = {
    value: string | React.ReactNode
    className?: string
}

export const Square = ({ value, className }: SquareProps) => {
    return (
        <div
            className={cn(
                'flex size-14 items-center justify-center rounded-sm border text-2xl font-black',
                className
            )}
        >
            {value}
        </div>
    )
}
