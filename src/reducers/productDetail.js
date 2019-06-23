export default function productDetail(state = {}, action) {
    switch (action.type) {
        case 'PRODUCTDETAIL':
            return {name: action.name, img: action.img, price: action.price};
        default:
            return state;
    }
}