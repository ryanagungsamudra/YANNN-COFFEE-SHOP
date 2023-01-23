import React from 'react';
import coffeeLoading from '../../../assets/CoffeeLoading.gif';
import './index.css';

function LoadingProduct() {
  return (
    <div className='container product-content-wrapper my-5 py-5'>
      <div className='row justify-content-center'>
        <div className='col'>
          <img src={coffeeLoading} alt='loading' className='coffee-loading gif' />
        </div>
        <div className='col'>
          <h4 className='text-loading'>Loading...</h4>
        </div>
      </div>
    </div>
  );
}

export default LoadingProduct;
