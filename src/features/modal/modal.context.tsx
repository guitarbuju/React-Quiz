import { ReactNode, createContext, useContext, useState } from "react";

interface ModalInfo<T=unknown> {
    isOpen: boolean,
    data?: T
}

interface ModalState {
    modals: Record<string, ModalInfo>
}

interface ModalActions {
    openModal: <T>(id: string, data?: T) => void
    closeModal: (id: string) => void
}

interface ModalContextType {
    state: ModalState
    actions: ModalActions
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModalContext = ()=> {
    const context= useContext(ModalContext)

    if (!context) throw new Error('useModalContext must be used within a ModalProvider')

    return context
}

export const ModalProvider = (props: {children: ReactNode}) => {
    const {children} = props
    const [state, setState] = useState<ModalState>({modals: {}})
    
    const openModal: ModalActions['openModal'] = (id, data) => {
        setState((prevState)=> ({
            ...prevState,
            modals: {
                ...prevState.modals,
                [id]: {isOpen: true, data}
            }
        }));
    }
    const closeModal: ModalActions['closeModal'] = (id) => {
        setState((prevState) => ({
            ...prevState,
            modals: {
                ...prevState.modals,
                [id]: {...prevState.modals[id], isOpen: false}
            }
        }))
    }

    return (
        <ModalContext.Provider value={{state, actions: {openModal, closeModal}}}>
            {children}
        </ModalContext.Provider>
    )
}