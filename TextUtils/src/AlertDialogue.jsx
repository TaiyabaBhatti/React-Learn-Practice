import React from 'react'

export default function AlertDialogue({alert,show}) {
  return (
    alert &&
      <div className="alert-dismissible bg-yellow-200 py-3 px-2" role="alert">
  <p><strong>{alert.msg}</strong> : {alert.typ}</p>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={show}><i className="hover:text-gray-900 text-gray-700 text-2xl fa-solid fa-xmark ml-5"></i></button>
</div>
    
  )
}
