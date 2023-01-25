import axios from 'axios';
const url = process.env.REACT_APP_HOST + 'api/products';

export const searchList = (filter) => {
    const urlSearch = url + '/search' + filter;
    return axios.get(urlSearch);
};

export const addProduct = (body, token) => {
    return axios.post(url, body, {
        headers: {
            'x-access-token': token,
        },
    });
};

export const updateProduct = (body, token) => {
    return axios.patch(url, body, {
        headers: {
            'x-access-token': token,
        },
    });
};

export const getDetailProduct = (id) => {
    const urlDetail = `${url}/${id}`
    return axios.get(urlDetail);
}

export const deleteProducts = (id, token) => {
    return axios.delete(url, {
        headers: {
            'x-access-token': token,
        },
        data: {
            id,
        },
    });
};
