export default function sort(state = "name", action) {
    switch (action.type) {
        case 'SORT':
            console.log("sort: " , action.data);
            return action.data;
        default:
            return state;
    }
}