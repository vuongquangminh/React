import { Fragment } from "react";
import Card from "../Card/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBraille,
  faChartSimple,

  faMap,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../Layout/Layout";
import "./Home.scss";

import ContentLeft from "./Content_Left/ContentLeft";
import ContentRight from "./Content_Right/ContentRight";

function Home() {
  
  
  return (
    <Fragment>
      <Layout name="Đăng nhập2" link="/login">
        <div className="container-fluid text-center">
          <div className="row top_content">
            <div className="col-3 p-0"></div>
            <div className="col p-0">
              <ul className="nav">
                <li className="nav-item li_nav_item action">
                  <a
                    className="nav-link text-light nav_item"
                    aria-current="page"
                    href="/"
                  >
                    <FontAwesomeIcon icon={faBraille} className="mx-2" />
                    Lưới
                  </a>
                </li>
                <li className="nav-item li_nav_item">
                  <a className="nav-link text-light nav_item" href="/">
                    <FontAwesomeIcon icon={faBars} className="mx-2" />
                    Bảng
                  </a>
                </li>
                <li className="nav-item li_nav_item">
                  <a className="nav-link text-light nav_item" href="/">
                    <FontAwesomeIcon icon={faMap} className="mx-2" />
                    Bản đồ
                  </a>
                </li>
                <li className="nav-item li_nav_item">
                  <a
                    className="nav-link text-light nav_item"
                    aria-disabled="true"
                    href="/"
                  >
                    <FontAwesomeIcon icon={faChartSimple} className="mx-2" />
                    Thống kê
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row main_content">
            <ContentLeft />
            <ContentRight />
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default Home;
