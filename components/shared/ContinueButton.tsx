import React, { DOMAttributes } from 'react'

interface ContinueButtonProps {
  onClick?: DOMAttributes<HTMLButtonElement>['onClick']
  text?: string
  className?: string
  variant?: 'default' | 'large'
}

const ContinueButton = ({
  onClick,
  text,
  className,
  variant,
}: ContinueButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold text-2xl h-[52px]  ${
        variant === 'large' ? 'w-full' : 'w-[183px]'
      } rounded-xl bg-gradient-to-r from-[#5773D7] via-[#9757D7] to-[#D75775] ${className}`}
    >
      {text ? text : 'Continue'}
    </button>
  )
}

export default ContinueButton
