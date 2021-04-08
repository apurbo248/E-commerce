import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import {Card, Button} from 'react-bootstrap'
const Product = ({item}) => {

    const  {_id,name,Url,price} = item;
   
    return (
        
            <Card className="m-3 p-2 shadow " style={{ width:'16rem' }}>
            <Card.Img style={{ height:'15rem' }} variant="top" src={Url} />
            <Card.Body className="pb-0">
                <Card.Title>{name}</Card.Title>
               <hr/>
                </Card.Body>
                <Card.Body className="d-flex pt-0 ">
                 <h3 className="mr-auto text-2" style={{fontSize:'20px'}}>${price}</h3>
                 <Link to={`/Checkout/${_id}`}> <Button className="ml-auto" variant="success" >Add product</Button></Link> 
                
            </Card.Body>
            </Card>
       
    );
};

export default Product;