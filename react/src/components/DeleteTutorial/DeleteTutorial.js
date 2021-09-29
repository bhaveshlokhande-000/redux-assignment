import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTutorial, deleteTutorialReset } from "../../Actions/tutorials";

function DeleteTutorial(props) {
  const id = props.id;
  const setDeleteOpError = props.setDeleteOpError;
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, error, isLoaded } = useSelector(
    (state) => state.tutorials.deleteTutorial
  );

  useEffect(() => {
    if (isLoaded && data.id == id) {
      dispatch(deleteTutorialReset());
      history.push("/home");
    }
  }, [data]);

  useEffect(() => {
    setDeleteOpError(error);
  }, [error]);

  const deleteTutorialHandler = () => {
    dispatch(deleteTutorial(id));
  };

  return (
    <button
      type="button"
      className="btn btn-danger btn-sm  m-2"
      onClick={deleteTutorialHandler}
    >
      Delete
    </button>
  );
}

export default DeleteTutorial;
