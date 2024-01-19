import React from 'react';
import { connect } from 'react-redux';
import { CreatCart } from './CreatCart';

const AddCart = ({ CreatCart, cart }) => {
    const handleAddToCart = (item) => {
        CreatCart(item);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <button onClick={() => handleAddToCart({ id: 1, name: 'Product 1' })}>
                Add to Cart
            </button>
            <div>
                <h2>Cart Items</h2>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const mapState = (state) => ({
    cart: state.cart,
});

const mapDispatch = {
    CreatCart,
};

export default connect(mapState, mapDispatch)(AddCart);
