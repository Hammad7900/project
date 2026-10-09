import React, { useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

function Navbar() {
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const location = useLocation()
  const isHome = location.pathname === '/'

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reset scroll position + navbar state whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0)
    setScrolled(false)
  }, [location.pathname])

  // Home page: transparent by default, white on hover (original effect)
  // All other pages: always solid white (so content stays visible)
  const useTransparentStyle = isHome && !scrolled
  const iconStyle = scrolled || !useTransparentStyle
    ? 'brightness-0'
    : 'brightness-0 invert group-hover:invert-0'

  return (
    <div
      className={`group fixed top-0 left-0 w-full z-[1000] flex items-center justify-between font-medium
      transition-all duration-300 ease-in-out
      px-4 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 lg:px-[50px] lg:py-[25px]
      ${scrolled
        ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]'
        : useTransparentStyle
          ? 'bg-transparent hover:bg-white hover:shadow-[0_2px_10px_rgba(0,0,0,0.08)]'
          : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]'}`}
    >
      {/* Logo */}
      <Link to='/'>
        <img
          src={assets.logo}
          className={`w-36 block transition-all duration-300 ${iconStyle}`}
          alt='logo'
        />
      </Link>

      {/* Center Links */}
      <ul className={`hidden sm:flex gap-5 text-sm transition-colors duration-300
        ${scrolled || !useTransparentStyle ? 'text-gray-700' : 'text-white group-hover:text-gray-700'}`}>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          {({ isActive }) => (
            <>
              <p>Home</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-current ${isActive ? '' : 'hidden'}`} />
            </>
          )}
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          {({ isActive }) => (
            <>
              <p>About</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-current ${isActive ? '' : 'hidden'}`} />
            </>
          )}
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          {({ isActive }) => (
            <>
              <p>Collection</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-current ${isActive ? '' : 'hidden'}`} />
            </>
          )}
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          {({ isActive }) => (
            <>
              <p>Contact</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-current ${isActive ? '' : 'hidden'}`} />
            </>
          )}
        </NavLink>
      </ul>

      {/* Right Icons */}
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className={`w-5 cursor-pointer transition-all duration-300 ${iconStyle}`} alt='search' />

        {/* Profile / Login dropdown */}
        <div className='relative group/profile'>
 <img onClick={() => !token && navigate('/login')}src={assets.profile_icon} className={`w-5 cursor-pointer transition-all duration-300 ${iconStyle}`} alt='profile'/>
 {/* dropdown menu */}
  <div className='group-hover/profile:block hidden absolute dropdown-menu right-0 pt-4'>
 <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
  {token ? ( <> <p onClick={() => navigate('/profile')}className='cursor-pointer hover:text-black' >
 My Profile </p>
    <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black' >Orders </p>

    <p onClick={logout} className='cursor-pointer hover:text-black' >Logout </p>
   </>
       ) : ( <p onClick={() => navigate('/login')} className='cursor-pointer hover:text-black' >  Login  </p>
              )}
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img
            src={assets.cart_icon}
            className={`w-5 min-w-5 transition-all duration-300 ${iconStyle}`}
            alt='cart'
          />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile menu icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className={`w-5 cursor-pointer sm:hidden transition-all duration-300 ${iconStyle}`}
          alt='menu'
        />

        {/* Sidebar menu (mobile) */}
        <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-[1100] ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='back' />
              <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar