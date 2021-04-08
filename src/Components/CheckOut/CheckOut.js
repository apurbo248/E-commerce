import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import moment from "moment";
import { useParams,Link, useHistory } from 'react-router';
import { userContext } from '../../App';

const CheckOut = () => {
    const {_id} = useParams();
    const history = useHistory();
    const [choosedProduct, setChooseProduct] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(userContext);

    useEffect(()=>{
        fetch(`http://localhost:7000/getSingleItem/${_id}`)
        .then(res=>res.json())
        .then(data=>{
            setChooseProduct(data[0]);
            
        })
        .catch(err=>
            {
                console.log(err);
            })
    },[_id])

    const submitOrder=()=>{
  
      const orderedProduct = {
      name : choosedProduct.name,
      email:loggedInUser.email,
      Qty:1,
      Price:choosedProduct.price,
      date:new Date().toLocaleString() + ''
      }
      fetch(`http://localhost:7000/SubmitOrder`,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(orderedProduct)
    })
    .then(response =>response.json())
    .then(data=>{
      console.log(data)
      if(data===true)
      {
        history.push("/order")
      }
    })
    }
    return (
       
         <div>
           <div className="text-center">
             <h2>Checkout</h2>
             <hr/>
             <div className="mt-5 mb-5">
             <table class="table table-hover m-auto w-50  ">
                    <thead>
                      <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                   
                    <tbody>
                      <tr>   
                        <td>{choosedProduct.name}</td>
                        <td>1</td>
                        <td>${choosedProduct.price}</td>
                
                      </tr>
                    </tbody>
                  </table>    
             </div>
             
           
            <Button variant="primary"  onClick={submitOrder}>Checkout</Button> 
            
             </div>
         </div>
          

       
    );
};

export default CheckOut;