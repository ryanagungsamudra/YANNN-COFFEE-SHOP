import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import placeholder from '../../../assets/product/placeholder.png'
import extraLarge from "../../../assets/product-detail/XL.png"
import small from "../../../assets/product-detail/R.png"
import large from "../../../assets/product-detail/L.png"
import gr250 from "../../../assets/admin/250gr.png"
import gr300 from "../../../assets/admin/300gr.png"
import gr500 from "../../../assets/admin/500gr.png"
import PromoProduct from  "../../../assets/admin/editpromo.png"
import './style.css'
import axios from 'axios';

function EditProductsMain() {
    const token = JSON.parse(localStorage.getItem('@userLogin')).token
    const url = process.env.REACT_APP_HOST

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('title', title);
        // console.log('price', price);
        // console.log('image', image);
        const body = new FormData();
        body.append('title', title);
        body.append('price', price);
        body.append('img', image);

        try {
            await axios.post(`${url}/api/products`, body, {
                method: 'POST',
                headers: {
                    'Content-type': 'multipart/form-data',
                    'token': `${token}`,
                }
            })
        } catch (error) {
            console.log(error.response.data.message);
        }

    }
    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file)
        setImagePreview(URL.createObjectURL(file))
    }
    return (
        <div className='' style={{ marginTop: '8.5rem' }}>
            <div aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <Link className='breadcrumb-page' to='/products'>
                            Favorite & Promo
                        </Link>
                    </li>
                    <li className='breadcrumb-item'>
                        <Link className='active-page' to='/addpromo'>
                            Edit promo
                        </Link>
                    </li>
                    <Link className='active-page' style={{marginLeft: '50rem', textDecoration: 'underline'}} to='#'>
                        Cancel
                    </Link>
                </ol>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='row add-product-content'>
                    <aside className='col col-md-4'>
                        <div className='container-editpromo' style={{marginLeft: '2.4rem', marginTop: '1rem'}}>
                            <img src={PromoProduct} alt='product' style={{width: '220px', height: '220px', marginTop: '2rem'}}/>
                            <h4 style={{marginTop: '-2.5rem'}}>Beef Spaghetti <br /> 20% OFF</h4>
                            <p>Buy 1 Choco Oreo and get <br/> 20% off for Beef Spaghetti</p>
                            <hr style={{borderTop: 'dotted 4px'}}/>
                            <p className='mt-4'>COUPON CODE</p>
                            <h4>FNPR15RG</h4>
                            <p>Valid untill October 10th 2020</p>
                        </div>
                        <div className='form-wrapper'>
                            <p className='add-product-title aside-title-input' style={{ marginTop: '3.5rem' }}>
                                Expire date :
                            </p>
                            <div className='delivery-hour' style={{ marginTop: '1.5rem' }}>
                                <p>Select start date</p>
                                <input
                                    type='date'
                                    name='deliveryEnd'
                                    className='start-hour-btn px-3'
                                    placeholder='Select start date'
                                    style={{ marginTop: '-2rem' }}
                                />
                                <p>Select end date</p>
                                <input
                                    type='date'
                                    name='deliveryEnd'
                                    className='start-hour-btn px-3'
                                    placeholder='Select start date'
                                    style={{ marginTop: '-2rem' }}
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '-2.8rem' }}>
                            <p className='add-product-title aside-title-input' style={{ paddingTop: '2.5rem' }}>
                                Input coupon code :
                            </p>
                            <div className='delivery-hour'>
                                <input
                                    type='text'
                                    name='coupon'
                                    className='start-hour-btn px-3'
                                    placeholder='Input code'
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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='add-product-title'>Price :</label>
                            <input
                                type='text'
                                className='form-control add-product-input'
                                id='formGroupExampleInput2'
                                placeholder='Type the price'
                                name='price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
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
                                Click size you want to use for this promo
                            </p>
                            <div className="row">
                                <div className="col">
                                    <a href="/addproducts"><img src={small} style={{ width: '65px', height: '65px', marginTop: '6px' }} alt="" /></a>
                                </div>
                                <div className="col">
                                    <a href="/addproducts"><img src={large} style={{ width: '65px', height: '65px', marginTop: '6px' }} alt="" /></a>
                                </div>
                                <div className="col">
                                    <a href="/addproducts"><img src={extraLarge} style={{ width: '65px', height: '65px', marginTop: '6px' }} alt="" /></a>
                                </div>
                                <div className="col">
                                    <a href="/addproducts"><img src={gr250} style={{ width: '65px', height: '65px', marginTop: '6px' }} alt="" /></a>
                                </div>
                                <div className="col">
                                    <a href="/addproducts"><img src={gr300} style={{ width: '65px', height: '65px', marginTop: '6px' }} alt="" /></a>
                                </div>
                                <div className="col">
                                    <a href="/addproducts"><img src={gr500} style={{ width: '65px', height: '65px', marginTop: '6px', marginRight: '9rem' }} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <p className='add-product-title'>Input delivery methods :</p>
                            <p className='form-desc'>
                                Click methods you want to use for this promo
                            </p>
                            <div className='row w-75 h-25' style={{ marginLeft: '1rem' }}>
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
                        <div className='form-wrapper' style={{marginTop: '-1.4rem'}}>
                            <p className='add-product-title aside-title-input' style={{ marginLeft: '6.8rem' }}>
                                Enter the discount :
                            </p>
                            <div className='delivery-hour'>
                                <input
                                    type='text'
                                    name='deliveryStart'
                                    className='start-hour-btn px-3'
                                    placeholder='Input discount in percent'
                                    style={{width: '40%', marginLeft: '5.6rem'}}
                                />
                            </div>
                        </div>
                        <div className='form-group my-1'>
                            <button
                                className='col-12 col-md col-lg btn btn-add-byGallery btn-brown-color font-white-color'
                                type='submit'>
                                Save change
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProductsMain