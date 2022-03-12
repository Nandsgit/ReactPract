import React from "react";
import { ConditionalRendering } from "./Components/ConditionalRendering";
import { Counter } from "./Components/Counter";
import { Info } from "./Components/Info";
import ReduxCounter from "./Components/ReduxCounter";
import { Table } from "./Components/Table";

function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Info/> */}
      {/* <Table/> */}
      {/* <ConditionalRendering/> */}
      <ReduxCounter/>

    </div>
  );
}

export default App;
