import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import moment from "moment";

const Order = () => {
   
    const[checkOrder,setCheckOrder] = useState([]);
    useEffect(()=>{
    fetch(`http://localhost:7000/getOrder`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setCheckOrder(data);
    })
    },[])
    
    return (
       
        <div>
           <h3 className="text-center">Order Summary</h3>
               <hr/>
                             <table class="table table-hover m-auto w-50  ">
                                <thead>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                </tr>
                                </thead>
                            
                                {
                    checkOrder.map(item=>{
                        return <tbody>
                                <tr>   
                                    <td>{item.name}</td>
                                    <td>{item.Qty}</td>
                                    <td>${item.Price}</td>
                                    <td>{item.email}</td>
                                    <td>{item.date}</td>
                                </tr>
                
                                </tbody>
                                 })
                                }
                            </table> 
                        </div>
       
       
    );
                         
};

export default Order;