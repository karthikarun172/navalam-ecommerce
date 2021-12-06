import React from 'react'
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import './category.css';


const Category = () => {
    return (
        <div className="featuredItem">
          <span className="featuredTitle">ADD USER</span>
          <div className="featuredMoneyContainer">
              <span className="featuredIcon"><AddIcon fontSize='large'/></span> 
          </div>
        </div>
    )
}

export default Category
