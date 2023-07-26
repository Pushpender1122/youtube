import React, { useState } from "react";
import './navbar.css'
import Feed from "../feed/feed";
import Api from "../api";
const test = async (text) => {
    var text = text.toLowerCase();
    // const url = 'gag';
    // const url = `https://youtube138.p.rapidapi.com/search/?q=${text}&hl=en&gl=US`;

    // const response = await Api(url);
    // console.log("my dat a is ");
    // const result = await response.json();                        

    console.log(text);
    // console.log(test_data)

    // console.log(color);
}

const LeftNavMenuItem = ({ text, icon }) => {

    return (
        <div div className={"text-white text-sm d-flex align-items-center px-3 mb-1 rounded-lg cursor-pointer bg-transparent"} onClick={() => test(text)}>
            <span className="text-xl mr-5 fs-2">{icon}</span>{text}

        </div >

    );
};

export default LeftNavMenuItem;