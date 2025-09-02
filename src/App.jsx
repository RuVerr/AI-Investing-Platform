import { useDispatch } from "react-redux";
import AppRouter from "./Routers/AppRouter";

import { useEffect } from "react";

import "./App.scss";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
