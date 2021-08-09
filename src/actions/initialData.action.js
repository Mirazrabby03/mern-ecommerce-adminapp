import axiosInstance from "../helpers/axios";

import { categoryConstants,  orderConstants,  productConstants } from "./constants";

export const getInitialData = () =>{
    return async dispatch => {
    
        const res = await axiosInstance.post('/initialData');
        if(res.status == 200){
            const {categories, products, orders} = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: {categories}
                
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: {products}

            });
            dispatch({
                type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
                payload: { orders}
            })
        }
        console.log(res);
    }
}