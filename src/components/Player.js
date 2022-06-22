import React, { useState , useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons"
import Song from './Song'

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setCurrentSong , setSongs }) => {


    const [icon, setIcon] = useState(faPlay);

    useEffect(() => {
        const newSongs = songs.map((song) => { 
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true,
                }
            }

            else {
                
                    return {
                        ...song,
                        active: false,
                    };
                
            }


        });

        setSongs(newSongs)
    } , [currentSong])





    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }




    const formatTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }






    const playSongHandler = () => {



        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
            setIcon(faPlay)
        }

        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
            setIcon(faPause)
        }

    }

    


    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
        

        else if (direction === 'skip-back') {
            if((currentIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length -1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }

    }


    return (
        <>
            <div className="player">


                <div className="time-control">
                    <p>{formatTime(songInfo.currentTime)}</p>
                    <input min={0} max={songInfo.duration || 0 } value={songInfo.currentTime} onChange={dragHandler} type="range" />
                    <p>{formatTime(songInfo.duration)}</p>
                </div>



                <div className="play-control">
                    <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} onClick={() => skipTrackHandler('skip-back')} />
                    <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={icon} />
                    <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight} onClick={() => skipTrackHandler('skip-forward')} />
                </div>



            </div>
        </>
    )
}

export default Player