import React from "react";
import { useEffect } from "react";
import { useState } from "react";

//lets assume that the data is coming from the backend
//using an api call, so we can't directly modify these data
const data = [
  {
    id: 1,
    movie: "Avenger",
    watched: true,
  },
  {
    id: 2,
    movie: "Batman",
    watched: false,
  },
  {
    id: 3,
    movie: "SuperMan",
    watched: false,
  },
  {
    id: 4,
    movie: "Life of pie",
    watched: true,
  },
];

export const Info = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    /* instead of mapping over the backend end data
      use a use state and map over the objects,
      and use setState to change the state */
    setInfo(data);
  }, []);

  const handleCheckBox = (e) => {
    console.log("checkbox");
    // info.watched(e.target.checked)
    // setInfo[]
  };
  return (
    <div>
      <h1> Movie Name</h1>
      <h2> some text....</h2>
      <ul>
        {info.map((ele) => (
          <li key={ele.id}>
            {ele.id} - {ele.movie} -
            <input
              type={"checkbox"}
              checked={ele.watched}
              onChange={handleCheckBox}
            />
          </li>
        ))}

        <br />
        <br />

        {/* so why is this code below doesn't work when using { } breackets? */}

        {/* {data.map((ele) => {
          <li>
            {ele.id} - {ele.movie} -
            <input type={"checkbox"} checked={ele.watched} />
          </li>;
        })} */}
      </ul>
    </div>
  );
};
