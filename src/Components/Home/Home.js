import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Product from '../Product/Product';

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('https://calm-sierra-74772.herokuapp.com/items')
        .then(res => res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className="d-flex flex-wrap justify-content-center pt-5">
           {
            items.length === 0 && <div>
                <div className="spinner-border" role="status">

                </div>
            </div>
           }
           
            {
                items.map(item =>
                <Product item={item}></Product>)
            }
            
        </div>
    );
};

export default Home;