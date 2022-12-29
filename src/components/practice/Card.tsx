import React from 'react'

export const Card = ({children}:{children:React.ReactNode}) => {
  return (
    <div style={{border:"2px solid gray"}}>{children}</div>
  )
}
