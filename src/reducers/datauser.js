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

export default function dataUsers(state = stateDefault, action) {
    var index = -1;
    switch (action.type) {
        case 'USERSOKK':
            console.log("actionUsers.re", action.data);
            return action.data;
        case 'USERSERROR':
            console.log("action Users error", action.data);
            return [...state];
        case 'DELETE_USER':
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state]
        case 'EDIT_STATUS_ORDER_USER':
            index = findIndex(state, action.id);
            state.splice(index, 1, action.data);
            return [...state]
        default:
            return [...state];
    }
}