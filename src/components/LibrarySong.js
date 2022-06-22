import React from 'react'

const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs }) => {


    const songSelectHandler = () => {
        const selectedSongs = songs.filter((state) => state.id === id)
        setCurrentSong(selectedSongs[0]);

        const newSongs = songs.map((song) => { 
            if (song.id === id) {
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
        






        if (isPlaying) {
            const playPromise = audioRef.current.play();
            console.log(playPromise)
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })

                isPlaying = false;
            }
        }
    }
    return (
        <>
            <div onClick={songSelectHandler} className= { `librarysong ${song.active ? 'selected' : ""}` }>
                <img src={song.cover} alt={song.names} />
                <div className="song-description">
                    <h3>{song.names}</h3>
                    <h4>{song.artist}</h4>
                </div>
            </div>
        </>
    )
}

export default LibrarySong