/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar } from "@nextui-org/react";
import { Fragment, useState } from "react";
import { FcApprove } from "react-icons/fc";
import { IoCheckmarkCircleSharp, IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdCancel, MdPending } from "react-icons/md";
import { RomanFigure } from "./RomanFigure";
// import DataHistory from "./LeaveDetails";
// import AttachmentDetail from "./AttachmentDetail";
// import NoteDetail from "./NoteDetail";

const LeaveApprovalHistory = ({currentView}) => {
  // const [currentTabName, setCurrentTabName] = useState("Leave");

  // const tabs = [{ name: "Leave" }, { name: "Attachments" }, { name: "Note" }];

const formatDate=(dateString)=>{
    const date = new Date(dateString);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    // Convert the day to the correct ordinal suffix (e.g., 1st, 2nd, 3rd, 4th)
    const day = date.getDate();
    const suffix = ['th', 'st', 'nd', 'rd'];
    const daySuffix = (day % 10 < 4) ? suffix[day % 10] : suffix[0];
    
    return formattedDate.replace(/\d{1,2}(?=,)/, `$&${daySuffix}`);
}

  return (
    <Fragment>
 <div className="shadow border rounded p-4 bg-white">
        {/* <h4 className="text-lg">Approval History</h4> */}
        <div className="my-4 w-full">
       
          <ol className="ms-12 my-4 text-gray-500 border-s-2 border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mb-10 ms-4 relative group">
              <p className="font-medium text-xs uppercase">Handover</p>
            <div className="border p-2 rounded">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
                className="absolute -start-[62px]"
              />
              <span className="absolute w-[12px] h-[12px] group-hover:bg-btnColor bg-gray-200 border-2 border-white rounded-full -start-[24px] top-5"></span>
              <div className="">
              <div className="flex justify-between items-between">
                <p className="uppercase text-blue-400 text-sm">
                  {currentView.hand_over.name}
                </p>
                <div className="h-8 w-8 flex justify-center items-center rounded-full bg-green-300">
                <IoCheckmarkCircleSharp size={20} className="text-green-600"/>
                </div>
              </div>
                <p className="text-xs flex flex-col gap-2">
                <span>{currentView.hand_over.role}</span>
                <span>{formatDate(currentView.to)}</span>
                  
                </p>
              </div>
            </div>
            </li>
          {currentView.approvals.internal_approval.map((user,i)=>(
            <li className="mb-10 ms-4 relative group" key={i}>
              <p className="font-medium text-xs uppercase">Internal Approval {RomanFigure(i+1)}</p>
            <div className="border p-2 rounded">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
                className="absolute -start-[62px]"
              />
              <span className="absolute w-[12px] h-[12px] group-hover:bg-btnColor bg-gray-200 border-2 border-white rounded-full -start-[24px] top-5"></span>
              <div className="">
              <div className="flex justify-between items-center">
                <p className="uppercase text-blue-400 text-sm">
                  {user.name}
                </p>
                 <div className="h-8 w-8 flex justify-center items-center rounded-full bg-yellow-300">
                <MdPending size={20} className="text-yellow-600"/>
                </div>
              </div>
               <p className="text-xs flex flex-col gap-2">
                <span>{user.role}</span>
                <span>{formatDate(currentView.to)}</span>
                  
                </p>
              </div>
            </div>
            </li>
          ))}
          {currentView.approvals.hr_approval.map((user,i)=>(
            <li className="mb-10 ms-4 relative group" key={i}>
              <p className="font-medium text-xs uppercase">HR Approval {RomanFigure(i+1)}</p>
            <div className="border p-2 rounded">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
                className="absolute -start-[62px]"
              />
              <span className="absolute w-[12px] h-[12px] group-hover:bg-btnColor bg-gray-200 border-2 border-white rounded-full -start-[24px] top-5"></span>
              <div className="">
              <div className="flex items-center justify-between">
                <p className="uppercase text-blue-400 text-sm">
                  {user.name}
                </p>
                   <div className="h-8 w-8 flex justify-center items-center rounded-full bg-red-300">
                <MdCancel size={20} className="text-red-600"/>
                </div>
              </div>
              <p className="text-xs flex flex-col gap-2">
                <span>{user.role}</span>
                <span>{formatDate(currentView.to)}</span>
                  
                </p>
              </div>
            </div>
            </li>
          ))}
          </ol>
        </div>
      </div>

        {/* <div className="px-10">
          <h1>Leave Request</h1>
          <p></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-5 py-2">
          <div className="border-0 relative md:fixed border-l-2 mx-12  md:h-screen right-10 px-5 font-Exo text-gray-500">
            <div className="flex flex-col py-4 md:py-28 text-sm gap-3">
              {tabs?.map((tab, i) => (
                <div
                  key={i}
                  className={`${
                    currentTabName === tab?.name &&
                    "font-medium text-blue-500/80"
                  } relative cursor-pointer`}
                  onClick={() => setCurrentTabName(tab.name)}
                >
                  {tab?.name}
                  <span
                    className={`w-3 h-3 rounded-full  ${
                      currentTabName === tab?.name
                        ? "bg-blue-500/80"
                        : "bg-gray-300"
                    }  border-2 border-white absolute -left-[1.7rem] top-1 duration-200 transition-all`}
                  ></span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 px-5">
            {currentTabName == "Leave" && <DataHistory currentView={currentView} />}
            {currentTabName == "Attachments" && <AttachmentDetail />}
            {currentTabName == "Note" && <NoteDetail />}
          </div>
        </div> */}
    </Fragment>
  );
};

export default LeaveApprovalHistory;
