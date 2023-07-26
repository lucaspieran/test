import React, { ReactNode, useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const formRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <div className="relative">
        <div className="fixed z-10 w-full">
          <Navbar />
        </div>
        <div className="relative z-0">
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { formRef } as any)
            }
            return child
          })}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
