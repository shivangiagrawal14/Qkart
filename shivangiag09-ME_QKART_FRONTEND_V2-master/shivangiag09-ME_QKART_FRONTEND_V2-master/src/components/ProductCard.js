import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
   
    <Card className="card" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          
          <Typography gutterBottom variant="h6" component="div">
          {product.name}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="text">
            ${product.cost}
          </Typography>
            <Rating name="read-only" value={product.rating} readOnly/>
        </CardContent>
        <Button onClick={()=>{
           return handleAddToCart()}} variant="contained" style={{margin: '0 auto',width:"100%", display: "flex"}} startIcon={<AddShoppingCartOutlined />}>
        ADD TO CART
        </Button>
    </Card>
  );
}
;

export default ProductCard;
