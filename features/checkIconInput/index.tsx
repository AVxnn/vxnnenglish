import Success from '@/public/icons/success'
import Warning from '@/public/icons/warning'
import X from '@/public/icons/x'
import React from 'react'

const CheckIconInput = ({error, warning, success, blocked} : any) => {

  if (blocked) {
    return <X />
  } else if (warning) {
    return <Warning />
  } else if (success) {
    return <Success />
  } else if (error) {
    return <X />
  }
  return (
    ''
  )
}

export default CheckIconInput