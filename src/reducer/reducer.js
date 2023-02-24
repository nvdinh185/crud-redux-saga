import * as types from '../constant'

const default_state = {
    listUser: [],
    isFetching: false,
    error: 'can not found data',
}
const myReducer = (state = default_state, action) => {
    switch (action.type) {

        case types.GET_USER_REQUEST:
            return { ...state, isFetching: true }
        case types.GET_USER_SUCCESS:
            return { ...state, isFetching: false, listUser: action.payload }
        case types.GET_USER_FAILURE:
            return { ...state, isFetching: true }


        case types.ADD_USER_REQUEST:
            return { ...state, isFetching: true }
        case types.ADD_USER_SUCCESS:
            return { ...state, isFetching: false, listUser: action.payload }
        case types.ADD_USER_FAILURE:
            return { ...state, isFetching: true, error: action.payload }


        case types.DELETE_USER_REQUEST:
            return { ...state, isFetching: true }
        case types.DELETE_USER_SUCCESS:
            return { ...state, isFetching: false, }
        case types.DELETE_USER_FAILURE:
            return { ...state, isFetching: true, }


        case types.UPDATE_USER_REQUEST:
            return { ...state, isFetching: true }
        case types.UPDATE_USER_SUCCESS:
            return { ...state, isFetching: false, }
        case types.UPDATE_USER_FAILURE:
            return { ...state, isFetching: true, error: action.payload }


        case types.SEARCH_USER_REQUEST:
            return { ...state, isFetching: true }
        case types.SEARCH_USER_SUCCESS:

            return { ...state, isFetching: false, listUser: action.payload.listUser }

        case types.SEARCH_USER_FAILURE:
            return { ...state, isFetching: true, error: action.payload }


        default:
            return state
    }
}
export default myReducer