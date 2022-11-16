
import React from 'react'
import ReactPlayer from 'react-player'
import "./MediaPlayer.css"

const VideoMediaPlayer = () => {
  return (
    <>
        <div className='player-wrapper ' style={{border:"1px solid #00000033",boxShadow: "#00000033 0px 0px 0px 1px, #00000033 0px 1px 1px -1px, #00000033 0px 1px 0px "}}>
    <ReactPlayer
      className='react-player '
      url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      width='100%'
      height="100%"
     controls
    />
  </div>
  </>
  )
}

export default VideoMediaPlayer