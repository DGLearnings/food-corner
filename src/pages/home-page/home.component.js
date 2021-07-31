import React from 'react';
import { Link } from 'react-router-dom';
import "./home.styles.scss"

const HomePage = () => {

    return (
        <div className="HomePage">
            <h1>Welcome to Food Corner</h1>
            <p>
               <Link to="/branches">Select a branch nearest to you</Link>
            </p>
        </div>

    );
}

export default HomePage;

