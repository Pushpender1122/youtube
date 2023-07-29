import React, { useState, useEffect } from "react";
import { categories } from '../utils/constants';
import LeftNavMenuItem from "./leftnew";
// import LoadingBar from 'react-top-loading-bar'
import './sidenav.css';
import Api from '../api';
import Render from "../renderhome/render";
import Loader from "../loader/loader";
import { useNavigate } from 'react-router-dom';

export default function Sidebar(props) {

    const navigate = useNavigate();
    const [serachname, setSearchName] = useState('new');
    const [apidata, setData] = useState([]);
    const [rerender, setrender] = useState(0);
    const [loader, setlaoder] = useState(false)
    const [finder, setfinder] = useState(0)

    useEffect(() => {
        if (props.counterforrender == 1) {
            setlaoder(true);
            fetchdata('new');
        }

    }, [props.counterforrender])
    const handleSideNavbar = (text) => {

        navigate(`/`)
        setlaoder(true)
        var text = text.toLowerCase();
        if (text == 'home') {
            text = 'new'
        }

        setSearchName(text);
        console.log(text);
        fetchdata(text);
    }
    const fetchdata = async (text) => {
        const data = await Api(`https://youtube138.p.rapidapi.com/search/?q=${text}&hl=en&gl=in`);
        console.log('this is sidebar');
        console.log(data);
        setData(data?.contents);
        setlaoder(false)
        setrender(rerender + 1)

    }
    return (
        <>
            {loader && <Loader />}
            <div className="d-md-block w-2  40 overflow-y-auto h-100 py-4 bg-black position-absolute md-position-relative z-10 translate-x--240 md-translate-x-0 transition-all side">
                <div className="flex px-5 flex-col sidebar">
                    {/* categories for icons */}
                    {categories?.map((item) => (
                        <React.Fragment key={item.name}>
                            <div className="text-white text-sm d-flex align-items-center px-3 mb-1 rounded-lg cursor-pointer bg-transparent" onClick={() => handleSideNavbar(item?.name)}>
                                <span className="text-xl mr-5 custom-font-size"> {item.icon}</span>
                                {item.name == 'New' ? item.name = 'Home' : item.name}
                            </div>
                            {item?.name.toLowerCase() === 'fashion & beauty' && (<hr className="my-5 border" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
                            )}
                        </React.Fragment>
                    ))}

                    <hr className="my-5 border" style={{ borderColor: "white", opacity: 0.2 }} />
                    <div className="text-white text-[12px]">
                        Clone by: Pushpender
                    </div>
                </div>
            </div>
            <Render data={apidata} key={rerender} />

        </>
    )
}
