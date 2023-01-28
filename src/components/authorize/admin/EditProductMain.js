import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import productImg from '../../../assets/product/p7.png'
import minus from "../../../assets/product-detail/minus.png"
import plus from "../../../assets/product-detail/plus.png"
import './style.css'

function EditProductMain() {

    // Cart Amount Toggle
    const [amount, setAmount] = useState(1);
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < 15 ? setAmount(amount + 1) : setAmount(15) // angka 15 diganti jumlah stock barang nantinya
    }
    return (
        <div className='Add-product-wrapper' style={{ marginTop: '8.5rem' }}>
            <div aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <Link to='/products' className='breadcrumb-page'>
                            Favorite & Promo
                        </Link>
                    </li>
                    <li className='breadcrumb-item'>
                        <span className='active-page'>Edit product</span>
                    </li>
                </ol>
            </div>
            <form style={{marginTop: '3rem'}}> 
                <div className='row add-product-content'>
                    <aside className='col-11 col-sm-11 col-md-10 col-lg-5'>
                        <div className='product-img-edit' style={{marginTop: '2.5rem'}}>
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
                        <p className='product-time-desc' style={{marginLeft: '3rem', marginTop: '-6rem'}}>
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
                        <div className='form-group ms-5'>
                            <input
                                type='text'
                                className='form-control edit-product-input'
                                id='formGroupExampleInput'
                                name='name'
                                maxLength={50}
                                placeholder='Type product name min. 50 characters'
                            />
                        </div>
                        <div className='form-group ms-5 my-3'>
                            <input
                                type='number'
                                name='price'
                                className='form-control edit-product-input-price'
                                id='formGroupExampleInput2'
                                placeholder='Type the price'
                            />
                        </div>
                        <div className='form-group ms-5'>
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
                            <div className='dropdown my-2' style={{marginLeft: '3rem'}}>
                                <select name='size' id='selectSize' className='btn start-hour-btn'>
                                    <option selected>Select size</option>
                                    <option>Regular</option>
                                    <option>Large</option>
                                    <option>Extra large</option>
                                </select>
                            </div>
                            <div className='dropdown' style={{marginLeft: '3rem'}}>
                                <select name='delivery' id='selectDelivery' className='btn start-hour-btn'>
                                    <option selected>Select Delivery Methods</option>
                                    <option>Home Delivery</option>
                                    <option>Dine In</option>
                                    <option>Take Away</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-group' style={{ marginLeft: '2rem' }}>
                            <div className='row' style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                {/* <div className='col-4 col-md-3 count-wrapper d-flex align-items-md-center'>
                                    <div
                                        className='btn edit-product-btn-count' style={{ marginLeft: '-0.7rem' }}
                                        onClick={() => setDecrease()}>
                                        -
                                    </div>
                                    <div className='edit-product-number'>{amount}</div>
                                    <div
                                        className='btn edit-product-btn-count'
                                        onClick={() => setIncrease()}>
                                        +
                                    </div>
                                </div> */}
                                <div className="col d-flex mt-3">
                                    <Link to='#'><img src={minus} onClick={() => setDecrease()} style={{ width: '40px', height: '40px' }} alt="minus" /></Link>
                                    <p className="s-7-order mx-4">{amount}</p>
                                    <Link to='#'><img src={plus} onClick={() => setIncrease()} style={{ width: '40px', height: '40px' }} alt="plus" /></Link>
                                    <button
                                        className='col-5 col-md-5 btn btn-warning editproduct py-3' 
                                        style={{ marginLeft: '2rem', marginTop: '-1rem' }}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <button
                                className='col col-md-auto btn btn-primary editproduct py-4'
                                type='submit'
                                style={{ marginLeft: '1rem', marginTop: '2rem' }}>
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