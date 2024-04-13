import React from 'react'
export default function Alert(props) {
  return (
    <div style={{height:'50px'}} className='sticky-top'>
      {props.alert && <div className={`alert alert-${props.alert.typo} alert-dismissible fade show`} role="alert">
        {props.alert.msg}
      </div>}
      </div>
  )
}