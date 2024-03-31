/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react'
import { dashboardContext } from '../context/Dashboard'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useCurrentUser from '../hooks/useCurrentUser'

function RootLayout() {
  const { sidebarOpen, sidebarMinimized, isTablet } =
    useContext(dashboardContext)
  const { pathname } = useLocation()

  return (
    <div className='dark:text-gray-100 dark:bg-slate-700 bg-lighten duration-200 ease-in-out z-1 overflow-visible'>
      {!pathname === '/engage/memos' ? null : <Navbar />}

      <div className='flex w-full '>
        <Sidebar />
        <div
          className={`w-full min-h-[93vh] ${
            sidebarMinimized
              ? 'lg:ml-[7.5rem]'
              : sidebarOpen
              ? 'lg:ml-64'
              : !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
          }`}
        >
          {
            //  ${  (!sidebarMinimized &&!sidebarOpen) &&'lg:mx-auto' }
            pathname.includes('/home') ? (
              <main
                className={`py-4 flex-1  mx-auto w-full overflow-clip
                          ${
                            sidebarOpen && !isTablet
                              ? ' w-[98%] lg:w-[98%] subsemi:w-[98%]   xx:w-[98%]  '
                              : ' max-w-[98%] sm:w-[98%] md:w-[98%] lg:w-[98%] '
                          }
                        
                        `}
              >
                <Outlet />
              </main>
            ) : pathname === '/engage/memos' ? (
              <main
                className={`py-0 flex-1 max-w-[98%] overflow-clip mx-auto ${
                  !sidebarMinimized && !sidebarOpen && 'lg:ml-[16rem]'
                }`}
              >
                <Outlet />
              </main>
            ) : pathname === '/engage/group' ? (
              <main
                className={`py-0 flex-1 max-w-[98.5%] overflow-clip mx-auto ${
                  !sidebarMinimized && !sidebarOpen && 'lg:ml-[16rem]'
                }`}
              >
                <Outlet />
              </main>
            ) : pathname === '/integrate/settings' ? (
              <main
                className={`py-0 flex-1 max-w-[100%] overflow-clip mx-auto ${
                  !sidebarMinimized && !sidebarOpen && 'lg:ml-[16rem]'
                }`}
              >
                <Outlet />
              </main>
            ) : (
              <main
                className={`py-4 flex-1 px-2 max-w-[98%] overflow-clip mx-auto ${
                  !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
                }`}
              >
                <Outlet />
              </main>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default RootLayout
