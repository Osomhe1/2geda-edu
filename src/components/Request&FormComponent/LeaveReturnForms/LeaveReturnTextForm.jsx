/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import 'react-datepicker/dist/react-datepicker.css'
import { DatePicker } from "antd";
import Label from "../../forms/FormElements/Label";

export default function LeaveReturnTextForm({setInformation}) {


  return (
    <div className="grid gap-2 w-full p-8 bg-white rounded shadow">
     <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label>
                  Returning date
                </Label>
                    <DatePicker
                onChange={(e) => setInformation(information=>{return {...information,return_date:e.$d}})}
             className="w-full border outline-none focus:border-transparent h-10 rounded-md focus:outline-none md:col-span-2"
            />
              </div>
    </div>
  );
}
