import { useModalContext } from "../modal.context"

interface UseModalProps{
    id: string
} 


 const useModal = <T = unknown>(props: UseModalProps)=>{
    const { id } = props
    const {state, actions} = useModalContext()

    return {
            isOpen: state.modals[id]?.isOpen,
            data: state.modals[id]?.data as T,
            openModal: (data?: T) => actions.openModal(id, data),
            closeModal: () => actions.closeModal(id),
        }
 }


 export default useModal