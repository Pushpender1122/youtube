// import Test from "./componnent/api";
import React, { useState, useEffect } from "react";
import Navbar from "./componnent/navbar/navabr";
import Sidebar from "./componnent/navbar/sidebar";
import Feed from "./componnent/feed/feed";
import Api from './componnent/api'
import Render from "./componnent/renderhome/render";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchResults from "./search/search";
import { dataContext } from './componnent/navbar/sidebar'
import Video from "./video/video";

function App() {


  document.body.style.backgroundColor = 'black';
  const [rerender, setRerender] = useState(0);
  useEffect(() => {
    setRerender((prev) => prev + 1); // Update the state to trigger a re-render

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Sidebar counterforrender={1} />} />
          <Route path="/search" exact element={<SearchResults />} />
          <Route path="/video/:id" exact element={<Video />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;

