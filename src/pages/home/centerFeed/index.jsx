// import { useState } from 'react'
// import CreatePost from './CreatePost'
// import HorizontalBirthdayCard from "./components/HorizontalBirthdayCard";
// import InfoTab from './components/InfoTab'

import PostFeeds from './PostFeeds'

const CenterFeed = () => {
  // const [stepper, setstepper] = useState(1)

  return (
    <div className='h-full flex col-span-2 flex-col justify-start  sz:col-span-1 order-1 space-y-5 overflow-hidden z-0'>
      {/* <InfoTab step={setstepper} /> */}

      {/* {stepper === 1 && (
      )} */}
      <div className='space-y-2 bg-white'>
        <PostFeeds />
      </div>
    </div>
  )
}

export default CenterFeed
