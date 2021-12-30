import React from 'react';
import { Redirect,useHistory } from 'react-router-dom'

const EditProduct = () => {

    const history = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault();
        // AddProductData(e.target.title.value,e.target.price.value,e.target.id.value);
        // e.target.id.value = "";
        // e.target.title.value = "";
        // e.target.price.value = "";
       history.push("/product");
     }

    return (
        <div style={{
            position:'absolute',
            top:'82%',
            left:'30%'
        }}>
            <form onSubmit={handleSubmit}>
            <p>add user</p>
            
                 <input placeholder='Enter ID' name="title"/>   
                 <input placeholder='Enter Title' name="title"/>   
                 <input placeholder='Enter Price' name='price'/>
                 <button onSubmit={handleSubmit}>Add user</button> 
                 <hr/>  
            </form>
        </div>
    )
}

export default EditProduct;
