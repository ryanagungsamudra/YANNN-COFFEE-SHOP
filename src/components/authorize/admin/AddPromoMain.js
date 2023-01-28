import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import imagePlaceHolder from '../../../assets/product/placeholder.png'
import extraLarge from "../../../assets/product-detail/XL.png"
import small from "../../../assets/product-detail/R.png"
import large from "../../../assets/product-detail/L.png"
import gr250 from "../../../assets/admin/250gr.png"
import gr300 from "../../../assets/admin/300gr.png"
import gr500 from "../../../assets/admin/500gr.png"
import './style.css'
import axios from 'axios';

function AddProductsMain() {
    const token = JSON.parse(localStorage.getItem('@userLogin')).token
    const url = process.env.REACT_APP_HOST

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [imagePreview, setImagePreview] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('title', title);
        // console.log('price', price);
        // console.log('category' ,category);
        // console.log('image', image);
        const body = new FormData();
        body.append('title', title);
        body.append('price', price);
        body.append('category', category);
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
                            Add new promo
                        </Link>
                    </li>
                </ol>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='row add-product-content'>
                    <aside className='col col-md-4'>
                        <div className='mt-5'>
                            {imagePreview ? <img src={imagePreview} className='add-image' alt='Product' /> : <img src={imagePlaceHolder} className='add-image' alt='Product' />}
                        </div>
                        <button
                            className='btn btn-block btn-take-picture'
                        >
                            Take a picture
                        </button>
                        <button
                            className='btn btn-block btn-add-byGallery btn-yellow-color font-brown-color'
                            style={{ marginTop: '-0.3rem' }}
                            type='file'
                            onClick={() => document.querySelector(".input-field").click()}>
                            Choose from gallery
                        </button>
                        <input
                            type='file'
                            className='input-field'
                            hidden
                            onChange={(e) => onImageUpload(e)} />
                        <div className='form-wrapper'>
                            <p className='add-product-title aside-title-input' style={{ paddingTop: '2.5rem' }}>
                                Enter the discount :
                            </p>
                            <div className='delivery-hour'>
                                <input
                                    type='text'
                                    name='deliveryStart'
                                    className='start-hour-btn px-3'
                                    placeholder='Input discount'
                                />
                            </div>
                            <p className='add-product-title aside-title-input' style={{ marginTop: '1.5rem' }}>
                                Expire date :
                            </p>
                            <div className='delivery-hour' style={{marginTop: '1.5rem'}}>
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
                        <div style={{marginTop: '-2.8rem'}}>
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
                            <label className='add-product-title'> Normal Price :</label>
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
                        <div className='form-group my-5'>
                            <button
                                className='col-12 col-md col-lg btn btn-add-byGallery btn-brown-color font-white-color'
                                type='submit'>
                                Save Product
                            </button>
                            <button
                                type='reset'
                                className='col-12 col-md col-lg btn btn-take-away'
                                style={{ width: '80%', marginTop: '-0.3rem' }}>
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