import React,{useEffect,useState} from 'react'
import ReactPlayer from 'react-player'
import Api from '../componnent/api'
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai"
import { abbreviateNumber } from "js-abbreviation-number";
import './video.css'
import { useMediaQuery } from "@react-hook/media-query";
import SeachRelatedvideo from './seachRelatedvideo';

function Video() {
  const [videodata,setvideodata]=useState('')
  const [videodatarelated,setvideodataRelated]=useState('')
  const { id } = useParams();
  const isMobile = useMediaQuery("(max-width: 767px)");
  console.log(id);
  useEffect(()=>{
    
    fetchdata();
    fetchdataRelated();
  },[id])
  const fetchdata= async()=>{
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=in`;
    const data= await Api(url);
    setvideodata(data);
    console.log(data);
  }
  const fetchdataRelated = async()=>{
    const urlRelated = `https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=in`;
    const data= await Api(urlRelated);
    setvideodataRelated(data);
    console.log(data.contents);

  }
  return (
    <>
    <div className='text-white mt-5 custom-pos'style={{width:'41vw',height:'100vh'}}>
      <div >
        <ReactPlayer  url= {`https://www.youtube.com/watch?v=${id}`}
        controls
        width={isMobile ? "100vw" : "40vw"} 
        height={isMobile ? "40vh" : "50vh"}
        // style={{ backgroundColor: "#000000" }}
        playing={true}
        />
        </div>
        <div className='text-white 'style={{fontSize:'1.5rem'}}>
          {videodata?.title}
        </div>
        <div className='avatar'>
        <img src={videodata?.author?.avatar[0]?.url} width='50px' className="rounded-circle" alt="user" style={{marginRight: '0.5rem'}} />
        <span className='position-absolute'>{videodata?.author?.title}
        {videodata?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill style={{color:'#AAAAAA',marginLeft:'0.5rem'}} /> )}</span>
        <span className="position-relative sub"style={{color:'#AAAAAA'}}>{videodata?.author?.stats?.subscribersText}</span>
        <div className='text-white d-inline-block likes '>
          <div className='align-items-center d-flex likesborder'>
        <AiOutlineLike className="text-xl text-white mr-2" />{`${abbreviateNumber( videodata?.stats?.views,2)} Likes`}
          </div>
        </div>
        </div>
    </div>
        <div className='text-white d-flex flex-column ' style={{width:'86vw'}}>
          <div className=' search-list mt-5 related'>
          {videodatarelated?.contents?.map((value,index)=>{
            if (value?.type != "video") return false;
            return( 
              <SeachRelatedvideo key={index} video={value?.video}/>
              )
            })}
            </div>
        </div>
        </>
  )
}

export default Video
