import React from "react";
import { Link } from 'react-router-dom'
import './feed.css';

export default function Feed(props) {
    const { title, verify, channel_name, author_image, image, views, publishtime, video_id } = props;
    const formatViews = (views) => {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K';
        }
        // { console.log("io am only who solve you problwem") }
        return views;
    };
    return (
        <div className=" d-flex flex-column m-2 overflow-auto every-video">
            <Link to={`/video/${video_id}`}>
                <img src={image} className="card-img-top img" alt="..." style={{ width: '19rem' }} />
            </Link>
            <div className=" bg-dark text-white  bg-black video-text" style={{ width: '19rem', marginTop: '20px', height: '12rem' }}>
                <h5>{title}</h5>
                <img className="rounded-circle" width='30px' alt="author image" src={author_image} />
                <span className="m-2" style={{ color: '#AAAAAA' }}>{channel_name}</span>
                {verify && (
                    <svg stroke="currentColor" fill="currentColor" style={{ color: '#AAAAAA' }} strokeWidth="0" viewBox="0 0 16 16" className="text-white/[0.5] text-[12px] ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                )}
                <div>
                    <span className="m-2" style={{ color: '#AAAAAA' }}>{formatViews(views)} views</span>
                    <span style={{ color: '#AAAAAA' }}>{publishtime}</span>
                </div>

            </div>

        </div>
    );
}
