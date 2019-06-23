
export default function search(state = "C", action) {
    switch (action.type) {
        case 'SEARCH':
            const search = action.name;
            console.log(action.name)
            return search
        default:
            return state;
    }
}