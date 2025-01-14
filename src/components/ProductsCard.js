import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';


const ProductsCard = (props) => {

    // const { img, rating, title, price } = props;

    // const [isAdded, setIsAdded] = useState(false);


    // const dispatch = useDispatch();
    // const {id,image,rating,title,price} = props;
    const [isAdded , setIsAdded] = useState(false);
    const dispatch= useDispatch();


    const handleAddToCart = () => {

        // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
        // const item = { ...props };
        // dispatch(addItem(item));
        const item = {...props};
      
        dispatch(addItem(item));

        setIsAdded(true);

        // setTimeout(() => {
        //     setIsAdded(false);
        // }, 3000);
    };


    return (
        <>
            <div className="product_card">
                <figure>
                    <img src={props.image} alt="item-img" />
                </figure>
                {/* <strong className="rating">{props.rating}</strong> */}
                <h4 className="title">{props.title}</h4>
                <h3 className="price">₹ {props.price}</h3>
                <button
                    type="button"
                    className={`btn ${isAdded ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                   {isAdded ? 'Added' : 'Add To Cart'}
                </button>
            </div>
        </>
    );
};

export default ProductsCard;