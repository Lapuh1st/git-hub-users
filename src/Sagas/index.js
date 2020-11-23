import { put, takeLatest, all } from "redux-saga/effects";
import {GET_USERS, GET_USER_INFO, USERS_RECEIVED, USERS_INFO_RECEIVED} from "../Actions/index"

function* fetchNews() {
  const json = yield fetch(
    "https://api.github.com/users?per_page=100"
  ).then(response => response.json());
  yield put({ type: USERS_RECEIVED, json: json });
}

function* fetchUserInfo(payload) {
  const json = yield fetch(
    `https://api.github.com/users/${payload.userName}`
  ).then(response => response.json());
  yield put({ type: USERS_INFO_RECEIVED, json: json });
}

function* actionWatcher() {
  yield takeLatest(GET_USERS, fetchNews);
  yield takeLatest(GET_USER_INFO, fetchUserInfo);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
