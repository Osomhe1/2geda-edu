/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useContext, useEffect } from 'react'
import { useRef } from 'react'
// import SubMenu from './SubMenu'
import { motion } from 'framer-motion'
import { defaultMenu } from './routes'

import { NavLink, useLocation } from 'react-router-dom'
import { dashboardContext } from '../../context/Dashboard'
// import { PiArrowsLeftRightBold } from "react-icons/pi";

import SubMenuSidebar from '../submenuSidebar'
// import UserDropDownSidebar from "../components/UserDropDownSidebar";
import { LogOutIcon } from 'lucide-react'

// import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  // const navigate = useNavigate()
  const {
    sidebarOpen,
    setSidebarOpen,
    isTablet,
    sidebarMinimized,
    // minimizeSidebar, // removed for now
    // setShowminimizedsubMenu,
  } = useContext(dashboardContext)

  const sidebarRef = useRef()
  const { pathname } = useLocation()
  // console.log(pathname)
  // //the condition side menu is here
  // const sideMenu = pathname.includes("payroll") ? payrollMenu : pathname.includes("hr") ? hrMenu : defaultMenu;
  const sideMenu = defaultMenu

  useEffect(() => {
    if (isTablet) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isTablet])

  const overlayClicked = () => {
    setSidebarOpen(false)
    // setShowminimizedsubMenu(false);
  }

  useEffect(() => {
    isTablet && setSidebarOpen(false)
  }, [pathname])

  const Nav_animation = isTablet
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -350,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
        minimize: {
          x: 0,
          width: '7.5rem',
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '0rem',
          transition: {
            damping: 40,
          },
        },
        minimize: {
          width: '7.5rem',
          transition: {
            damping: 40,
          },
        },
      }

  return (
    <div className='relative  bg-[#4F0DA3] shadow-sidebar'>
      <div
        onClick={() => overlayClicked()}
        className={`lg:hidden fixed inset-0 max-h-screen z-[90] bg-[#4F0DA3] cursor-pointer   ${
          sidebarOpen ? 'block' : 'hidden'
        } `}
      ></div>

      <SubMenuSidebar />

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTablet ? -350 : 0 }}
        animate={
          sidebarMinimized && sidebarOpen
            ? 'minimize'
            : !sidebarMinimized && sidebarOpen
            ? 'open'
            : 'closed'
        }
        className='shadow-sidebar group  lg:z-[49] z-[91] max-w-[16rem]  w-[16rem] 
             fixed pt-10 top-0 left-0
           h-screen  dark:!text-gray-100 bg-[#4F0DA3]'
      >
        <div className='flex flex-col  h-full '>
          <ul className='whitespace-pre text-[0.9rem] flex flex-col overflow-x-hidden font-medium  scrollbar-thin scrollbar-thumb-transparent  group-hover:scrollbar-thumb-scrollbarColor scrollbar-track-transparent menuScrollBar  h-full  px-0  pb-20'>
            {sideMenu?.map((route, i) => (
              <Fragment key={i}>
                <div className='p-0 py-1'>
                  {!sidebarMinimized && route?.name && (
                    <NavLink
                      to={route?.route}
                      className={`group/navitem ${
                        sidebarMinimized
                          ? 'flex flex-col text-center justify-center hover:no-underline   gap-1 cursor-pointer  duration-300 font-medium text-gray-400'
                          : 'link'
                      } ${
                        pathname === route?.route
                          ? 'text-white'
                          : 'text-gray-400'
                      }`}
                    >
                      <route.icon
                        size={sidebarMinimized ? 30 : 20}
                        className={`min-w-max group-hover/navitem:text-menuItemColor ${
                          sidebarMinimized && 'mx-auto'
                        }`}
                      />
                      {route?.name}
                    </NavLink>
                  )}
                </div>
              </Fragment>
            ))}

            <div className='flex  mt-32 pb-32 px-6 gap-2 text-sm text-white capitalize items-center'>
              <LogOutIcon size={20} />
              <h3 className='text-sm'>Sign out</h3>
            </div>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar
