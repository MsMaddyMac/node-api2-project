import { 
    GET_POSTS_LOADING, 
    GET_POSTS_SUCCESS, 
    GET_POSTS_FAILURE 
} from '../actions';

const initialState = {
    posts: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isFetching: false,
                error: null
            };  
        case GET_POSTS_FAILURE:
            return {
                ...state,
                posts: [],
                isFetching: false,
                error: action.payload
            };  
        
        default:
            return state;
    }
}

export default reducer;