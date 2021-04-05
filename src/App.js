import React from "react";
import './App.css';
// import Pagination from "./components/Pagination";
import PaginationReactTable from "./components/PaginationReactTable";
// import PaginationNextPrev from "./components/PaginationNextPrev";

function App() {
  return (
    <div className="App">
      <PaginationReactTable></PaginationReactTable>
    </div>
  );
}

export default App;


// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>