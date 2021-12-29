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


const styles =  makeStyles((theme)=>({
  heading:{
    // textAlign:'center',
    position:'absolute',
    left:'40%',
    top:'13%',
    flex:'1'
  },
      mainTable:{
        border:"5px green solid",
        width:"80%",
        marginLeft:'15%'
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
    DeleteProduct();
    console.log('Product is loaded here')
},[]);

const DeleteProduct = async(post)=> {

  // await axios.delete(config.fakeProductApi + '/' + post.id);
  // const deleteId = apidata.filter(p => p.id !== post.id);
  // setApidata(deleteId);
  console.log('Delete ID -->',apidata)
}


const classes = styles();
    return (
        <React.Fragment>
    <h1 className={classes.heading}>PRODUCT LIST</h1>    
    <TableContainer className={classes.mainTable}>
       <Table  aria-label="simple table">
           <TableHead>
             <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                  <TableCell> <Button color='error' variant="contained" onClick={DeleteProduct}>Delete</Button></TableCell>
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
