import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl]  = useState(null);
    
    const onSubmit = data => {
        const eventData ={
            name: data.itemName,
            price: data.Price,
            Url:imageUrl
        };
        console.log(data)
        const url = `http://localhost:7000/addItem`;
        fetch(url,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(response =>console.log("server side responsed"))
    }
    
    const handleImageUpload=event =>{
       
        const  imageData = new FormData();
        imageData.set('key', 'e392be2e05a63b10a5d812b6f491faf4');
        imageData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
           imageData
          )
          .then(function (response) {
             setImageUrl(response.data.data.display_url)
           
             console.log(response)
             
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div className="w-50 m-auto pt-5 ">
            <form  onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control m-2 btn-outline-success" name="itemName" placeholder="Name"  ref={register({ required: true })} />
            <input className="form-control m-2 btn-outline-success" name="Price" placeholder="Price"  ref={register({ required: true })} />
            <input className="form-control m-2 btn-outline-success" name="img" type="file"  onChange={handleImageUpload}  ref={register({ required: true })} />
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            
            <input className="form-control  m-2 btn btn-success" type="submit" value="Add new Product" />
            </form>
        </div>
    );
};

export default AddItems;