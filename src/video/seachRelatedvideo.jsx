import React from 'react'
import { Link } from 'react-router-dom'
import './searchrelated.css'

function SeachRelatedvideo(props) {
   
    const formatViews = (views) => {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K';
        }
        return views;
    };
  return (
    
      <div className=" d-flex flex-column m-2 overflow-auto align-items-center related"style={{width:'37rem'}}> 
            <div className=" related-video-border" >
                <Link to={`/video/${props.video.videoId}`}>
                <img src={props.video.thumbnails[1].url} className="card-img-top img mr-5 thumbnails" alt="..." style={{ width: '14rem' }} />
                </Link>
            <div className=" bg-dark text-white  bg-black" style={{ width: '19rem', height: '7rem' }}>
                <h5 style={{width:'18rem',fontSize:'1rem'}}>{props.video.title}</h5>
                <div className="" style={{marginBottom:'17px'}}>
                    <span className="m-2" style={{ color: '#AAAAAA' }}>{formatViews(props.video.stats.views)} views</span>
                    <span style={{ color: '#AAAAAA' }}>{props.video.publishedTimeText}</span>
                </div>
                <img className="rounded-circle" width='30px' alt="author image" src={props.video.author.avatar[0].url} />
                <span className="m-2" style={{ color: '#AAAAAA'}}>{props.video.author.title}</span>
                {props.video.author.badges[0] && (
                    <svg stroke="currentColor" fill="currentColor" style={{ color: '#AAAAAA' }} strokeWidth="0" viewBox="0 0 16 16" className="text-white/[0.5] text-[12px] ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                )}
               
             </div>
                </div>
        </div>
   
  )
}

export default SeachRelatedvideo
