import { put, takeLatest, all } from "redux-saga/effects";
import {GET_USERS, GET_USER_INFO, setUsers, setUserInfo} from "../Actions/index";

export const PER_PAGE = 100;
export const BASE_URL = "https://api.github.com/users";

function* fetchUsers(action) {
  const { currentPage } = action.payload;
  const since = currentPage ? currentPage * PER_PAGE - PER_PAGE : 0;
  const url = `${BASE_URL}?per_page=${PER_PAGE}&since=${since}`;

  const json = yield fetch(url)
    .then(response => response.json());
  yield put(setUsers(json));
}

function* fetchUserInfo(payload) {
  const json = yield fetch(
    `${BASE_URL}/${payload.userName}`
  ).then(response => response.json());
  yield put(setUserInfo(json));
}

function* actionWatcher() {
  yield takeLatest(GET_USERS, fetchUsers);
  yield takeLatest(GET_USER_INFO, fetchUserInfo);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
