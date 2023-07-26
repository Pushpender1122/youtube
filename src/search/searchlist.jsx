import React, { useState, useEffect } from 'react';
import Feed from '../componnent/feed/feed';
import Api from '../componnent/api';
import '../componnent/feed/feed.css'
import SearchShow from './searchresult';


const SerachlistVideo = (props) => {
  const [youtube_data, setYoutube_data] = useState([]);

  useEffect(() => {
    // Fetch data from API and update the state
    // Api('/youtubedata')
    //   .then(data => setYoutube_data(data.contents))
    //   .catch(error => console.error(error));
    // console.log(props.data);
    // console.log(box);
    // console.log(box.children)
   
      // box?.remove()
    
    
    
    setYoutube_data(props.data)
    console.log("work");
  }, []);

  return (
    // remove p-5 in mobile
    <div className='d-flex flex-wrap flex-column text-cente overflow-auto p-5 video_card ' style={{width:'87vw'}}>

      {youtube_data.map((item, index) => {
        if (item.type === 'video' && item.video) {
          const videoData = item.video;
          return (
            <SearchShow   
            key={index}
            title={videoData.title}
            verify={videoData.author.badges}
            channel_name={videoData.author.title}
            author_image={videoData.author.avatar[0].url}
            image={videoData.thumbnails[0].url}
            views={videoData.stats.views}
            publishtime={videoData.publishedTimeText }
            description={videoData.descriptionSnippet}
            video_id={videoData.videoId}
            />
            );
          }
          return null; // If it's not a video, don't render anything
        })}
        </div>
     
  );
}

export default SerachlistVideo;