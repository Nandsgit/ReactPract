import React, { useState } from "react";
import { useEffect } from "react";
//useEffect

const data = [
  {
    id: 1,
    filmName: "Spider Man",
    watched: true,
  },
  {
    id: 2,
    filmName: "3 Idiots",
    watched: false,
  },
  {
    id: 3,
    filmName: "Money Heist",
    watched: true,
  },
  {
    id: 4,
    filmName: "Dangal",
    watched: false,
  },
];

export const Table = () => {
  const [info, setInfo] = useState([]);
  const [movie, setMovie] = useState({ filmName: "", watched: false });
  const [err, setErr] = useState("");

  useEffect(() => {
    setInfo(data);
  }, []);

  const handleInputboxChange = (e) => {
    setMovie({ ...movie, filmName: e.target.value });
  };

  const handleCheckBox = (e) => {
    let temp = e.target.checked;
    let name = e.target.name;
    const result = info.map((data) => {
      if (data.filmName === name) {
        data.watched = temp;
      }
      return data;
    });
    console.log(result);
    setInfo(result);
  };

  const handleAddCheckbox = (position) => {
    // setMovie({ ...movie, watched: e.target.checked });
    setInfo({ ...info });
  };

  const handleAddMovie = (e) => {
    setInfo([...info, movie]);
    // console.log(movie);
    setMovie({ ...movie, filmName: "", watched: false });
  };

  const validateOnBlur = (e) => {
    if (movie.filmName.length == 0) {
      setErr("Enter valid name");
    } else {
      setErr("");
    }
  };

  const handleDelete = (name) => {
    const result = info.filter((ele) => ele.filmName !== name);
    setInfo(result);
  };


  return (
    <div>
      <h3>FilmNames In Table Format</h3>
      <table border="1">
        <thead>
          <tr>
            <td>id</td>
            <td>FilmName</td>
            <td>Watched</td>
          </tr>
        </thead>
        <tbody>
          {info.map((ele, index) => {
            return (
              <tr key={ele.id + index}>
                <td>{index + 1}</td>
                <td>{ele.filmName}</td>
                <td>
                  <input
                    type={"checkbox"}
                    checked={ele.watched}
                    onChange={handleCheckBox}
                    name={ele.filmName}
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(ele.filmName)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <label> Enter Film Name: </label>
      <input
        type={"text"}
        placeholder="Enter Film Name"
        value={movie.filmName}
        onChange={handleInputboxChange}
        onBlur={validateOnBlur}
      />
      <h5 style={{ color: "red" }}> {err}</h5>
      <br />
      <label> Watched </label>
      <input
        type={"checkbox"}
        value={movie.watched}
        onChange={handleAddCheckbox}
      />
      <br />
      <button onClick={handleAddMovie}> Add film </button>
    </div>
  );
};

//thead
//tbody
