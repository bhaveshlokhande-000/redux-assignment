import React, { useState, useRef, useEffect } from "react";
import TutorialDescription from "../TutorialDescription/TutorialDescription";
import Tutorial from "../Tutorial/tutorial";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllTutorials,
  getTutorials,
  deleteAllTutorialsReset,
} from "../../Actions/tutorials";
import "./TutorialList.css";

function TutorialList(props) {
  const dispatch = useDispatch();

  const { data: tutorials, error } = useSelector(
    (state) => state.tutorials.tutorialList
  );

  const {
    data: deleteAllTutorialOpdata,
    error: deleteAllTutorialOpError,
    isLoaded: deleteAllTutorialOpIsLoaded,
  } = useSelector((state) => state.tutorials.deleteAllTutorials);

  const userType = localStorage.getItem("userType");
  const [selectedTutorial, setSelectedTutorial] = useState();
  const filter = useRef(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedRowRef, setSelectedRowRef] = useState(null);

  const deleteAllTutorialsHandler = () => {
    dispatch(deleteAllTutorials());
  };

  useEffect(() => {
    dispatch(getTutorials());
  }, []);

  useEffect(() => {
    if (deleteAllTutorialOpIsLoaded && deleteAllTutorialOpdata.success)
      dispatch(deleteAllTutorialsReset());
  }, [deleteAllTutorialOpdata]);

  const search = () => {
    let result;
    if (searchKeyword !== "") {
      result = tutorials.filter((tutorial) => {
        return tutorial.title
          .toLowerCase()
          .includes(searchKeyword.trim().toLowerCase());
      });
      setSearchResult(result);
      filter.current = true;
    } else {
      filter.current = false;
      setSearchResult();
    }
  };

  if (error) return error;
  if (deleteAllTutorialOpError) return deleteAllTutorialOpError;

  return (
    <div className="row m-4 p-2">
      <div className="col-6">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
            }}
          ></input>
          <button
            type="button"
            className="input-group-text bg-white"
            onClick={() => {
              searchKeyword !== "" && setSelectedTutorial(null);
              search();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-100"></div>
      <div className="col-5">
        <h2 className="p-1">Tutorials List</h2>
        <ul className="list-group">
          {!filter.current
            ? tutorials.map((tutorial) => (
                <Tutorial
                  setSelectedTutorial={setSelectedTutorial}
                  setSelectedRowRef={setSelectedRowRef}
                  selectedRowRef={selectedRowRef}
                  key={tutorial.id}
                  tutorial={tutorial}
                />
              ))
            : searchResult.map((tutorial) => (
                <Tutorial
                  setSelectedTutorial={setSelectedTutorial}
                  setSelectedRowRef={setSelectedRowRef}
                  selectedRowRef={selectedRowRef}
                  key={tutorial.id}
                  tutorial={tutorial}
                />
              ))}
        </ul>
        {userType === "admin" && (
          <button
            type="button"
            className="btn btn-danger btn-sm mt-2"
            onClick={() => {
              setSelectedTutorial(null);
              deleteAllTutorialsHandler();
            }}
            disabled={tutorials?.length === 0}
          >
            Remove All
          </button>
        )}
      </div>
      <div className="col-6 p-1 offset-1">
        {selectedTutorial && (
          <TutorialDescription tutorial={selectedTutorial} />
        )}
      </div>
    </div>
  );
}

export default TutorialList;
