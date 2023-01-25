import React from 'react'
import { Link } from 'react-router-dom';
import productImg from '../../../assets/product/p7.png'
import './style.css'

function AddProductsMain() {
  return (
    <div className='Add-product-wrapper' style={{ marginTop: '6.2rem' }}>
        <div aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link className='breadcrumb-page' to='/products'>
                        Favorite & Promo
                    </Link>
                </li>
                <li className='breadcrumb-item'>
                    <Link className='active-page' to='/addproducts'>
                        Add new product
                    </Link>
                </li>
                <li className='breadcrumb-item'>
                    <Link className='breadcrumb-page' to='/editproducts'>
                        Edit product
                    </Link>
                </li>
            </ol>
        </div>
        <form>
            <div className='row add-product-content'>
                <aside className='col col-md-4'>
                    <div>
                        <img
                            src={productImg}
                            className='add-image'
                            alt='add pic'
                        />
                    </div>
                    <button
                        className='btn btn-block btn-take-picture'
                    >
                        Take a picture
                    </button>
                    <button
                        className='btn btn-block btn-add-byGallery btn-width-container btn-yellow-color font-brown-color '
                    >
                        Choose from gallery
                    </button>
                    <div className='form-wrapper'>
                        <p className='add-product-title aside-title-input'>
                            Delivery Hour :
                        </p>
                        <div className='delivery-hour'>
                            <input
                                type='file'
                                name='image'
                                id='image'
                                hidden
                            />
                            <input
                                type='time'
                                name='deliveryStart'
                                className='start-hour-btn px-3'
                                defaultValue={'12:00'}
                                placeholder='Select start hour'
                            />
                        </div>
                        <div className='delivery-hour'>
                            <input
                                type='time'
                                name='deliveryEnd'
                                className='start-hour-btn px-3'
                                defaultValue={'21:00'}
                                placeholder='Select end hour'
                            />
                        </div>
                    </div>
                    <div>
                        <p className='add-product-title aside-title-input'>
                            Input Stock:
                        </p>
                        <div className='stock-input'>
                            <input
                                type='number'
                                min={1}
                                name='stock'
                                className='start-hour-btn px-3'
                                placeholder='Input stock'
                            />
                        </div>
                    </div>
                </aside>
                <div className='col col-md-6'>
                    <div className='form-group'>
                        <label className='add-product-title' htmlFor='name'>
                            Name :
                        </label>
                        <input
                            type='text'
                            className='form-control add-product-input'
                            id='formGroupExampleInput'
                            placeholder='Type product name min. 50 characters'
                            name='name'
                        />
                    </div>
                    <div className='form-group'>
                        <label className='add-product-title' htmlFor='category'>
                            Category :
                        </label>
                        <select
                            name='category'
                            id='category'
                            className='form-control add-product-input'
                        >
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='add-product-title'>Price :</label>
                        <input
                            type='text'
                            className='form-control add-product-input'
                            id='formGroupExampleInput2'
                            placeholder='Type the price'
                            name='price'
                        />
                    </div>
                    <div className='form-group'>
                        <label className='add-product-title'>Description :</label>
                        <input
                            type='text'
                            className='form-control add-product-input'
                            id='formGroupExampleInput2'
                            placeholder='Describe your product min. 150 characters'
                            name='description'
                        />
                    </div>
                    <div className='form-group'>
                        <p className='add-product-title'>Input product size :</p>
                        <p className='form-desc'>
                            Click size you want to use for this product
                        </p>
                        <div>
                            <button
                                className={`btn btn-radio btn-yellow-color no-outline`}
                                type='button'
                            >
                            </button>
                            <button
                                className={`btn btn-radio btn-yellow-color no-outline`}
                                type='button'
                            >
                            </button>
                            <button
                                className={`btn btn-radio btn-yellow-color no-outline`}
                                type='button'
                            >
                            </button>
                        </div>
                    </div>
                    <div className='form-group'>
                        <p className='add-product-title'>Input delivery methods :</p>
                        <p className='form-desc'>
                            Click methods you want to use for this product
                        </p>
                        <div className='row w-100 h-25 mx-0'>
                            <button
                                type='button'
                                className='col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer btn-yellow-color'
                            >
                                Home Delivery
                            </button>
                            <button
                                type='button'
                                className='col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer btn-yellow-color'
                            >
                                Dine In
                            </button>
                            <button
                                type='button'
                                className='col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer btn-yellow-color'
                            >
                                Take away
                            </button>
                        </div>
                    </div>
                    <div className='form-group my-5'>
                        <button className='col col-md col-lg btn btn-block btn-add-byGallery btn-brown-color font-white-color'>
                            Save Product
                        </button>
                        <button
                            type='reset'
                            className='col col-md col-lg btn btn-block btn-take-away'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddProductsMain