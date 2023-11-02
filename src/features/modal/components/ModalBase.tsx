import { ReactNode, useState, Fragment, ComponentType, ComponentPropsWithoutRef } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { useModal } from "../hooks"

interface ModalBaseProps{
    id:string,
    children?:ReactNode,
}

interface ModalBaseButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode,
  loading?: boolean
}

interface CompositeComponents {
  Title: ComponentType<{children: ReactNode}>
  Button: ComponentType<ModalBaseButtonProps>
  Body: ComponentType<{children: ReactNode}>
  Footer: ComponentType<{children: ReactNode}>
}

type ModalType = ComponentType<ModalBaseProps> & CompositeComponents

const ModalBase = ((props:ModalBaseProps) => {
  const  {id, children} = props
  const {isOpen, closeModal} = useModal({id})

  if (!isOpen) return null

  return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                 {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
)}) as ModalType

ModalBase.Title = (props) => (
  <Dialog.Title as="h3"
    className="text-lg font-medium leading-6 text-gray-900">
      {props.children}
    </Dialog.Title>
)
ModalBase.Title.displayName = 'ModalBaseTitle'

ModalBase.Button = (props) => {
  const {children, loading, disabled, ...rest} = props

  return (
  <button
    type="button"
    className="disabled:cursor-not-allowed disabled:grayscale disabled:opacity-75 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    {...rest}
    disabled={disabled || loading}>
      {loading ? <span>Loading...</span> : children}
  </button>
  )
  }
ModalBase.Button.displayName = 'ModalBaseButton'

ModalBase.Body = (props) => (
  <div className="mt-4">{props.children}</div>
)
ModalBase.Body.displayName = 'ModalBaseBody'

ModalBase.Footer = (props) => (
  <div className="mt-7 flex flex-row items-center justify-center gap-5 2xl:gap-10">
    {props.children}
    </div>
)
ModalBase.Footer.displayName = 'ModalBaseFooter'

export default ModalBase