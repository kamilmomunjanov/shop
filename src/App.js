import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Component/home/Home";
import './style.scss'
import NotFound from "./Component/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="*"  element={<NotFound/>}/>
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
