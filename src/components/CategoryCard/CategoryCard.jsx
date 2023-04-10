import React from 'react';
import './CategoryCard.css'
const CategoryCard = ({ category }) => {
    const { img, jobTitle, availableJob } = category
    return (
        <div className="col text-center">
            <div className="single-category h-100 border rounded p-5">
                <div className='img-bg-color w-50 mx-auto mb-3 py-3 rounded'>
                    <img className='' width={40} src={img} alt="" />
                </div>
                <div className="">
                    <p className="title fw-medium">{jobTitle}</p>
                    <small className="text-muted">{availableJob}</small>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;