import './product.css';
import React,{useEffect,useState} from 'react'
import { Route, Switch, Redirect,useHistory } from "react-router-dom";
import axios from 'axios';
import {Toastify} from 'react-toastify';
import config from '../../config.json';
import https from '../../Services/httpService'

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
import EditProduct from './EditProduct';


const styles =  makeStyles((theme)=>({
  heading:{
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
const [dumyApi,DumyApi] = useState([]);
    

const ApiCalling = async() => {
    const getData = await https.get(config.fakeUsersApi);
    setApidata(getData.data)
}


useEffect(()=>{
    ApiCalling();
    console.log('Product is loaded here');
    // DeleteProduct();
},[]);



const DeleteProduct = async post =>{
  // const filteringmap = [...apidata]
  // const removingApi = filteringmap.filter(p => p.id !== post);
  console.log('delete',post);

  await https.delete(config.fakeUsersApi + '/' + post.id);
  const filterMosh = apidata.filter(f => f.id !== post.id)
  setApidata(filterMosh); 
}



const EditProduct=()=>{
   history.push("/editproduct")
}

const classes = styles();
const history = useHistory();

    return (
        <React.Fragment>
    <h1 className={classes.heading}>PRODUCT LIST</h1>  
    <TableContainer className={classes.mainTable}>
       <Table  aria-label="simple table">
           <TableHead>
             <TableRow className={classes.tableHeads}>
               <TableCell>ID</TableCell>
               <TableCell>USERNAME</TableCell>
               <TableCell>NAME</TableCell>
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
                    <TableCell>{d.username}</TableCell>
                    <TableCell>{d.name}</TableCell>
                  <TableCell><Button color="primary" variant="contained" onClick={EditProduct}>Edit</Button></TableCell>
                  <TableCell> <Button color='error' variant="contained" onClick={()=>DeleteProduct(d)}>Delete</Button></TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
       </Table>  
    </TableContainer>    
        </React.Fragment>
    )
}

export default Product