/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


import { MdMoreVert } from 'react-icons/md';
import { HiOutlinePencil } from "react-icons/hi2";

const MoreDropdown = ({bottom, defaultCheck}) => {
    
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative dark:text-gray-700 " >
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-1 flex items-center rounded-lg cursor-pointer"
        to="#"
      >
       {/* <BsChatDots */}
       <MdMoreVert

       
       color='grey'
                     size={22} className='font-medium text-gray-200 z-10'/>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute md:right-5 right-10 top-0 mt-2.5 flex rounded-lg shadow-md flex-col z-[555]
        w-[9rem]
        rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-36  ${
          dropdownOpen === true ? 'block' : 'hidden'
        } ${bottom && 'right-20 -top-4'}` }
      >
        <ul className="flex flex-col py-2 gap-y-1">
            <li className='flex gap-4 hover:cursor-pointer w-full hover:bg-gray-100 px-3 py-2'>
                <HiOutlinePencil /> View Staff
            </li>
            {
                defaultCheck==='No'?(
                <li className='flex gap-4 hover:cursor-pointer w-full hover:bg-gray-100 px-3 py-2'>
                    <HiOutlinePencil /> Delete
                </li>
                ):null
            }
            <li className='flex gap-4 hover:cursor-pointer w-full hover:bg-gray-100 px-3 py-2'>
                <HiOutlinePencil /> Update
            </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default MoreDropdown;