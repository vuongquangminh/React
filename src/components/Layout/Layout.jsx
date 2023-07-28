import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.scss";

function Layout({ children, name, link }) {
    const [none, setNone] = useState('d-none')
  return (
    <>
      <div className="header" role="alert">
        <Link to={link}>{name}</Link>
      </div>
      <div className="header-bottom">
        <div className="img">
          <img
            src="http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png"
            alt=""
          />
        </div>
        <div className="header_input input-group d-flex flex-row-reverse align-items-center">
          <p className="text-light m-0 text-decoration-underline mx-4">
            Nâng cao
          </p>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="p-2 text-light header_icon"
          />
          <input
            type="text"
            className="form-control rounded-0 "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            fdprocessedid="9yw62e"
          />
        </div>
        <div className="header_right">
          <Link to="/bantin" className="header_nav">
            {" "}
            Bản tin
          </Link>
          <Divider type="vertical" className="white" />
          <Link to="/gioithieu" className="header_nav">
            {" "}
            Giới thiệu
          </Link>
          <Divider type="vertical" className="white" />
          <Link to="/tailieu" className="header_nav">
            {" "}
            Tài liệu
          </Link>
          <Divider type="vertical" className="white" />
          <Link to="/lienhe" className="header_nav action">
            {" "}
            Liên hệ{" "}
          </Link>
        </div>
      </div>
      {children}
    </>
  );
}

export default Layout;
