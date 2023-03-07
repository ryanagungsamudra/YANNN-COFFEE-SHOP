import React, { useEffect, useState } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Promo_1 from "../../assets/product/promo-1.svg"
import Promo_2 from "../../assets/product/promo-2.svg"
import Promo_3 from "../../assets/product/promo-3.svg"
import Promo_4 from "../../assets/product/promo-4.svg"
// import productImg from '../../assets/product-detail/hero.png';
import Search from "../../assets/product/search.svg"
import LoadingProduct from './errorHandling/loadingProduct'
import DataNotFound from './errorHandling/dataNotFound'
// url backend
const url = process.env.REACT_APP_HOST
const urlImage = process.env.REACT_APP_IMG
// console.log(url);
// console.log(urlImage);

function Main() {
    // Load data product
    const [dataProduct, setDataProduct] = useState([])
    // Load search data product
    const [searchData, setSearchData] = useState([]);
    const [keyword, setKeyword] = useState('');
    // Pagination
    const [pageLimit] = useState(12) //set page limit
    const [currentPage, setCurrentPage] = useState(1)

    // get data product
    useEffect(() => {
        axios.get(`${url}/api/products`)
            .then(res => setDataProduct(res.data.data))
            .catch((err) => console.log(err))
    }, [])
    // get sort data product
    const handleSort = async (e) => {
        let value = e.target.value
        return await axios
            .get(`${url}/api/products?search=${keyword}&sortBy=${value}&limit=${pageLimit}&page=1`)
            .then((response) => {
                setSearchData(response.data.data)
            })
            .catch((err) => console.log(err))
    }
    // Category
    const category = async (value) => {
        return await axios
            .get(`${url}/api/products?category=${value}`)
            .then((response) => {
                setSearchData(response.data.data)
            })
            .catch((err) => console.log(err))
    }
    // Pagination and search
    useEffect(() => {
        loadProductData(pageLimit, 1, 0)
    }, [keyword])
    const loadProductData = async (limit, page, increase) => {
        return await axios
            .get(`${url}/api/products?search=${keyword}&limit=${limit}&page=${page}`)
            .then((res) => {
                setSearchData(res.data.data);
                setCurrentPage(currentPage + increase)
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const renderPagination = () => {

        const rulesOne = (currentPage > pageLimit - 1 && searchData.length === pageLimit)
        const rulesTwo = (currentPage < pageLimit - 1 && searchData.length === pageLimit)

        if (currentPage === 1) {
            // console.log(currentPage);
            return (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link to="#" className="page-link">1</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link" onClick={() => loadProductData(pageLimit, 2, 1)}>Next</Link>
                        </li>
                    </ul>
                </nav>
            )
        } else if (rulesOne || rulesTwo) {
            // console.log(currentPage);
            return (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link to="#" className="page-link" onClick={() => loadProductData(pageLimit, (currentPage - 1), -1)}>Previous</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link">{currentPage}</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link" onClick={() => loadProductData(pageLimit, (currentPage + 1), 1)}>Next</Link>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            // console.log(currentPage);
            return (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link to="#" className="page-link" onClick={() => loadProductData(pageLimit, (currentPage - 1), -1)}>Previous</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link">{currentPage}</Link>
                        </li>
                    </ul>
                </nav>
            )
        }
    }

    // Handle server error or data not found!
    const isLoad = () => {
        if (dataProduct.length === 0) {
            return (<LoadingProduct />)
        } else if (searchData.length === 0) {
            return (<DataNotFound />)
        }
    }
    // Product content
    const loopCard = () => {
        return (
            <div className="container" style={{ marginTop: '-1rem' }}>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {searchData.length === 0 ? isLoad() : searchData.map((item) => {
                        const img = `${urlImage}/${item.images[0].filename}`
                        const idProduct = item.images[0].id_product;
                        // console.log(item.images[0].id_product);
                        return (
                            <div key={item.id} className="col-lg-3 col-6 text-start my-5 popup">
                                <Link to={`/products/detail/${idProduct}`}>
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={img} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>{item.title}</h5>
                                            <p className="s-4-product" style={{ marginTop: '-10px' }}>{item.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    // ADMIN 
    const editPromoAdmin = () => {
        const role = localStorage.getItem('@userRole')
        if (role === 'admin') {
            return (
                <div className='text-start' style={{ marginTop: '3.5rem', paddingBottom: '3rem' }}>
                    <Link to='/editpromo'><h5 className='edit-product-admin'>Edit promo</h5></Link>
                    <Link to='/addpromo'><h5 className='edit-product-admin'>Add new promo</h5></Link>
                </div>
            )
        } else {
            return ('')
        }
    }
    const editProductAdmin = () => {
        const role = localStorage.getItem('@userRole')
        if (role === 'admin') {
            return (
                <div className='text-start' style={{ marginTop: '3.5rem', marginLeft: '1rem' }}>
                    <Link to='/productlist'><h5 className='edit-product-admin'>Edit product</h5></Link>
                    <Link to='/addproducts'><h5 className='edit-product-admin'>Add new product</h5></Link>
                </div>
            )
        } else {
            return ('')
        }
    }
    return (
        <main style={{ marginTop: '6rem' }}>
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-lg-4 border-end border-2 text-center ms-3 ms-lg-0">
                        <h4 className="s-1-product me-4 me-lg-0" style={{ marginTop: '60px' }}>Promo Today</h4>
                        <p className="s-2-product pt-3 me-4 me-lg-0" style={{ marginBottom: '60px' }}>Coupons will be updated every weeks. <br />Check them out!</p>

                        {/* Promo Card Start */}
                        <div>
                            <div className="box-card-1-product popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-2" src={Promo_1} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-3">
                                            <p><b>HAPPY MOTHER’S DAY!</b><br />Get one of our favorite menu for free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-card-2-product my-4 popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-2" src={Promo_2} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-3">
                                            <p><b>Get a cup of coffee for free on sunday morning</b><br />Only at 7 to 9 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-card-1-product popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-2" src={Promo_3} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-3">
                                            <p><b>HAPPY MOTHER’S DAY!</b><br />Get one of our favorite menu for free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-card-3-product my-4 popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-1" src={Promo_4} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-2">
                                            <p><b>HAPPY HALLOWEEN!</b>
                                                <br />Do you like chicken wings? <br />Get 1 free only if you buy pinky promise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Promo Card End */}
                        <Link to="#">
                            <button className="btn btn-warning product" style={{ margin: '50px 20px 90px 0px' }}>Apply Coupon</button>
                        </Link>
                        <p className="text-start s-3-product" style={{ marginTop: '-1rem' }}>
                            <b>Terms and Condition</b><br />
                            1. You can only apply 1 coupon per day<br />
                            2. It only for dine in<br />
                            3. Buy 1 get 1 only for new user<br />
                            4. Should make member card to apply coupon<br />
                        </p>
                        {editPromoAdmin()}
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="col-lg-8">

                        {/* sort by start */}
                        <select className="form-select product mobile" aria-label="Default select example" onChange={handleSort}>
                            <option selected>Sort price by</option>
                            <option value="asc">Lowest price</option>
                            <option value="desc">Highest price</option>
                        </select>
                        {/* sort by end */}

                        {/* search bar start */}
                        <div className="searchBox mobile">
                            <input type="text" placeholder="Search Anything You Want..." onChange={(e) => setKeyword(e.target.value)} />
                            <img src={Search} alt="searchBox" />
                        </div>
                        {/* search bar end */}

                        {/* Navs & Tabs Start*/}
                        <ul className="nav justify-content-center mt-4">
                            <li className="nav-item">
                                <Link to="#" onClick={() => loadProductData(pageLimit, 1, 0)} className='nav-link products'>Favorite &amp; Promo</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="#" onClick={() => category("Coffee")} className='nav-link products'>Coffee</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" onClick={() => category("Non Coffee")} className='nav-link products'>Non Coffee</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="#" onClick={() => category("Foods")} className='nav-link products'>Foods</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" onClick={() => category("add-on")} className='nav-link products'>Add-on</Link>
                            </li>
                        </ul>
                        {/* Navs & Tabs End */}

                        {/* Card-Product Start */}
                        {loopCard()}
                        {/* Pagination start */}
                        {renderPagination()}
                        {/* Pagination end */}

                        <p className="s-5-product ms-3">*the price has been cutted by discount appears</p>
                        {/* Card-Product End */}
                        {editProductAdmin()}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main