import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const JobCategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('jobCategoryData.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='my-5'>
            <div className='my-4'>
                <h3 className='text-center fw-bold'>Job Category List</h3>
                <p className='text-muted text-center'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    categories.map(category => <CategoryCard
                        key={category.id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;