import React from 'react';
import ReactPlayer from 'react-player/lazy';
import './responsive-player.css'

function ResponsivePlayer() {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/tFX--8P3ZYo'
            width='100%'
            height='100%'
            controls={true}      
          />
        </div>
      )
}
  
export default ResponsivePlayer;