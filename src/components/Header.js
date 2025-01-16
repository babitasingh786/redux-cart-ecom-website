import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaceIcon from '@mui/icons-material/Place';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleOpenCart = (open) => {
        dispatch(toggleCart(open))
    }
    //    const cartQuantity = cartItems.quantity;
    const cartQuantity = cartItems.length;
    const isLoggedIn = localStorage.getItem("token");
    const [isOpendropdown, setIsOpenDropdown] = useState(false)



    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4>Redux Shopping Cart</h4>
                        <div className="nav_menu">
                            <ul>
                                <li>
                                    <div
                                        title="Cart"
                                        className="cart_icon"
                                        onClick={() => handleOpenCart(true)}
                                    >
                                        <img src="/images/bag-icon.svg" alt="bag-icon" />
                                        <span className="badge">{cartQuantity}</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        {isLoggedIn ? (<button className='account-btn' onClick={()=>setIsOpenDropdown(!isOpendropdown)}><AccountCircleIcon /><span style={{ 'paddingLeft': "5px", "paadingTop": "6px" }}>Account</span></button>)
                                            : (<Link to="/login" ><AccountCircleIcon /><span style={{ 'paddingLeft': "5px", "paadingTop": "6px" }}>Login</span></Link>
                                            )
                                        }
                                        {isOpendropdown && 
                                         <ul className='dropDownMenu'>
                                         <li> <button> <Person2Icon  className='drop-icon'/>My Account</button></li>
                                         <li><button><PlaceIcon className='drop-icon' />Order Tracking</button> </li>
                                         <li><button> <FavoriteBorderIcon  className='drop-icon' />My Wishlist</button></li>
                                         <li><button><SettingsIcon className='drop-icon' />Setting</button></li>
                                         <li><button> <ExitToAppIcon className='drop-icon' />Sign Out</button></li>
                                     </ul>}
                                       

                                    </div>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;