import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {

    return(
        <nav>
            <div>
                <Link to={"/"}>OnCare  </Link>
                <Link to={"/Register"}>Register  </Link>
                <Link to={"/Login"}>Login  </Link>
            </div>
        </nav>
    )
}


export default Home;