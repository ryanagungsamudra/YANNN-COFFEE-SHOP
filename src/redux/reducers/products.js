const initialState = { loading: false, data: [], response: {}, error: null}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'GET_ALL_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                response: {
                    message: action.payload.message,
                    status: action.payload.status ?? 200,
                },
                data: action.payload.data,
            }
        case 'GET_ALL_PRODUCT_FAIL':
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state
    }
}