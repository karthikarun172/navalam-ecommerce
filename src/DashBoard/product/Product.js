import './product.css';
import React,{useEffect,useState} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import config from '../../config.json';

import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from "@mui/styles";
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import { title } from 'process';
import AddProduct from './AddProduct';


const styles =  makeStyles((theme)=>({
  heading:{
    // textAlign:'center',
    position:'absolute',
    left:'40%',
    top:'10%',
    flex:'1'
  },
      mainTable:{
        border:"5px green solid",
        width:"70%",
        position:'absolute',
        height:'50%',
        top:'30%',
        marginLeft:'20%'
      },
         tableHeads:{
           backgroundColor:'orange'
         },
      form:{
        backgroundColor:'green',
        position:'absolute',
        left:'40%',
        top:'10%',
      }
}));



const Product = () => {

const [apidata, setApidata] = useState([]);
    

const ApiCalling = async() => {
    const getData = await axios.get(config.fakeProductApi);
    setApidata(getData.data)
    console.log(getData.data)
}

useEffect(()=>{
    ApiCalling();
    console.log('Product is loaded here');
    DeleteProduct();
},[]);

const DeleteProduct = async(id) => {

  try{
    console.log("delete starts")
    // const deleteId = apidata.filter(f => f.id !== id.id );
    // await axios.delete(`${config.fakeProductApi}/${id.id}`);
    // setApidata(deleteId);
    // console.log('Delete ID -->',apidata)
  }
  catch(ex){
    alert('Cannot be deleted please try again');
  } 
}

const AddProductData = async()=>{
    await fetch(config.fakeProductApi, {
      method : "POST",
      body: JSON.stringify({
        title:title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((res)=>{
      if (res.status !== 201){
        return
      }else{
        res.json();
      }
    })
    .then((data)=>{
      setApidata((apidata)=>[...apidata,data])
    }).catch((err)=>{
      console.log("Posting Error")
    })
 }


const classes = styles();
    return (
        <React.Fragment>
    <h1 className={classes.heading}>PRODUCT LIST</h1>  
   
    <TableContainer className={classes.mainTable}>
       <Table  aria-label="simple table">
           <TableHead>
             <TableRow className={classes.tableHeads}>
               <TableCell>ID</TableCell>
               <TableCell>TITLE</TableCell>
               <TableCell>PRICE</TableCell>
               <TableCell>EDIT</TableCell>
               <TableCell>DELETE</TableCell>
             </TableRow>
           </TableHead> 

        <TableBody>
          {
            apidata.map((d,i)=>{
              return(
                <TableRow key={i}>
                    <TableCell>{d.id}</TableCell>
                    <TableCell>{d.title}</TableCell>
                    <TableCell>{d.price}</TableCell>
                  <TableCell><Button color="primary" variant="contained">Edit</Button></TableCell>
                  <TableCell> <Button color='error' variant="contained" onClick={()=>DeleteProduct}>Delete</Button></TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
       </Table>  
    </TableContainer>    
    <AddProduct 
      AddProductData={AddProductData}
    />
        </React.Fragment>
    )
}

export default Product
