import React from 'react'

export default function AlertDialogue({show}) {
  return (
    <div>
      <div className="alert-dismissible bg-yellow-200 py-3 px-2" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={show}><i className="hover:text-gray-900 text-gray-700 text-2xl fa-solid fa-xmark ml-5"></i></button>
</div>
    </div>
  )
}
