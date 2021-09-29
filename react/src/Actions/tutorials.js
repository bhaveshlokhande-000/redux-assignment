import {
  GET_TUTORIALS_REQUEST,
  GET_TUTORIALS_SUCCESS,
  GET_TUTORIALS_FAILURE,
  ADD_TUTORIAL_REQUEST,
  ADD_TUTORIAL_SUCCESS,
  ADD_TUTORIAL_RESET,
  ADD_TUTORIAL_FAILURE,
  UPDATE_TUTORIAL_REQUEST,
  UPDATE_TUTORIAL_SUCCESS,
  UPDATE_TUTORIAL_RESET,
  UPDATE_TUTORIAL_FAILURE,
  DELETE_TUTORIAL_REQUEST,
  DELETE_TUTORIAL_SUCCESS,
  DELETE_TUTORIAL_RESET,
  DELETE_TUTORIAL_FAILURE,
  DELETE_ALL_TUTORIALS_REQUEST,
  DELETE_ALL_TUTORIALS_SUCCESS,
  DELETE_ALL_TUTORIALS_RESET,
  DELETE_ALL_TUTORIALS_FAILURE,
} from "../Constants/tutorials";

export const getTutorials = () => ({
  type: GET_TUTORIALS_REQUEST,
});

export const getTutorialsSuccess = (tutorials) => ({
  type: GET_TUTORIALS_SUCCESS,
  payload: tutorials,
});

export const getTutorialsFailure = (error) => ({
  type: GET_TUTORIALS_FAILURE,
  payload: error,
});

export const addTutorial = (tutorial) => ({
  type: ADD_TUTORIAL_REQUEST,
  payload: tutorial,
});

export const addTutorialSuccess = (tutorial) => ({
  type: ADD_TUTORIAL_SUCCESS,
  payload: tutorial,
});

export const addTutorialReset = () => ({
  type: ADD_TUTORIAL_RESET,
});

export const addTutorialFailure = (error) => ({
  type: ADD_TUTORIAL_FAILURE,
  payload: error,
});

export const updateTutorial = (id, updatedTutorial) => ({
  type: UPDATE_TUTORIAL_REQUEST,
  payload: {
    id,
    tutorial: updatedTutorial,
  },
});

export const updateTutorialSuccess = (id, updatedTutorial) => ({
  type: UPDATE_TUTORIAL_SUCCESS,
  payload: {
    id,
    tutorial: updatedTutorial,
  },
});

export const updateTutorialFailure = (error) => ({
  type: UPDATE_TUTORIAL_FAILURE,
  payload: error,
});

export const updateTutorialReset = () => ({
  type: UPDATE_TUTORIAL_RESET,
});

export const deleteTutorial = (id) => ({
  type: DELETE_TUTORIAL_REQUEST,
  payload: id,
});

export const deleteTutorialSuccess = (id) => ({
  type: DELETE_TUTORIAL_SUCCESS,
  payload: id,
});

export const deleteTutorialReset = () => ({
  type: DELETE_TUTORIAL_RESET,
});

export const deleteTutorialFailure = (error) => ({
  type: DELETE_TUTORIAL_FAILURE,
  payload: error,
});

export const deleteAllTutorials = () => ({
  type: DELETE_ALL_TUTORIALS_REQUEST,
});

export const deleteAllTutorialsSuccess = (data) => ({
  type: DELETE_ALL_TUTORIALS_SUCCESS,
  payload: data,
});

export const deleteAllTutorialsReset = () => ({
  type: DELETE_ALL_TUTORIALS_RESET,
});

export const deleteAllTutorialsFailure = (error) => ({
  type: DELETE_ALL_TUTORIALS_FAILURE,
  payload: error,
});
