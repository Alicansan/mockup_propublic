import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
  cva,
  type VariantProps,
} from 'class-variance-authority'

import { cn } from '@/lib/utils'
import Image from 'next/image'

const buttonVariants = cva(
  'inline-flex items-center justify-center   whitespace-nowrap rounded-lg text-2xl font-semibold ring-offset-background transition-colors  :ring-2 :ringffset-2 ter-events-:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 ',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        green:
          'bg-[#fbff31] text-black hover:bg-[#2fff00] rounded-[6px]',
        white:
          'bg-white text-black rounded-[6px]',
      },
      size: {
        default: 'h-12 px-5 py-3',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: string
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      icon,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <div className='relative flex items-center justify-center'>
        <Comp
          className={cn(
            buttonVariants({
              variant,
              size,
              className,
            })
          )}
          ref={ref}
          {...props}
        />

        {icon && (
          <Image
            src={icon}
            alt='icon'
            width={32}
            height={32}
            className='absolute flex '
          />
        )}

        {(variant === 'green' ||
          (variant === 'white' && !icon)) && (
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
            <div className='absolute right-2 bottom-2'>
              <Image
                src='/button/button-br.svg'
                alt='button'
                width={32}
                height={32}
                className='h-2 w-2 -rotate-90'
              />
            </div>
            <div className='absolute right-2 top-2'>
              <Image
                src='/button/button-br.svg'
                alt='button'
                width={32}
                height={32}
                className='h-2 w-2 rotate-180'
              />
            </div>
          </>
        )}
      </div>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
