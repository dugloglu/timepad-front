import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import {Auth} from "./pages/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/login' element={<Auth/>}/>



      </Routes>
    </>
  );
}

export default App;
