
const initialState = {
    cart: [],
};

const Reducer = () =>
    (state = initialState, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            default:
                return state;
        }

    };

export default Reducer