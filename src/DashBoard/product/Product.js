import React,{useEffect,useState} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import './product.css';
import axios from 'axios';
import config from '../../config.json'
import { DataGrid } from '@mui/x-data-grid';
import {Button} from '@mui/material';
import { makeStyles } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';

const Product = () => {

    const [apidata, setApidata] = useState([]);
    

const ApiCalling = async() => {
    const getData = await axios.get(config.productDataApi);
    setApidata(getData.data)
    console.log(getData.data)
}

useEffect(()=>{
    ApiCalling();
    console.log('Product is loaded here')
},[]);


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'ProductName',
      headerName: 'Product name',
      width: 150,
      editable: true,
    },
    {
      field: 'ProductPrice',
      headerName: 'Product Price',
      width: 150,
      editable: true,
    },
    {
        field:"EditProduct",
        headerName:'Edit',
        width:140,
        sortable:false,
        renderCell:(params)=>{
            const handleClick=(e)=>{
                e.preventDefault();
                return alert("do you want to Edit")
            };
        return <EditIcon onClick={handleClick} style={{cursor:'pointer'}}/>    
    }
},
  {
    field: "action",
    headerName: "Delete Item",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api  = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button onClick={onClick} variant="outlined" color="error">Delete</Button>;
    }
  },
  ];

  const rows = [
    { id: 1, ProductPrice: 2000, ProductName: 'Weed Tree'},
    { id: 2, ProductPrice: 111, ProductName: 'Lemon plant' },
    { id: 3, ProductPrice: 232, ProductName: 'Rose' },
    { id: 4, ProductPrice: 4555, ProductName: 'OCB roll' },
    { id: 5, ProductPrice: 232, ProductName: 'Cucmber' },
    { id: 6, ProductPrice: 121, ProductName: "Carrot" },
    { id: 7, ProductPrice: 344, ProductName: 'Beetroot' },
    { id: 8, ProductPrice: 555, ProductName: 'Rossini' },
    { id: 9, ProductPrice: 111, ProductName: 'Harvey'},
  ];

  const styles = makeStyles({
      DButton:{
          color:'error',
      }
  })
  const classes = styles();
 
    return (
        <div className="product" style={{ height: 400, width: '70%' }}>   
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      /> 
    </div>
    )
}

export default Product