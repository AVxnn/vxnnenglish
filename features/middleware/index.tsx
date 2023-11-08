"use client"

import { useAppSelector } from '@/store/store'
import AuthPopup from '@/widgets/authPopup'
import React from 'react'

const Middleware = () => {

    const isOpen = useAppSelector((state) => state.authPopupReducer.value.isOpen)
    
  return (
    <>

        {
            isOpen ? <AuthPopup /> : ''
        }
    </>
  )
}

export default Middleware