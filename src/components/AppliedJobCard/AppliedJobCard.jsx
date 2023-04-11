import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({ job }) => {
    const { image, jobTitle, companyName, jobType, WhereSitsWork, location, salary, id } = job;
    return (
        <div>
            <div className="card mb-3 container">
                <div className="row g-0">
                    <div className="col-md-4 my-auto">
                        <img src={image} className="img-fluid ps-3 rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6 my-auto">
                        <div className="card-body">
                            <h6 className="card-title">{jobTitle}</h6>
                            <p>
                                <small className="card-text text-muted">{companyName}</small>
                            </p>
                            <div className='my-3'>
                                <small className='jobType-whereSite-Style me-2 fw-medium'>{jobType}</small>
                                <small className='jobType-whereSite-Style ms-2 fw-medium'>{WhereSitsWork}</small>
                            </div>
                            <div className='text-muted fw-medium my-3'>
                                <small className='me-3'>
                                    <FontAwesomeIcon className='me-1' icon={faLocationDot} />
                                    {location}
                                </small>
                                <small>
                                    <FontAwesomeIcon className='me-1' icon={faCircleDollarToSlot} />
                                    Salary: {salary}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 my-auto">
                        <Link to={`/jobDetails/${id}`}><button className='btn-style'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobCard;