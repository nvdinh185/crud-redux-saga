import { all } from 'redux-saga/effects'
import userSaga from './saga'
export default function* Saga() {
    yield all({
        ...userSaga
    })
}