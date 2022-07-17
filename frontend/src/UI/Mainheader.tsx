import React, { useEffect, useCallback } from "react";
import "../style/Mainheader.scss";
import axios from "axios";
import { apiActions } from "../store/api";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import capitalization from "../hooks/Capitalization";

const Mainheader = () => {
  const dispatch = useDispatch();

  const username = useSelector((state: RootState) => state.api.data);

  const fetchUsername = useCallback(async () => {
    try {
      const token: string = localStorage.getItem("token")!;
      const response = await axios.get("https://dashboradfullstack.herokuapp.com/user/username", {
        headers: {
          token,
        },
      });
      dispatch(apiActions.getData(response.data));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
  useEffect(() => {
    fetchUsername();
  }, [fetchUsername]);

  return (
    <div className="mainheader">
      <h3>Hello {username && capitalization(username)}</h3>
      <p>
        Welcome to <span>Your business Dashboard</span>
      </p>
    </div>
  );
};

export default Mainheader;
