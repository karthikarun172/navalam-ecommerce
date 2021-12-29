import React from 'react'

const AddProduct = ({ AddProductData }) => {

    const handleSubmit =(e)=>{
        e.preventDefault();
        AddProductData(e.target.title.value,e.target.price.value);
        e.target.title.value = "";
        e.target.price.value = "";
     }

    return (
        <div style={{
            position:'absolute',
            top:'82%',
            left:'30%'
        }}>
            <form onSubmit={handleSubmit}>
            <p>add user</p>
                 <input placeholder='Enter Title' name="title"/>   
                 <input placeholder='Enter Price' name='price'/>
                 <button onSubmit={handleSubmit}>Add user</button> 
                 <hr/>  
            </form>
        </div>
    )
}

export default AddProduct
