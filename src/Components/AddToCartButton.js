import React from 'react';
import { useDispatchCart } from './CartProvider';

const AddToCartButton = () => {
    const dispatch = useDispatchCart();

    const addToCart = () => {
        dispatch({
            type: 'ADD',
            id: 1,
            name: 'Chilli Paneer',
            qty: 1,
            size: 'full', // or 'half'
            options: {
                half: '120',
                full: '200'
            },
            img: 'https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs='
        });
    };

    return <button onClick={addToCart}>Add Chilli Paneer to Cart</button>;
};

export default AddToCartButton;
