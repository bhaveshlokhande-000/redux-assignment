import { takeEvery, put, call, delay } from "redux-saga/effects";

import {
  getTutorialsSuccess,
  getTutorialsFailure,
  addTutorialSuccess,
  addTutorialFailure,
  updateTutorialSuccess,
  updateTutorialFailure,
  deleteTutorialSuccess,
  deleteTutorialFailure,
  deleteAllTutorialsSuccess,
  deleteAllTutorialsFailure,
} from "../Actions/tutorials";

import {
  getTutorialsService,
  addTutorialService,
  updateTutorialService,
  deleteTutorialService,
  deleteTutorialsService,
} from "../Middleware/AxiosInterceptor";

import {
  GET_TUTORIALS_REQUEST,
  ADD_TUTORIAL_REQUEST,
  UPDATE_TUTORIAL_REQUEST,
  DELETE_TUTORIAL_REQUEST,
  DELETE_ALL_TUTORIALS_REQUEST,
} from "../Constants/tutorials";

export function* onGetTutorialsAsync() {
  try {
    const response = yield call(getTutorialsService);
    yield put(getTutorialsSuccess(response.data));
  } catch (error) {
    yield put(getTutorialsFailure(error));
  }
}

export function* onGetTutorials() {
  yield takeEvery(GET_TUTORIALS_REQUEST, onGetTutorialsAsync);
}

export function* onAddTutorialAsync({ payload: tutorial }) {
  try {
    const response = yield call(() => addTutorialService(tutorial));
    const newTutorial = {
      ...tutorial,
      id: response.data.id,
    };

    yield put(addTutorialSuccess(newTutorial));
  } catch (error) {
    yield put(addTutorialFailure(error));
  }
}

export function* onAddTutorial() {
  yield takeEvery(ADD_TUTORIAL_REQUEST, onAddTutorialAsync);
}

export function* onUpdateTutorialAsync({ payload: { id, tutorial } }) {
  try {
    const response = yield call(() => updateTutorialService(id, tutorial));
    yield put(updateTutorialSuccess(id, tutorial));
  } catch (error) {
    yield put(updateTutorialFailure(error));
  }
}

export function* onUpdateTutorial() {
  yield takeEvery(UPDATE_TUTORIAL_REQUEST, onUpdateTutorialAsync);
}

export function* onDeleteTutorialAsync({ payload: id }) {
  try {
    const response = yield call(() => deleteTutorialService(id));
    yield put(deleteTutorialSuccess(id));
  } catch (error) {
    yield put(deleteTutorialFailure(error));
  }
}

export function* onDeleteTutorial() {
  yield takeEvery(DELETE_TUTORIAL_REQUEST, onDeleteTutorialAsync);
}

export function* onDeleteAllTutorialsAsync() {
  try {
    const response = yield call(deleteTutorialsService);
    yield put(deleteAllTutorialsSuccess(response.success));
  } catch (error) {
    yield put(deleteAllTutorialsFailure(error));
  }
}

export function* onDeleteAllTutorials() {
  yield takeEvery(DELETE_ALL_TUTORIALS_REQUEST, onDeleteAllTutorialsAsync);
}
