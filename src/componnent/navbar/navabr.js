import React, { useState } from "react";
import Youtube_logo from '../../image/yt-logo.png';
import Avatar from '../../image/avataer.png';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { Link } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchValue}`);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };

    return (
        <div className="bg-dark ">
            <nav className="navbar p-0 ">
                <div className="bg-dark pt-2 " style={{ height: '56px', padding: '20px' }}>
                    <Link className="navbar-brand " to="/">
                        <img src={Youtube_logo} alt="Youtube" width="110px" height="" />
                    </Link>
                </div>
                {/* Wrap the form around the input field */}
                <form className="d-flex search-bar" role="search" style={{ width: '25% ' }} onSubmit={handleSearch}>
                    <input
                        className="form-control me-2 text-white bg-dark search-border"
                        style={{ borderRadius: '20px', borderColor: 'black' }}
                        type="search"
                        value={searchValue}
                        onChange={(e) => { setSearchValue(e.target.value) }}
                        onKeyPress={handleKeyPress}
                        placeholder="Search"
                        aria-label="Search"
                    />
                    {/* The button type should be "submit" to trigger the form submission */}
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <img src={Avatar} width='50px' className="rounded-circle" alt="user" />
            </nav>
        </div>
    )
}
