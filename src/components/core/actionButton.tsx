import React from 'react'

interface Props {
  children: React.ReactNode
  btnAction: () => void
}

const ActionButton = ({ children, btnAction }: Props) => {
  return (
    <button
      className="btn rounded-md px-10 py-2 border border-secondary-100 hover:text-white"
      onClick={() => { btnAction() }}
    >
      {children}
    </button>
  )
}
export default ActionButton
