export const initialSortState = {
    sort: {}
};

export const sortReducer = (state, action) => {
    const loadSortData = (data) => {
        localStorage.setItem('sortData', JSON.stringify(data));
    }

    switch (action.type) {
        case 'LOAD_SORT_FROM_STORAGE':
            state.sort = JSON.parse(action.data);
            return {
                sort: state.sort
            }

        case 'SORT':
            state.sort.criteria = action.criteria;
            state.sort.direction = action.direction;
            loadSortData(state.sort);
            return {
                sort: state.sort
            }

        default:
            return state;
    }

}