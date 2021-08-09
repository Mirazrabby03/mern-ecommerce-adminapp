import React, { useState } from 'react'
import Card from '../../components/UI/Card'
import Layout from '../../components/Layout/Layout';

import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateOrder } from '../../actions';
//import { updateOrder } from '../../actions/order.action';

const  Orders = (props) => {
    const order = useSelector((state) => state.order)
    const [type, setType] = useState('');
    const dispatch = useDispatch();
    const onOrderUpdate = (orderId) =>{
      const payload ={
           orderId,
            type
      };
      dispatch(updateOrder(payload));
    }
  
  
    return(
    <Layout sidebar>
        {
            order.orders.map((orderItem,index) => (
                <Card key={index} headerLeft={orderItem._id}>
                <div 
                style={{
                boxSizing: "border-box",  
                padding: "100px",
                display:"flex",
                alignItems: "center"
                }}> 
                <div className="orderTrack">
                    <div className="orderStatus">
                        <div className="point"></div>
                        <div className="orderInfo">
                        <div className="status">Pending</div>
                        <div className="date">Fri,2021</div>
                    </div>
                    </div>
                    <div className="orderStatus">
                    <div className="orderInfo">
                        <div className="status">Processing</div>
                        <div className="date">Fri,2021</div>
                    </div>    
                    </div>
                    <div className="orderStatus">
                    <div className="orderInfo">
                        <div className="status">Shipped</div>
                        <div className="date">Fri,2021</div>
                    </div>    
                    </div>
                    <div className="orderStatus">
                    <div className="orderInfo">
                        <div className="status">Delivered</div>
                        <div className="date">Fri,2021</div>
                    </div>    
                    </div>
                </div>

                 {/* select input to apply order action */}
                <div style={{
                    padding: "0px 50px",
                    boxSizing: "border-box"
                }}>
                    <select onChange={(e) => setType(e.target.value)}>
                        <option value={""}>select status</option>
                        {orderItem.orderStatus.map((status)=>{
                            return <>
                            {
                                !status.isCompleted ? (
                                    <option  key={status.type} value={status.type} >{status.type}</option>
                                ) : null
                            }
                            
                            </>
                        })}
                    </select>
                </div>
                {/* button to confirm */}
                <div>
                    <button onClick={()=> onOrderUpdate(orderItem._id)}>
                        confirm
                    </button>
                </div>
                </div>
    
            </Card>
            )
            )
        }
        
    </Layout>
   )

 }

export default Orders;