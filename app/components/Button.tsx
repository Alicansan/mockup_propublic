import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ButtonProp = {
  type: 'button' | 'submit'
  title?: string
  link: string
  icon?: string
  variant: 'btn_green' | 'btn_white'
  additional?: string
}
const Button = ({
  type,
  title,
  link,
  icon,
  variant,
  additional,
}: ButtonProp) => {
  return (
    <Link href={link}>
      <button
        type={type}
        className={` ${variant} ${additional}`}
      >
        {icon && (
          <Image
            src={icon}
            alt={title || variant}
            width={32}
            height={32}
          />
        )}
        {title}
      </button>
    </Link>
  )
}

export default Button
