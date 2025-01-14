import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart  ,incrementItem,decrementItem ,removeItem} from '../store/slices/cartSlice';
// import { toggleCart, removeItem, incrementItem, decrementItem } from '../store/slices/cartSlice';


const Cart = () => {

    const { isCartOpen, cartItems } = useSelector((state) => state.cart);


    const dispatch = useDispatch();


    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };


    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };


    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };


    // disable the body-scroll when the Cart is open
    useEffect(() => {
        const docbody = document.body;
        isCartOpen ? (
            docbody.classList.add('overflow_hide')
        ) : (
            docbody.classList.remove('overflow_hide')
        )
    }, [isCartOpen]);


    // closing the Cart on clicking outside of it
    useEffect(() => {
        const outsideClose = (e) => {
            if (e.target.id === 'cart') {
                handleCloseCart(false)
            }
        }
        window.addEventListener('click', outsideClose);
        return () => {
            window.removeEventListener('click', outsideClose)
        }
    }, [handleCloseCart])


    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


    return (
    
        <>
            {isCartOpen && (
                <div id="cart">
                    <div className='cart_content'>
                        <div className='cart_head'>
                            <h2>Cart <small>{cartQuantity}</small></h2>
                            <div className='close_btn' title='close' onClick={() => handleCloseCart(false)}>
                                <span>&times;</span>
                            </div>
                        </div>
                        <div className='cart_body'>
                            {cartQuantity === 0 ? (
                                <p>Cart is Empty</p>
                            ) : (
                                cartItems.map((item) => {
                                    const { id, image, title, price, quantity } = item
                                    const itemTotal = price * quantity;
                                    return (
                                        <div className='cart_items' key={id}>
                                            <figure className='cart_item_img'>
                                                <img src={image} alt="product_img" />
                                            </figure>
                                            <div className='cart_items_info'>
                                                <h4>{title}</h4>
                                                <h3>{itemTotal.toLocaleString()}</h3>
                                            </div>
                                            <div className="cart_items_quantity">
                                                <span onClick={() => handleDecrement(id)}>&#8722;</span>
                                                <b>{quantity}</b>
                                                <span onClick={() => handleIncrement(id)}>&#43;</span>
                                            </div>
                                            <div title='Remove Items' className='cart_items_delete' onClick={()=>handleRemove(id)} >
                                               &times;
                                            </div>

                                        </div>
                                    )
                                })
                            )}
                        </div>
                        <div className='cart_foot'>
                            <h3>
                                Total Amount  :
                                <b>{cartTotal.toLocaleString()}</b>
                            </h3>
                            <button type='button' className='checkout_btn' disabled={cartQuantity ===0 }>Checkout</button>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default Cart;