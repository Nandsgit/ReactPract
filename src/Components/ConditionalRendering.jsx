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
  {
    id: 5,
    filmName: "Batman",
    watched: false,
  },
  {
    id: 6,
    filmName: "Avengers",
    watched: true,
  },
  {
    id: 7,
    filmName: "Matrix",
    watched: true,
  },
  {
    id: 8,
    filmName: "Dune",
    watched: false,
  },
  {
    id: 9,
    filmName: "Sherlock",
    watched: true,
  },
  {
    id: 10,
    filmName: "Free Guy",
    watched: true,
  },
];

export const ConditionalRendering = () => {
  const [info, setInfo] = useState([]);
  const [movie, setMovie] = useState({ filmName: "", watched: false });
  const [err, setErr] = useState("");

  //state to keep the current number of items you want to show and increment
  //it with the button

  const [lst, setLst] = useState(...data, { itemsToDisplay: 3 });
  console.log(lst);

  useEffect(() => {
    setInfo(data);
    setLst(lst);
    // console.log(lst);
  }, []);

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
      <br />
      <button> Show Data </button>
      <button> Hide Data </button>
    </div>
  );
};

//thead
//tbody
