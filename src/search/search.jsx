import React,{useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import Api from "../componnent/api";
import Sidebar from "../componnent/navbar/sidebar";
import Searchvideo from "./searchlist";
import Render from "../componnent/renderhome/render";
import Loader from "../componnent/loader/loader";
import SerachlistVideo from "./searchlist";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [youtube_data, setYoutube_data] = useState([]);
  const [rerender, setRerender] = useState(0);
  const [loader, setlaoder] = useState(false)
  
  useEffect(() => {
    // Fetch data from API and update the state  
    // Api('/youtubedata')
    //   .then((data)=>{
    //     setYoutube_data(data.contents);
    //     setlaoder(false);
    //     setRerender((prev) => prev + 1);
    //   })
    //   .catch(error => console.error(error));
    setlaoder(true)
    fetchdata(query);
    
    console.log('work this is seachresult')
    console.log(query)
    console.log(youtube_data)
    
    console.log("Value of setrender "+ rerender)
}, [query]);
  const fetchdata = async (query) => {
    const data = await Api(`https://youtube138.p.rapidapi.com/search/?q=${query}&hl=en&gl=in`)
   
        setYoutube_data(data?.contents);
        setlaoder(false);
        setRerender((prev) => prev + 1); // Update the state to trigger a re-render
  };
  return (
    <>
      <Sidebar />
    {loader?<Loader/>: <SerachlistVideo data={youtube_data} key={rerender}/>}
       {/* <div>
    
    <Render data={youtube_data} key={rerender}/>


    </div> */}
    {/* <Searchvideo serachData={youtube_data} key={rerender}/> */}
    </>
  );
};

export default SearchResults;

