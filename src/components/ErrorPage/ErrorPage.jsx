import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

const ErrorPage = () => {
    return (
        <div className='text-center mt-5 d-flex align-item-center justify-content-center'>
            <div className='p-5'>
                <FontAwesomeIcon className='text-warning fs-1 mb-5' icon={faFaceSadTear} />
                <h1>404</h1>
                <h4>File not found</h4>
            </div>
        </div>
    );
};

export default ErrorPage;