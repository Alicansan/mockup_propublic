import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ButtonProp = {
  type: 'button' | 'submit'
  title?: string
  link: string
  icon?: string
  variant: 'btn_green' | 'btn_white'
  className?: string
}
const Button = ({
  type,
  title,
  link,
  icon,
  variant,
  className,
}: ButtonProp) => {
  return (
    <Link href={link}>
      <button
        type={type}
        className={cn(
          'relative',
          variant,
          className
        )}
      >
        {icon && (
          <Image
            src={icon}
            alt={title || variant}
            width={32}
            height={32}
          />
        )}
        {variant === 'btn_green' && (
          <>
            <div className='absolute left-2 bottom-2'>
              <Image
                src='/button/button-br.svg'
                alt='button'
                width={32}
                height={32}
                className='h-2 w-2'
              />
            </div>

            <div className='absolute left-2 top-2'>
              <Image
                src='/button/button-br.svg'
                alt='button'
                width={32}
                height={32}
                className='h-2 w-2 rotate-90'
              />
            </div>
          </>
        )}
        {title}
      </button>
    </Link>
  )
}

export default Button
