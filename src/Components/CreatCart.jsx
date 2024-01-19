import { addToCart } from "./Action";

export const CreatCart = (item) => {
    return (dispatch) => {
        dispatch(addToCart(item));
    };
};

