export default function paginationProduct(state = {currentPage: 1, todosPerPage: 6}, action) {
    switch (action.type) {
        case 'CURRENT_PAGE':
            state.currentPage = action.number;
            return {...state};
        case 'TODOSPER_PAGE':
            state.todosPerPage = action.number;
            return {...state};
        default:
            return {...state};
    }
}