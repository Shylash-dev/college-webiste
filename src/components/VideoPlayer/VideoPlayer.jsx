import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false)
        }
    }

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player}
            onClick={closePlayer}>
            {playState ? <video src={video} autoPlay controls></video> : ''}

        </div>
    )
}

export default VideoPlayer