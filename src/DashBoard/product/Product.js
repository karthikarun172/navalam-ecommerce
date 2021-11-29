import React,{useEffect} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import './product.css';


const Product = () => {

useEffect(()=>{
    console.log('Product is loaded here')
},[])

    return (
        <div>
            product list 
        </div>
    )
}

export default Product