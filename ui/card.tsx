import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode;
  classname?: string; 
}

const Card = ({children, classname}: CardProps) => {
  return (
    <article className={`shadow-2xl w-fit h-auto p-3 rounded-xl flex justify-center items-center ${classname}`}>
      {children}
    </article>
  )
}

export default Card