const initialState = {
    post:[],

};
const post = (state = initialState, action) => {

    switch (action.type) {
        case 'VIEW_POST_ID':
            return {
                ...state,
                post: action.payload
            }
    }



    return state
};


export default post;
