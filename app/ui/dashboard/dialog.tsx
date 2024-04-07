"use client"
import { useSearchParams } from "next/navigation"
import { useRef, useEffect } from "react"

type Props = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode,
    okButton: boolean,
    dialogId: string,
}

export default function Dialog({title, onClose, onOk, children, okButton = false, dialogId}: Props) {
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get(dialogId)

    useEffect(() => {
        if(showDialog === 'y') {
            dialogRef.current?.showModal()
        }else {
            dialogRef.current?.close()
        }
    }, [showDialog])


    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

    const dialog: JSX.Element | null = showDialog === 'y'
        ? (
            <dialog ref={dialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
                <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between mb-4 pt-3 px-5">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                        <button
                            onClick={closeDialog}
                            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                        >x</button>
                    </div>
                    <div className="px-5 pb-6">
                        {children}
                        {
                            okButton ? (
                                <div className="flex flex-row justify-end mt-2">
                                    <button
                                        onClick={clickOk}
                                        className="bg-green-500 py-1 px-2 rounded border-none"
                                    >
                                        OK
                                    </button>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </dialog>
        ) : null

    return dialog
}