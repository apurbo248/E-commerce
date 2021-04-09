import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ManageProduct = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('https://calm-sierra-74772.herokuapp.com/items')
        .then(res => res.json())
        .then(data=>setItems(data));
       
    },[items]);

    const deleteProduct=(id)=>{
      fetch(`https://calm-sierra-74772.herokuapp.com/items/${id}`,{
        method: 'DELETE'
      })
      .then(res=> res.text())
      .then(data=>{
        if(data){
          const remainItem = items.filter(item=> item._id !==id);
          setItems(remainItem);
          console.log(items)
        }
      })
    }
   
    return (
        <div>
           <h3 className="text-center">All Product</h3>
           <hr/>
                    <table class="table table-hover m-auto w-50  ">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                   
                    <tbody>
                    {
                items.map(item =>
                      <tr>   
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td> <button onClick={()=> deleteProduct(item._id)}><FontAwesomeIcon icon={faTrashAlt} style={{color: 'red'}} /></button> </td>
                      </tr>
                    )}
                    </tbody>
                  </table>           
        </div>
    );
};

export default ManageProduct;