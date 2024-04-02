import React from 'react'

// Return Notification if user has entered letter twice
function Notification( { displayNotification } ) {
  return (
    // Only notify user 
    <div className='notification-class'>
       {displayNotification && <p>You have entered this letter twice</p>}
    </div>
  )
}

export default Notification
