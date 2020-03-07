export const initialCartState = {
    cart: []
};

export const cartReducer = (state, action) => {
    let itemIndex;
    if (action.item) {
        if (action.type === 'ADD_TO_CART') {
            itemIndex = state.cart.findIndex((cartItem) => {
                return (cartItem.id === action.item.id && cartItem.productSize === action.productSize);
            });
        } else {
            itemIndex = state.cart.findIndex((cartItem) => {
                return (cartItem.id === action.item.id && cartItem.productSize === action.item.productSize);
            });
        }
    }

    const clearCart = () => {
        localStorage.removeItem("cartData");
    }

    const updateCart = (data) => {
        localStorage.setItem("cartData", JSON.stringify(data));
    }

    switch (action.type) {
        case 'LOAD_CART_FROM_STORAGE':
            state.cart = (action.item);
            return {
                cart: state.cart
            }

        case 'ADD_TO_CART':
            if (itemIndex > -1) {
                state.cart[itemIndex].productQty += action.productQty;
                state.cart[itemIndex].totalPrice = (state.cart[itemIndex].productQty * state.cart[itemIndex].price).toFixed(2);
                updateCart(state.cart);
                return {
                    cart: state.cart
                }
            }
            const product = { ...action.item };
            product.productSize = action.productSize;
            product.productQty = action.productQty;
            product.totalPrice = (product.productQty * product.price).toFixed(2);
            state.cart.push(product);
            updateCart(state.cart);
            return {
                cart: state.cart
            }

        case 'INCREMENT':
            state.cart[itemIndex].productQty += 1;
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
            state.cart = state.cart.filter((item, index) => {
                if (index !== itemIndex) {
                    return item;
                }
                return false;
            })
            if (state.cart.length > 0) {
                updateCart(state.cart);
            } else {
                clearCart();
            }
            return {
                cart: state.cart
            }

        case 'CHECKOUT':
            clearCart();
            return { cart: [] };

        default:
            return state;
    }
}