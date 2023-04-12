import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import FeaturedJobsCard from '../FeaturedJobsCard/FeaturedJobsCard';
const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);

    const [sliceData, setSliceData] = useState(false);

    useEffect(() => {
        fetch('/featuredJobsData.json')
            .then(res => res.json())
            .then(data => {
                setFeaturedJobs(data)
            })
    }, []);


    const handleSeeAll = () => {
        setSliceData(current => !current)
        console.log(sliceData)
    }
    return (
        <div className='my-5'>
            <div className='my-4'>
                <h3 className='text-center fw-bold'>Featured Jobs</h3>
                <p className='text-muted text-center'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    sliceData == true ? featuredJobs.map(featuredJob => <FeaturedJobsCard
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></FeaturedJobsCard>) : featuredJobs.slice(0, 4).map(featuredJob => <FeaturedJobsCard
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></FeaturedJobsCard>)
                }
            </div>
            <div className={`text-center my-5  ${sliceData == true ? 'd-none' : 'd-block'}`}>
                <button onClick={handleSeeAll} className='btn-style'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;