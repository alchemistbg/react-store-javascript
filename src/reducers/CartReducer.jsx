export const initialCartState = {
    cart: []
};

export const cartReducer = (state, action) => {
    let itemIndex;
    if (action.item) {
        itemIndex = state.cart.findIndex(item => item.id === action.item.id);
    }

    const clearCart = () => {
        localStorage.removeItem("cartData");
    }

    const updateCart = (data) => {
        localStorage.setItem("cartData", JSON.stringify(data));
    }

    switch (action.type) {
        case 'LOAD_CART_FROM_STORAGE':
            state.cart = JSON.parse(action.item);
            return {
                cart: state.cart
            }

        case 'ADD_TO_CART':
            if (itemIndex > -1) {
                state.cart[itemIndex].productSize = action.productSize;
                state.cart[itemIndex].productQty += action.productQty;
                state.cart[itemIndex].totalPrice = (state.cart[itemIndex].productQty * state.cart[itemIndex].price).toFixed(2);
                updateCart(state.cart);
                return {
                    cart: state.cart
                }
            } else {
                action.item.productSize = action.productSize;
                action.item.productQty = action.productQty;
                action.item.totalPrice = (action.item.productQty * action.item.price).toFixed(2);
                state.cart.push(action.item);
                updateCart(state.cart);
                return {
                    cart: state.cart
                }
            }

        case 'INCREMENT':
            state.cart[itemIndex].productQty += 1
            state.cart[itemIndex].totalPrice = (state.cart[itemIndex].productQty * state.cart[itemIndex].price).toFixed(2);
            updateCart(state.cart);
            return {
                cart: state.cart
            }

        case 'DECREMENT':
            if (state.cart[itemIndex].productQty > 1) {
                state.cart[itemIndex].productQty -= 1;
                state.cart[itemIndex].totalPrice = (state.cart[itemIndex].productQty * state.cart[itemIndex].price).toFixed(2);
            }
            updateCart(state.cart);
            return {
                cart: state.cart
            }

        case 'REMOVE_FROM_CART':
            if (state.cart.length === 1) {
                clearCart();
            } else {
                state.cart = state.cart.filter((item) => item.id !== action.item.id);
                updateCart(state.cart);
            }
            return {
                cart: state.cart.filter((item) => item.id !== action.item.id)
            }

        case 'CHECKOUT':
            clearCart();
            return { cart: [] };

        default:
            return state;
    }
}