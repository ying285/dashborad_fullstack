import React from "react";
import Home from "./pages/Home";
import StatisticsPage from "./pages/StatisticsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import AddData from "./pages/AddData";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./style/App.scss";
import { RootState } from "../../frontend/src/store";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../frontend/src/store/auth";

function App() {
  const dispatch = useDispatch();

  dispatch(authActions.getToken());
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Signup />} />
        {isAuth && <Route path="/home" element={<Home />} />}
        {isAuth && <Route path="/statistics" element={<StatisticsPage />} />}
        {isAuth && <Route path="/adddata" element={<AddData />} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
