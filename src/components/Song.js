import React from 'react'

const Song = ({currentSong}) => {
  return (
    <>
    <div className="song-container">
       <img src={currentSong.cover} alt={currentSong.names} />
       <h2>{currentSong.names}</h2>
       <h3>{currentSong.artist}</h3>
    </div>
    </>
  )
}

export default Song;