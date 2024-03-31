// import React from 'react'

import { Avatar } from "@nextui-org/react"


const NoteDetail = () => {

const notes = [
{
profile_image:'https://i.pravatar.cc/150?u=a04258114e29026708c',
name:'Ikechwu Ogechi',
time:'09:04 AM',
text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit animi. Velit, id repellat? Quis, facere et sapiente officia eos ipsam iure. Quisquam reprehenderit repudiandae porro at aliquam eos natus.
    Reiciendis, laboriosam porro obcaecati excepturi itaque ipsam aspernatur nesciunt rem labore impedit? Commodi laudantium cum sapiente labore alias sequi at illum quibusdam repudiandae, voluptatibus quam repellat cumque nihil cupiditate necessitatibus`
},
{
profile_image:'https://i.pravatar.cc/150?u=a042581f4e29026024d',
name:'Adeyemi Gabriel',
time:'08:13 PM',
text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit animi. Velit, id repellat? Quis, facere et sapiente officia eos ipsam iure. Quisquam reprehenderit repudiandae porro at aliquam eos natus.
    Reiciendis`
},
{
profile_image:'https://i.pravatar.cc/150?u=a04258114e29026302d',
name:'Amir Usman',
time:'06:04 PM',
text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit animi. Velit, id repellat? Quis, facere et sapiente officia eos ipsam iure. Quisquam reprehenderit repudiandae porro at aliquam eos natus.
    Reiciendis, laboriosam porro obcaecati excepturi itaque ipsam aspernatur nesciunt rem labore impedit? Commodi laudantium cum sapiente labore alias sequi at illum quibusdam repudiandae, voluptatibus quam repellat cumque nihil cupiditate necessitatibus`
},
{
profile_image:'https://i.pravatar.cc/150?u=a042581f4e29026704d',
name:'Chinaza Victoria',
time:'01:21 AM',
text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit animi. Velit, id repellat? Quis, facere et sapiente officia eos ipsam iure. Quisquam reprehenderit repudiandae porro at aliquam eos natus.
    Reiciendis, laboriosam porro obcaecati excepturi itaque ipsam aspernatur nesciunt rem labore impedit? Commodi laudantium cum sapiente labor`
},
]
  return (
  <div className="">
  { notes.map((note,i)=>(
  <div key={i} className="p-6 rounded border bg-white shadow mt-4 min-h-[10rem]">
  <div className="flex gap-3 mb-2">
  <Avatar isBordered src={note.profile_image} />
    <div className="">
    <p className="text-lg font-medium">{note.name}</p>
    <span className=" text-sm text-gray-400">{note.time}</span>
    </div>
  </div>
    <p>{note.text}</p>
    </div>
  ))}
    
  </div>
  )
}

export default NoteDetail