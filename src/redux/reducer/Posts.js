const initialState = {
    posts:[],

};
let posts = (state = initialState, action) => {
    switch (action.type) {
        case 'VIEW_POST':
            return {
                ...state,
                posts: action.payload
            }
    }



    return state
};


export default posts;
