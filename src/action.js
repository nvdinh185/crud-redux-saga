import * as types from '../src/constant'

export const getUserRequest = () => {
    return{
        type:types.GET_USER_REQUEST
    }
}
export const getUserSuccess = (payload) => {
    return{
        type:types.GET_USER_SUCCESS,
        payload
    }
}
export const getUserFailure = (payload) => {
    return{
        type:types.GET_USER_FAILURE,
        payload
    }
}





export const addUserRequest = (payload) => {
    return{
        type:types.ADD_USER_REQUEST,
        payload
    }
}

export const addUserSuccess = (payload) => {
    return{
        type:types.ADD_USER_SUCCESS,
        payload
    }
}

export const addUserFailure = (payload) => {
    return{
        type:types.ADD_USER_FAILURE,
        payload
    }
}





export const deleteUserRequest = (payload) => {
    return{
        type:types.DELETE_USER_REQUEST,
        payload
    }
}
export const deleteUserSuccess = (payload) => {
    return{
        type:types.DELETE_USER_SUCCESS,
        payload
    }
}
export const deleteUserFailure = (payload) => {
    return{
        type:types.DELETE_USER_FAILURE,
        payload
    }
}





export const updateUserRequest = (payload) => {
    return{
        type:types.UPDATE_USER_REQUEST,
        payload
    }
}
export const updateUserSuccess = (payload) => {
    return{
        type:types.UPDATE_USER_SUCCESS,
        payload
    }
}
export const updateUserFailure = (payload) => {
    return{
        type:types.UPDATE_USER_FAILURE,
        payload
    }
}


export const searchUserRequest = (payload) => {
    return {
        type:types.SEARCH_USER_REQUEST,
        payload
    }
}
export const searchUserSuccess = (payload) => {
    return {
        type:types.SEARCH_USER_SUCCESS,
        payload
    }
}
export const searchUserFailure = (payload) => {
    return {
        type:types.SEARCH_USER_FAILURE,
        payload
    }
}