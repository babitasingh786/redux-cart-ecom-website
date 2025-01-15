import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = () => {
    const { cartItems } = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const handleOpenCart = (open) =>{
        dispatch(toggleCart(open))
    }
//    const cartQuantity = cartItems.quantity;
const cartQuantity = cartItems.length;



    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4>Redux Shopping Cart</h4>
                        <div className="nav_menu">
                            <div                        
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                                <img src="/images/bag-icon.svg" alt="bag-icon" />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                            <div>
                                <Link to="/login" ><AccountCircleIcon /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;