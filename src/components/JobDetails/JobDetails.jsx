import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useParams } from 'react-router-dom';
const JobDetails = () => {

    const details = useParams();
    // console.log(details)

    const [job, setJob] = useState([])


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faridul22/job-placement-hub-jobs-data-api/main/featuredJobsData.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])


    const singleJob = (job.length > 0) ? job.find(item => item.id == details.jobId) : {};
    // console.log(singleJob)

    const { id, jobDescription, jobResponsibilities, educationalRequirements, experiences, salary, jobTitle, phone, email, location } = singleJob;
    console.log(id)



    return (
        <div>
            <h3 className='text-center bg-light pb-5'>Job Details</h3>
            <div className="row mx-auto m-5  pb-5 container">
                <div className='col-md-8 pe-3'>
                    <p>
                        <strong>Job Description: </strong>
                        <small className='text-muted'>{jobDescription}</small>
                    </p>
                    <p>
                        <strong>Job Responsibility: </strong>
                        <small className='text-muted'>{jobResponsibilities}</small>

                    </p>
                    <small><strong>Educational Requirements:</strong></small>
                    <p>
                        <small className='text-muted'>{educationalRequirements}</small>
                    </p>
                    <small><strong>Experiences:</strong></small>
                    <p>
                        <small className='text-muted'>{experiences}</small>
                    </p>
                </div>

                <div className='col-md-4'>
                    <div className="job-detail-card">
                        <div>
                            <p><strong>Job Details</strong></p>
                            <hr className='' />
                            <p>Salary: <small>{salary}</small></p>
                            <p>Job Title: <small>{jobTitle}</small></p>
                        </div>
                        <div>
                            <p><strong>Contact Information</strong></p>
                            <hr />
                            <p>Phone: <small>{phone}</small></p>
                            <p>Email: <small>{email}</small></p>
                            <p>Address: <small>{location}</small></p>
                        </div>
                    </div>
                    <button className='btn-style w-100 mt-3'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;