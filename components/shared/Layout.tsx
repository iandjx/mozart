import React, { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
  className?: string
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={`flex bg-cover ${className}`}>
      <div
        className={`max-w-[1440px] mx-auto font-inter text-white min-h-screen px-20 pb-24 `}
      >
        <Header />
        <main className="pt-16">{children}</main>
      </div>
    </div>
  )
}

export default Layout
