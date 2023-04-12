import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {
    const totalAppliedJob = getShoppingCart();

    const [appliedJob, setAppliedJob] = useState([]);
    console.log(appliedJob)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faridul22/job-placement-hub-jobs-data-api/main/featuredJobsData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(totalAppliedJob)
                // console.log(data)
                const jobArray = []
                for (const id in totalAppliedJob) {
                    // console.log(id)
                    const job = data.find(d => d.id === id)
                    jobArray.push(job)
                }
                setAppliedJob(jobArray)
            })




    }, [])


    const [sort, setSort] = useState(null);
    // console.log(short)


    const handleFilterChange = (e) => {
        setSort(e.target.value)

    }

    const filteredJobs = sort ? appliedJob.filter(job => job.WhereSitsWork === sort) : appliedJob;


    return (
        <div>
            <h3 className='text-center bg-light pb-5'>Applied Jobs</h3>
            <div className='my-5 py-5'>
                <div className='container d-flex justify-content-end'>
                    <div className='mb-2'>



                        <select
                            className='py-2 px-3'
                            defaultValue="Filter By"
                            onChange={handleFilterChange}
                        >
                            <option className='btn btn-outline-secondary mb-2 me-2 ' value={null} disabled>Filter By</option>
                            <option className='btn btn-outline-secondary mb-2 me-2' value="Onsite">Onsite</option>
                            <option className='btn btn-outline-secondary mb-2 me-2' value="Remote">Remote</option>
                        </select>



                    </div>
                </div>
                {
                    filteredJobs.map((job) => <AppliedJobCard
                        key={job.id}
                        job={job}
                    ></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;