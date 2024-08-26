import React from 'react'
import Sidebar from "./Sidebar"
import Video from './Video' 
import {useAuth} from   "../context/AuthProvider"

function Home() {
    const {data} = useAuth()
    console.log(data)
  return (
    <div className='flex'>
        <Sidebar/>  
        <div>
            {
            data.map((item) => (
                <Video key={item.id} video={item} ></Video>
            ))
        }
        </div>

    </div>
  )
}

export default Home