export default function switchLogin(state = true, action) {
    switch (action.type) {
        case 'SWITCHLOGIN':
            // console.log("action.CHECKLOGIN", action.check);
            return action.name;
        default:
            return state;
    }
}