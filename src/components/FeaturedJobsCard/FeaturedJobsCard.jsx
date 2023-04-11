import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedJobsCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const FeaturedJobsCard = ({ featuredJob }) => {
    const { image, jobTitle, companyName, jobType, WhereSitsWork, location, salary } = featuredJob;
    return (
        <div className="col">
            <div className="h-100 border rounded p-5">
                <img width={150} className='' src={image} alt="" />
                <div className="">
                    <p className="title fw-bold fs-5 mt-4 mb-1">{jobTitle}</p>
                    <p className="text-muted mb-1">{companyName}</p>
                </div>
                <div className='my-3'>
                    <small className='jobType-whereSite-Style me-2 fw-medium'>{jobType}</small>
                    <small className='jobType-whereSite-Style ms-2 fw-medium'>{WhereSitsWork}</small>
                </div>
                <div className='text-muted fw-semibold my-3'>
                    <small className='me-3'>
                        <FontAwesomeIcon className='me-1' icon={faLocationDot} />
                        {location}
                    </small>
                    <small>
                        <FontAwesomeIcon className='me-1' icon={faCircleDollarToSlot} />
                        Salary: {salary}
                    </small>
                </div>
                <Link to='/'><button className='btn-style'>View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJobsCard;