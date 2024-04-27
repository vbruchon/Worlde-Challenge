import { X } from 'lucide-react'
import { ReactNode } from 'react'

export type ModalProps = {
    children: ReactNode
    modalTitle: string
    onQuite: () => void
}

export const Modal = ({ children, modalTitle, onQuite }: ModalProps) => {
    return (
        <>
            <div
                onClick={onQuite}
                className="fixed inset-0 z-10 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            ></div>
            <div className="fixed  left-[50%] top-[50%] z-50 flex w-full max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-4 border bg-background px-4 py-8 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
                <button className="absolute right-3 top-3" onClick={onQuite}>
                    <X />
                </button>
                <ModalTitle title={modalTitle} />
                {children}
            </div>
        </>
    )
}

const ModalTitle = ({ title }: { title: string }) => (
    <h2 className="text-2xl font-bold">{title}</h2>
)
