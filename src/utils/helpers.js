import toastr from 'toastr';

const toastOptions = {
    closeButton: true,
    newestOnTop: false,
    timeOut: 1000,
    progressBar: true
}

function showToast(toastType, toastData) {
    toastr.remove();

    if (toastType === 'success') {
        toastr[toastType](toastData.message, toastData.title, toastOptions);
        return;
    }

    if (toastType === 'simpleError') {
        toastr['error'](toastData.message, toastData.title, toastOptions);
        return;
    }

    Object.keys(toastData).forEach((key) => {
        if (toastData[key].length > 0) {
            toastr[toastType](toastData[key].join('\n'), `Invalid ${key}`, toastOptions);
        }
    });
}

function calcCartTotalSum(cart) {
    let cartTotalPrice = 0;
    cart.map((cartItem) => cartTotalPrice += +cartItem.totalPrice);
    return cartTotalPrice;
}

export {
    showToast,
    calcCartTotalSum
}