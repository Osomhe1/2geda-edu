import { useContext } from 'react'

import { MdMenu } from 'react-icons/md'
import { dashboardContext } from '../../context/Dashboard'

import UserDropdown from '../components/UserDropdown'
import DropdownNotification from '../components/DropdownNotification'
import { Search } from 'lucide-react'
import logoImg from '../../assets/images/2geda.svg'

import { useLocation } from 'react-router-dom'
import { Input } from '@nextui-org/react'

const Navbar = () => {
  const { toggleSideBar, sidebarOpen, isMacpro, sidebarMinimized } =
    useContext(dashboardContext)
  const { pathname } = useLocation()
  // minimized sidebar was omitted for now!

  return (
    <div
      className={`right-0 left-0 p-2 shadow-md  sticky top-0 dark:shadow-md  bg-white  ${
        pathname.includes('engage/posts') ? 'z-40' : 'z-40'
      }`}
    >
      <div className='px-3 py-1 '>
        <div className='flex items-center justify-between'>
          <div
            className={`flex items-center justify-between gap-2 ${
              sidebarMinimized && !sidebarOpen
                ? 'flex ml-0'
                : sidebarMinimized && sidebarOpen
                ? 'flex ml-[7.2rem]'
                : sidebarOpen
                ? 'flex'
                : !sidebarMinimized && !sidebarOpen && 'flex ml-0'
            }`}
          >
            <div
              className='lg:hidden cursor-pointer'
              onClick={() => toggleSideBar()}
            >
              <MdMenu size={25} />
            </div>

            <img src={logoImg} alt='2geda-logo' className='w-32' />
          </div>
          <div
            className={` hidden lg:block ${
              isMacpro
                ? 'ml-[-12rem]'
                : sidebarOpen
                ? ' ml-[-30rem]'
                : !sidebarMinimized && !sidebarOpen
                ? ' ml-[-26em]'
                : ''
            }`}
          >
            <img src={logoImg} alt='2geda-logo' className='w-32' />
          </div>

          <div className='flex justifyend items-center gap-6'>
            <div className='hidden w-96 h3 md:block'>
              <Input
                variant='bordered'
                name=''
                className=' border-none bg-gray-100 w-full placeholder:text-gray-400 text-gray-500 '
                type='text'
                size='sm'
                placeholder='Search...'
                endContent={<Search className='  text-gray-400' size={12} />}
              />
            </div>

            <div className='flex items-center justify-between   gap-6 pr-4'>
              <div>
                <DropdownNotification />
              </div>
              <UserDropdown className='font-medium text-gray-600' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
