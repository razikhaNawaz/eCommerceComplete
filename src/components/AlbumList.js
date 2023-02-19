// import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
import "./AlbumList.css";

const AlbumList = (props) => {
  const cartCtx = useContext(CartContext);
  // const authCtx = useContext(AuthContext);
  const addToCart = (e) => {
    e.preventDefault();
    const obj = {
      
      id: props.id,
      title: props.title,
      imageUrl: props.image,
      quantity: props.quantity,
      price: props.price,
    };
    localStorage.setItem(props.id, JSON.stringify(obj));
    cartCtx.addItem({
      key: props.id,
      id: props.id,
      title: props.title,
      imageUrl: props.image,
      quantity: props.quantity,
      price: props.price,
    });

  };

  let url = `/store/${props.id}`;

  return (
    <div className="products">
      <div>
        <h2>{props.title}</h2>;
        <Link to={url}>
          <img src={props.image} alt={props.title} />
        </Link>
        <div className="cartlist">
          <h3>${props.price}</h3>
          <button onClick={addToCart} className="button">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
