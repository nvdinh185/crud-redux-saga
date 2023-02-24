import * as callAPI from '../fetchAPI/fetchAPI'
import * as Actions from '../action'
import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../constant'

function* handleGetUser() {
    try {

        const res = yield callAPI.getUser()

        yield put(Actions.getUserSuccess(res))

    } catch (error) {
        yield put(Actions.getUserFailure(error))

    }
}


function* handleAddUser(action) {
    try {
        yield callAPI.addUser(action.payload)
        yield put(Actions.addUserSuccess())
        yield put(Actions.getUserRequest())

    } catch (error) {
        yield put(Actions.addUserFailure(error))
    }

}

function* handleDeleteUser(action) {
    try {
        yield callAPI.deleteUser(action.payload)
        console.log(action.payload, 'action.payload');
        yield put(Actions.deleteUserSuccess())
        yield put(Actions.getUserRequest())
    } catch (error) {
        yield put(Actions.deleteUserFailure(error))

    }
}

function* handleUpdateUser(action) {
    try {
        yield callAPI.updateUser(action.payload)
        yield put(Actions.updateUserSuccess())
        yield put(Actions.getUserRequest())
    } catch (err) {
        yield put(Actions.updateUserFailure(err))
    }
}

function* handleSearchUser(action) {
    try {
        const res = yield callAPI.searchUser(action.payload.search)

        console.log(res, 'day la res search');
        yield put(Actions.searchUserSuccess({
            listUser: res,
            search: action.payload.search

        }))

    } catch (err) {
        yield put(Actions.searchUserFailure(err))
    }
}

const userSaga = [
    takeEvery(types.GET_USER_REQUEST, handleGetUser),
    takeEvery(types.ADD_USER_REQUEST, handleAddUser),
    takeEvery(types.DELETE_USER_REQUEST, handleDeleteUser),
    takeEvery(types.UPDATE_USER_REQUEST, handleUpdateUser),
    takeEvery(types.SEARCH_USER_REQUEST, handleSearchUser)
]

export default userSaga