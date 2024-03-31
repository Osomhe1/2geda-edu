/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import { Tab, Tabs } from "@nextui-org/react"
import HistoryTable from "../../../components/Leave/HistoryTable"
import { useState } from "react";
import { columns, tableData } from "../../../components/Leave/data";

const LeaveTable = ({setCurrentView,view,resume}) => {
const [selectedTableData, setSelectedTableData] = useState([])
const [reccentColumn, setReccentColumn] = useState(columns)

const select=(value)=>{
  if (value=='Pending') {
      setSelectedTableData(tableData.filter(data=>data.status=='pending'))
      // setReccentColumn(columns.filter(column=>column.uid!=='to'))
    }
    else if (value=='Approved') {
      setSelectedTableData(tableData.filter(data=>data.status=='approved'))
      // setReccentColumn(columns.filter(column=>column.uid!=='to'))
    }
    else if (value=='Declined') {
      setSelectedTableData(tableData.filter(data=>data.status=='declined'))
      // setReccentColumn(columns.filter(column=>column.uid!=='to'))
    }
    else if (value=='Completed') {
      // setReccentColumn(columns.map(column=>{
      // if(column.name=='APPLICATION DATE'){
      // return {...column,name:'START DATE'}
      // }else{
      // return column
      // }
      // }))
      setSelectedTableData(tableData.filter(data=>data.status=='completed'))
    }
}

const optionTabs=[
   {
  id:'pending',
  label:'Pending',
   content: HistoryTable,
  },
   {
  id:'approved',
  label:'Approved',
   content: HistoryTable,
  },
   {
  id:'declined',
  label:'Declined',
   content: HistoryTable,
  },
   {
  id:'completed',
  label:'Completed',
   content: HistoryTable,
  },
 
  ]
  return (
    <div>
            <Tabs 
items={optionTabs} 
color="secondary"
classNames={{
tabList:'bg-slate-200 text-medium',
}} 
onSelectionChange={select}
>
{(item)=>(
<Tab key={item.label} title={item.label} >
{<item.content tableData={selectedTableData}
        setCurrentView={setCurrentView}
       columns = {reccentColumn}
        view={view}
        resume={resume}/>}
</Tab>
)}
</Tabs>
      </div>
  )
}

export default LeaveTable