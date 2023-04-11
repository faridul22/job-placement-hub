import React from 'react';
import Header from '../Header/Header';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <div className='bg-light'>
                <div className='w-75 mx-auto'>
                    <Header></Header>
                </div>
            </div>
            <div className='container'>
                <JobCategoryList></JobCategoryList>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;