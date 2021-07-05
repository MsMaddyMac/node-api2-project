import axios from 'axios';

export const GET_POSTS_LOADING = 'GET_POSTS_LOADING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const postsLoading = () => ({ type: GET_POSTS_LOADING });
export const postsLoadingSuccess = data => ({ type: GET_POSTS_SUCCESS, payload: data });
export const postsLoadingFailure = error => ({ type: GET_POSTS_FAILURE, payload: error });

export function getPosts() {
    return function(dispatch) {
        dispatch(postsLoading());
        return axios
        .get(`http://localhost:4004/api/posts`)
        .then(res => {console.log('Posts', res.data)
            dispatch(postsLoadingSuccess(res.data))})
        .catch(err => dispatch(postsLoadingFailure(), err)
        );
    };
}