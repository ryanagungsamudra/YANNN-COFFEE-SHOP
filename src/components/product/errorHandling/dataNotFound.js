import React from 'react'
import NotFound from '../../../assets/NotFound.gif';
import './index.css';

function DataNotFound() {
  return (
    <div className='container product-content-wrapper my-5 py-5'>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <img src={NotFound} alt='loading' className='notfound-loading gif' />
            </div>
        </div>
    </div>
  )
}

export default DataNotFound