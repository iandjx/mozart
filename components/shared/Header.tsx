import { useState, useEffect } from 'react'

const Header = () => {
  const [atTop, setTop] = useState(true)
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setTop(true) : setTop(false)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 px-20  flex items-center w-screen h-16 py-6 font-inter ${
        !atTop && 'bg-gray-800'
      } `}
    >
      <img
        src="/images/header/music-cloud.svg"
        className="w-6 h-auto"
        alt="logo"
      />
      <img
        src="/images/header/mozart.svg"
        className="w-20 h-auto ml-3"
        alt="logo"
      />
      <nav className="flex text-white opacity-50 ml-14 gap-x-6">
        <a>Marketplace</a>
        <a>Create New</a>
        <a>Rankings</a>
      </nav>
    </div>
  )
}

export default Header
