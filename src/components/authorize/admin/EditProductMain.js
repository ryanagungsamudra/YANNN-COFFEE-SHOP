import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import minus from "../../../assets/product-detail/minus.png"
import plus from "../../../assets/product-detail/plus.png"
import './style.css'
import axios from 'axios';
import { getAllproducts } from '../../../redux/actions/products'
import { useDispatch, useSelector } from 'react-redux';

function EditProductMain() {
    const url = process.env.REACT_APP_HOST
    const urlImage = process.env.REACT_APP_IMG
    const token = JSON.parse(localStorage.getItem('@userLogin')).token
    const navigate = useNavigate()

    // REDUX
    const { data } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllproducts())
    }, [])

    // State normal
    const { id } = useParams()
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [imagePreview, setImagePreview] = useState('')

    const updateProduct = async (e) => {
        e.preventDefault();
        const body = new FormData();
        body.append('title', title);
        body.append('price', price);
        body.append('category', category);
        body.append('img', image);

        try {
            await axios.patch(`${url}/api/products/${id}`, body, {
                method: 'PATCH',
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

    // Cart Amount Toggle
    const [amount, setAmount] = useState(1);
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < 15 ? setAmount(amount + 1) : setAmount(15) // angka 15 diganti jumlah stock barang nantinya
    }
    return (
        data.map((item) => {
            if (id === item.id) {
                const imgSelectedProduct = `${urlImage}/${item.images[0].filename}`
                return (
                    <div className='Add-product-wrapper' style={{ marginTop: '8.5rem' }}>
                        <div aria-label='breadcrumb'>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>
                                    <Link className='breadcrumb-page' to='/products'>
                                        Favorite & Promo
                                    </Link>
                                </li>
                                <li className='breadcrumb-item'>
                                    <Link className='active-page' to='/productlist'>
                                        Edit Product
                                    </Link>
                                </li>
                                <li className='breadcrumb-item'>
                                    <Link className='breadcrumb-page' to='/addproducts'>
                                        Add new product
                                    </Link>
                                </li>
                            </ol>
                        </div>
                        <form onSubmit={updateProduct} style={{ marginTop: '3rem' }}>
                            <div className='row add-product-content'>
                                <aside className='col-11 col-sm-11 col-md-10 col-lg-5'>
                                    <h3>{item.title}</h3>
                                    <div style={{ marginTop: '3rem' }}>
                                        {imagePreview ? <img src={imagePreview} className='add-image' alt='Product' /> : <img src={imgSelectedProduct} className='add-image' alt='Product' />}
                                    </div>
                                    <button
                                        className='btn btn-block btn-add-byGallery btn-yellow-color font-brown-color'
                                        style={{ marginTop: '-3rem' }}
                                        type='file'
                                        onClick={() => document.querySelector(".input-field").click()}>
                                        Choose from gallery
                                    </button>
                                    <input type='file' className='input-field' hidden onChange={(e) => onImageUpload(e)} />
                                    <button
                                        className='btn change-img-btn'
                                        type='button'>
                                        <i className='bi bi-trash'></i>
                                    </button>
                                    <p className='product-time-desc' style={{ marginLeft: '3rem', marginTop: '2rem' }}>
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
                                            placeholder={item.title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group ms-5 my-3'>
                                        <input
                                            type='number'
                                            name='price'
                                            className='form-control edit-product-input-price'
                                            id='formGroupExampleInput2'
                                            placeholder={`IDR ${item.price}`}
                                            onChange={(e) => setPrice(e.target.value)}
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
                                        <div className='dropdown my-2' style={{ marginLeft: '3rem' }}>
                                            <select name='delivery' id='selectDelivery' className='btn start-hour-btn' onChange={(e) => setCategory(e.target.value)}>
                                                <option selected>{item.category}</option>
                                                <option>Coffee</option>
                                                <option>Non Coffee</option>
                                                <option>Foods</option>
                                                <option>Add-on</option>
                                            </select>
                                        </div>
                                        <div className='dropdown' style={{ marginLeft: '3rem' }}>
                                            <select name='size' id='selectSize' className='btn start-hour-btn'>
                                                <option selected>Select size</option>
                                                <option>Regular</option>
                                                <option>Large</option>
                                                <option>Extra large</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='form-group' style={{ marginLeft: '2rem' }}>
                                        <div className='row' style={{ marginLeft: '1rem', marginTop: '1rem' }}>
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
        })
    )
}

export default EditProductMain