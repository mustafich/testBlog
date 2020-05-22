const initialState = {
    message:[],

};
const message = (state = initialState, action) => {

    switch (action.type) {
        case 'VIEW_MESSAGE':
            return {
                ...state,
                message: action.payload
            }
    }



    return state
};


export default message;
