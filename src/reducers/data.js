const stateDefault = [
];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (parseInt(product.id) === parseInt(id)) {
            result = index;
        }
    });
    return result;
}

export default function data(state = stateDefault, action) {
    var index = -1;
    switch (action.type) {
        case 'OKK':
            // console.log("action.re", action.data);
            return action.data;
        case 'DELETE_PRODUCT':
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state]
        case 'ADD_PRODUCT':
            state.push(action.data);
            return [...state]
        case 'EDIT_PRODUCT':
            index = findIndex(state, action.id);
            state[index] = action.data;
            // state.splice(index, 1, action.data);
            return [...state]
        case 'ERROR':
            console.log("action error", action.data);
            return [...state];
        default:
            return [...state];
    }
}