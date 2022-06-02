import React from 'react'

export default function DeleteModal(props) {
    const {onConfirm , onCancel } = props
  return (
    <div className='top-1/2 -translate-x-1/2 left-1/2 fixed shadow-lg border-zinc-800 rounded w-96 bg-zinc-200 p-1 text-center ' > 
    <p>Are You Sure?</p>
      <button className='bg-red-500 p-1 rounded m-2' onClick={onCancel}>cancel</button>

    <button className='bg-red-500 p-1 rounded m-2' onClick={onConfirm}>  Confirm  </button>

  </div>
  )
}
