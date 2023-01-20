// import React from 'react'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom';

// function OrderProduct() {
//     let { id } = useParams();

//     const [dataProducts, setDataProducts] = useState([])
//     useEffect(() => {
//         axios.get(`http://localhost:5000/api/products/${id}`)
//             .then((res) => setDataProducts(res.data.data))
//             .catch((err) => console.log(err))
//     }, [])
//     const [dataImages, setDataImages] = useState([])
//     useEffect(() => {
//         axios.get(`http://localhost:5000/api/products`)
//             .then((res) => setDataImages(res.data.data))
//             .catch((err) => console.log(err))
//     }, [])

//     const [size, setSize] = useState(0)

//     return (
//         <>
//             {dataImages.map((item) => {
//                 if (item.id === id) {
//                     const ImageURL = `http://localhost:5000/uploads/images${item.images[0].filename}`
//                     console.log(`http://localhost:5000/uploads/images${item.images[0].filename}`);
//                     return (
//                         <div src={ImageURL} alt=""></div>
//                     )
//                 }
//             })}
//         </>
//     )
// }

// export default OrderProduct

import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
    // Get the userId param from the URL.
    let { userId } = useParams();
    console.log(userId);
    // ...
}

function OrderProduct() {
    return (
        <Routes>
            <Route path="users">
                <Route path=":userId" element={<ProfilePage />} />
                {/* <Route path="me" element={...} /> */}
            </Route>
        </Routes>
    );
}

export default OrderProduct