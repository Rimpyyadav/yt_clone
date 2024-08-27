import React from 'react'
import {Link} from "react-router-dom"; 

function Video({video}) {
  console.log(video)
  return (
    <div className=''>
      <Link to={`/video/${video?.videoId}`}>
      <div>
        <img src={video?.thumnails[0]?.url} ></img>
      </div>
      </Link>

    </div>
  )
}

export default Video