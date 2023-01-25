import React from 'react'
import { Link } from 'react-router-dom';
import productImg from '../../../assets/product/p7.png'
import './style.css'

function EditProductMain() {
    return (
        <div className='Add-product-wrapper' style={{ marginTop: '6.2rem' }}>
            <div aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <Link to='/products' className='breadcrumb-page'>
                            Favorite & Promo
                        </Link>
                    </li>
                    <li className='breadcrumb-item'>
                        <Link to={`/addproducts`} className='breadcrumb-page'>
                            Add Products
                        </Link>
                    </li>
                    <li className='breadcrumb-item'>
                        <span className='active-page'>Edit product</span>
                    </li>
                </ol>
            </div>
            <form>
                <div className='row add-product-content'>
                    <aside className='col-11 col-sm-11 col-md-10 col-lg-5'>
                        <div className='product-img-edit'>
                            <img
                                src={productImg}
                                className='edit-image'
                                alt='product'
                            />
                        </div>
                        <button
                            className='btn change-img-btn'
                            type='button'>
                            <i className='bi bi-trash'></i>
                        </button>
                        <p className='product-time-desc'>
                            Delivery only on <strong>Monday to</strong> <br />
                            <strong>friday</strong> at <strong>1 - 7 pm</strong>
                        </p>
                    </aside>
                    <input
                        type='file'
                        name='image'
                        id='image'
                        hidden
                    />
                    <div className='col-11 col-sm-11 col-md-10 col-lg-6 mx-auto'>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control edit-product-input'
                                id='formGroupExampleInput'
                                name='name'
                                maxLength={50}
                                placeholder='Type product name min. 50 characters'
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='number'
                                name='price'
                                className='form-control edit-product-input-price'
                                id='formGroupExampleInput2'
                                placeholder='Type the price'
                            />
                        </div>
                        <div className='form-group'>
                            <textarea
                                type='description'
                                className='form-control description-product-input'
                                id='formGroupExampleInput2'
                                name='description'
                                maxLength={150}
                                placeholder='Describe your product min. 150 characters'
                            />
                        </div>

                        <div>
                            <div className='dropdown'>
                                <input
                                    type='time'
                                    className='btn start-hour-btn'
                                    name='deliveryStart'
                                    placeholder='Select Start Hour'
                                />
                            </div>
                            <div className='dropdown'>
                                <input
                                    className='btn start-hour-btn'
                                    type='time'
                                    name='deliveryEnd'
                                />
                            </div>
                        </div>

                        <div className='form-group'>
                            {/* counter btn */}
                            <div className='row mx-0'>
                                <div className='col-4 col-md-3 count-wrapper d-flex align-items-md-center'>
                                    <div
                                        className='btn edit-product-btn-count'>
                                        -
                                    </div>
                                    <div className='edit-product-number'></div>
                                    <div
                                        className='btn edit-product-btn-count'>
                                        +
                                    </div>
                                </div>
                                <button
                                    className='col-5 col-md-5 btn-add-toCart border-0 btn-width-form-input-add btn-yellow-color font-brown-color'
                                    disabled>
                                    Add to cart
                                </button>
                            </div>
                            <button
                                className='col col-md-auto btn btn-block btn-add-byGallery btn-brown-color font-white-color save-change-btn'
                                type='submit'>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProductMain