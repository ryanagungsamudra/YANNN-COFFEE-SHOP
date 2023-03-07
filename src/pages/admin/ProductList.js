import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllproducts } from '../../redux/actions/products'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer'
// import Search from "../../assets/product/search.svg"
import axios from 'axios'

function ProductList() {
    const url = process.env.REACT_APP_HOST
    const urlImage = process.env.REACT_APP_IMG
    const token = JSON.parse(localStorage.getItem('@userLogin')).token
    // status navbar
    const status = {
        Product: "active-nav",
    }
    // REDUX
    const { data } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllproducts())
    }, [])

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`${url}/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'token': `${token}`,
                }
            })
            alert('Succesfully deleted!');
            window.location.reload();
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <>
            <Navbar status={status} />
            <div aria-label='breadcrumb' style={{ marginTop: '8.5rem' }}>
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
            <div className="container" style={{ marginTop: '-1rem' }}>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {data.map((item) => {
                        const img = `${urlImage}/${item.images[0].filename}`
                        // const idProduct = item.images[0].id_product;
                        return (
                            <div key={item.id} className="col-lg-2 col-6 text-start my-5">
                                <div className="card card-product" style={{ height: '212px', width: '156px', boxShadow: '0 3px 20px rgba(0, 0, 0, 0.5)' }}>
                                    <img src={img} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title-product" style={{ marginTop: '-100px' }}>{item.title}</h5>
                                        <p className="s-4-product" style={{ marginTop: '-10px' }}>{item.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to={`/editproducts/${item.id}`}><button className='btn btn-warning px-4 mt-2' style={{ borderRadius: '20px' }}>Edit</button></Link>
                                    <button
                                        className='btn btn-danger mt-2'
                                        style={{ borderRadius: '20px' }}
                                        onClick={() => deleteProduct(item.id)}
                                    >Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductList