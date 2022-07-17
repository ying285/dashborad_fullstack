import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import capitalization from "../hooks/Capitalization";
import '../style/SubNav.scss'

import Slide from "../UI/Slide";

const SubNav = () => {
  const username = useSelector((state: RootState) => state.api.data);
  return (
    <div className="d-xl-none text-white subnav">
      <div className='subnav_text'>
        <h3>Welcome {username && capitalization(username)}</h3>
        <h3>
          to <span style={{ color: "darkorange" }}>Dashboard Business</span>
        </h3>
      </div>
      <div className='subnav_icon'>
        <i
          className="bi bi-list"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{ fontSize: "3rem" }}
        ></i>

        <div
          className="offcanvas offcanvas-end bg-black"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-body">
            <Slide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
