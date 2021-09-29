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

const initialState = {
  tutorialList: {
    data: [],
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  deleteTutorial: {
    data: {},
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  updateTutorial: {
    data: {},
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  addTutorial: {
    data: {},
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  deleteAllTutorials: {
    data: {},
    isLoading: false,
    isLoaded: false,
    error: null,
  },
};

const tutorialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TUTORIALS_REQUEST:
      return {
        ...state,
        tutorialList: {
          ...state.tutorialList,
          isLoading: true,
          isLoaded: false,
        },
      };
    case ADD_TUTORIAL_REQUEST:
      return {
        ...state,
        addTutorial: {
          ...state.addTutorial,
          data: {},
          isLoading: true,
          isLoaded: false,
        },
      };
    case UPDATE_TUTORIAL_REQUEST:
      return {
        ...state,
        updateTutorial: {
          ...state.updateTutorial,
          data: {},
          isLoading: true,
          isLoaded: false,
        },
      };

    case DELETE_TUTORIAL_REQUEST:
      return {
        ...state,
        deleteTutorial: {
          ...state.deleteTutorial,
          data: {},
          isLoading: true,
          isLoaded: false,
        },
      };

    case DELETE_ALL_TUTORIALS_REQUEST:
      return {
        ...state,
        deleteAllTutorials: {
          ...state.deleteAllTutorials,
          data: {},
          isLoading: true,
          isLoaded: false,
        },
      };

    case GET_TUTORIALS_SUCCESS:
      return {
        ...state,
        tutorialList: {
          ...state.tutorialList,
          data: action.payload,
          isLoading: false,
          isLoaded: true,
        },
      };

    case GET_TUTORIALS_FAILURE:
      return {
        ...state,
        tutorialList: {
          ...state.tutorialList,
          error: action.payload.message,
          isLoading: false,
        },
      };

    case ADD_TUTORIAL_SUCCESS:
      return {
        ...state,
        addTutorial: {
          ...state.addTutorial,
          data: action.payload,
          isLoading: false,
          isLoaded: true,
        },
      };

    case ADD_TUTORIAL_FAILURE:
      return {
        ...state,
        addTutorial: {
          ...state.addTutorial,
          error: action.payload.message,
          isLoading: false,
        },
      };

    case ADD_TUTORIAL_RESET:
      return {
        ...state,
        addTutorial: {
          data: {},
          error: null,
          isLoading: false,
          isLoaded: false,
        },
      };

    case UPDATE_TUTORIAL_SUCCESS:
      return {
        ...state,
        updateTutorial: {
          ...state.updateTutorial,
          data: action.payload,
          isLoading: false,
          isLoaded: true,
        },
      };

    case UPDATE_TUTORIAL_FAILURE:
      return {
        ...state,
        updateTutorial: {
          ...state.updateTutorial,
          error: action.payload.message,
          isLoading: false,
        },
      };

    case UPDATE_TUTORIAL_RESET:
      return {
        ...state,
        updateTutorial: {
          data: {},
          error: null,
          isLoading: false,
          isLoaded: false,
        },
      };

    case DELETE_TUTORIAL_SUCCESS:
      return {
        ...state,
        deleteTutorial: {
          ...state.deleteTutorial,
          data: { id: action.payload },
          isLoading: false,
          isLoaded: true,
        },
      };

    case DELETE_TUTORIAL_FAILURE:
      return {
        ...state,
        deleteTutorial: {
          ...state.deleteTutorial,
          error: action.payload.message,
          isLoading: false,
        },
      };

    case DELETE_TUTORIAL_RESET:
      return {
        ...state,
        deleteTutorial: {
          data: {},
          error: null,
          isLoading: false,
          isLoaded: false,
        },
      };

    case DELETE_ALL_TUTORIALS_SUCCESS:
      return {
        ...state,
        deleteAllTutorials: {
          ...state.deleteAllTutorials,
          data: { success: action.payload },
          isLoading: false,
          isLoaded: true,
        },
        tutorialList: {
          ...state.tutorialList,
          data: [],
        },
      };

    case DELETE_ALL_TUTORIALS_FAILURE:
      return {
        ...state,
        deleteAllTutorials: {
          ...state.deleteAllTutorials,
          error: action.payload.message,
          isLoading: false,
        },
      };

    case DELETE_ALL_TUTORIALS_RESET:
      return {
        ...state,
        deleteAllTutorials: {
          data: {},
          error: null,
          isLoading: false,
          isLoaded: false,
        },
      };

    default:
      return state;
  }
};

export default tutorialReducer;
