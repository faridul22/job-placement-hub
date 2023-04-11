import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {
    const totalAppliedJob = getShoppingCart();

    // const [job, setJob] = useState([]);

    const [appliedJob, setAppliedJob] = useState([])
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


    // useEffect(() => {
    //     let previousApply = []
    //     for (const apply in totalAppliedJob) {
    //         previousApply.push(apply)
    //         setAppliedJob(previousApply)
    //     }
    // }, [])

    // const { id, jobDescription, jobResponsibilities, educationalRequirements, experiences, salary, jobTitle, phone, email, location } = singleJob;


    return (
        <div>
            <h3 className='text-center bg-light pb-5'>Applied Jobs</h3>
            <div className='my-5 py-5'>
                {
                    appliedJob.map((job) => <AppliedJobCard
                        key={job.id}
                        job={job}
                    ></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;