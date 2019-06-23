
export default function filterPrice(state = {min: 0, max: 2000000}, action) {
    switch (action.type) {
        case 'FILTERPRICE':
            return {
                min: action.min,
                max: action.max
            };
        default:
            return state;
    }
}