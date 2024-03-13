import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import {Auth} from "./pages/Auth";
import {AddEvent} from "./pages/AddEvent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/login' element={<Auth/>}/>
        <Route path='/addevent' element={<AddEvent/>}  />



      </Routes>
    </>
  );
}

export default App;
