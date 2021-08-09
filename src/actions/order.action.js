import axios from "axios"
import axiosInstance from "../helpers/axios";


export const updateOrder = (payload) =>{
    return async dispatch => {
        try{
            const res = await axiosInstance.post('/order/update', payload);
            console.log(res);
            if(res.status === 201){

            }else{

            }
        }catch(error){
            console.log(error)
        }
    }
}