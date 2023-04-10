import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container row bg-light">
            <div className="header-info col-md-6 col-lg-6 col-sm-12 py-auto my-auto">
                <h1 className='header-title w-75'>One Step Closer To Your <span>Dream Job</span></h1>
                <p className='text-muted'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-style'>Get Started</button>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 pb-0 mb-0 my-auto">
                <img className='img-fluid' src={'../../../src/assets/Images/P3OLGJ1 copy 1.png'} alt="" />
            </div>
        </div>
    );
};

export default Header;