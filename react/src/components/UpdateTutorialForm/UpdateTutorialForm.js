import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteTutorial from "../DeleteTutorial/DeleteTutorial";
import {
  updateTutorial,
  deleteTutorial,
  updateTutorialReset,
  deleteTutorialReset,
} from "../../Actions/tutorials";
import "./UpdateTutorialForm.css";

function UpdateTutorialForm(props) {
  const dispatch = useDispatch();

  const { data, error, isLoaded } = useSelector(
    (state) => state.tutorials.updateTutorial
  );

  const tutorial = props.location.state.tutorial;
  const id = tutorial.id;
  const [title, setTitle] = useState(tutorial.title);
  const [description, setDescription] = useState(tutorial.description);
  const [publishedStatus, setPublishedStatus] = useState(tutorial.published);
  const [deleteOpError, setDeleteOpError] = useState(null);

  useEffect(() => {
    if (isLoaded && data.id == id) {
      dispatch(updateTutorialReset());
      props.history.push("/home");
    }
  }, [data]);

  const changePublishStatus = () => {
    const updatedTutorial = {
      published: !publishedStatus,
    };
    setPublishedStatus(!publishedStatus);
    dispatch(updateTutorial(id, updatedTutorial));
  };

  const updateTutorialHandler = () => {
    const updatedTutorial = {
      title: title.trim(),
      description: description.trim(),
      published: publishedStatus,
    };

    dispatch(updateTutorial(id, updatedTutorial));

    setTitle("");
    setDescription("");
  };

  if (error) return error;

  if (deleteOpError) {
    return deleteOpError;
  }

  return (
    <div className="row">
      <div className="col-4 offset-4">
        <h2 className="p-4">Tutorials</h2>
        <div className="p-4">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              placeholder="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              className="form-control"
              placeholder="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>
          <span className="fw-bold">Status: </span>
          <span>{publishedStatus ? "Published" : "Pending"}</span>
          <br></br>
          <br></br>
          {publishedStatus ? (
            <button
              type="button"
              className="btn btn-primary btn-sm m-2"
              onClick={() => {
                changePublishStatus();
              }}
            >
              UnPublish
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-sm m-2 "
              onClick={() => {
                changePublishStatus();
              }}
            >
              Publish
            </button>
          )}

          <DeleteTutorial id={id} setDeleteOpError={setDeleteOpError} />

          <button
            type="submit"
            className="btn btn-success btn-sm  m-2"
            disabled={
              title.trim().length === 0 || description.trim().length === 0
            }
            onClick={updateTutorialHandler}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateTutorialForm;
