import React from 'react';
import coffeeLoading from '../../assets/coffee-and-doughnut-loading.gif';
// import coffeeLoading from '../../assets/loading-coffee.gif';
import './index.css';

function LoadingProduct() {
  return (
    <div className='container product-content-wrapper my-5 py-5'>
      <div className='row justify-content-center'>
        <div className='col'>
          <img src={coffeeLoading} alt='loading' className='coffee-loading' style={{ marginTop: '-10rem' }} />
        </div>
        <div className='col'>
          <h4 style={{ marginLeft: '8rem', marginTop: '2rem' }}>Loading...</h4>
        </div>
      </div>
    </div>
  );
}

export default LoadingProduct;
