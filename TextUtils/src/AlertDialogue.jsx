import React from 'react'

export default function AlertDialogue({alert}) {
  return (
    alert &&
      <div className="alert-dismissible bg-yellow-200 py-3 px-2" role="alert">
  <p><strong>{alert.msg}</strong> : {alert.typ}</p>
 
</div>
    
  )
}
