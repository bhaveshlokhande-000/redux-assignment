import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTutorial, addTutorialReset } from "../../Actions/tutorials";
import "./AddTutorialForm.css";

function AddTutorialForm(props) {
  const dispatch = useDispatch();
  const { data, error, isLoaded } = useSelector(
    (state) => state.tutorials.addTutorial
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isLoaded && data.id) {
      dispatch(addTutorialReset());
      props.history.push("/home");
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tutorial = {
      title: title.trim(),
      description: description.trim(),
      published: true,
    };

    dispatch(addTutorial(tutorial));
    setTitle("");
    setDescription("");
  };

  if (error) {
    return error;
  }

  return (
    <div className="row">
      <div className="col-4 offset-4">
        <h2 className="p-4">Tutorials</h2>
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              placeholder="enter title"
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
              placeholder="enter description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-success btn-sm"
            disabled={
              title.trim().length === 0 || description.trim().length === 0
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTutorialForm;
