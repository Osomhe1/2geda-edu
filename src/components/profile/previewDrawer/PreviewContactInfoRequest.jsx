/* eslint-disable react/prop-types */
import { Card, Skeleton } from '@nextui-org/react'
import ExpandedDrawer from '../../modals/ExpandedDrawer'
import useCurrentUser from '../../../hooks/useCurrentUser'
import { useGetProfile } from '../../../API/profile'

export default function PreviewContactInfoRequest({ isOpen, setIsOpen }) {
  const { userData } = useCurrentUser()
  const { data: profile, isLoading } = useGetProfile({ user: userData.data })

  return (
    <>
      <ExpandedDrawer isOpen={isOpen} onClose={setIsOpen}>
        <div className='flex hfull gap-2 flex-col md:flex-row overflow-y-scrol'>
          <div className='flex min-h-screen  flex-col  w-full md:w-60 bg-chatsidebar    '>
            <h3 className=' text-center text-gray-400 border-gray-400 border-b-2 p-2'>
              Contact Information
            </h3>
          </div>
          {isLoading ? (
            <div className='max-w-[300px] w-full flex items-center gap-3'>
              <div className='w-full flex flex-col gap-2'>
                <Skeleton className='h-3 w-3/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
              </div>
            </div>
          ) : (
            <div className=' wfull w-[60%] mx-auto grid p-4  gap-8'>
              <Card className='bg-white w-full fontOswald rounded-md shadow-md p-4  hfull '>
                <ul className=' text-[15px] mt-2 flex flex-col space-y-3'>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Official Email:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.CONTACT_INFORMATION?.EMAIL}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Alternative Email:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.CONTACT_INFORMATION?.OTHER_EMAIL}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Primary Phone:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.CONTACT_INFORMATION?.PHONE}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Alternative Phone:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.CONTACT_INFORMATION?.OTHER_PHONES}
                    </span>
                  </li>
                </ul>
              </Card>
              <Card className='bg-white w-full  fontOswald rounded-md shadow-md p-4  hfull '>
                <ul className=' text-[15px] mt-2 flex flex-col space-y-3'>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Official Email:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.CONTACT_INFORMATION?.EMAIL}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Alternative Email:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.CONTACT_INFORMATION?.OTHER_EMAIL}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Primary Phone:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.CONTACT_INFORMATION?.PHONE}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Alternative Phone:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.CONTACT_INFORMATION?.OTHER_PHONES}
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          )}
        </div>
      </ExpandedDrawer>
    </>
  )
}
