import { Fragment } from "react";
import Card from "../Card/Card";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille } from "@fortawesome/free-solid-svg-icons";


import Layout from "../Layout/Layout";

function Home() {
  const content = [
    "Some quick example text to ",
    "Get started with Bootstrap",
    "build on the card title and make up the bulk of the card's content.",
    "Bootstrap is a powerful",
    "feature-packed frontend toolkit",
  ];
  return (
    <Fragment>
      <Layout name="Đăng nhập2" link="/login">
        <div class="container-fluid text-center">
          <div class="row">
            <div class="col-3 bg-primary">col-3</div>
            <div class="col-9 bg-warning p-0">
              <ul class="nav bg-dark">
                <li class="nav-item ">
                  <a class="nav-link text-light" aria-current="page" href="/">
                  <FontAwesomeIcon icon={faBraille} className="mx-2"/>
                  Lưới 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="/">
                  Bảng 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="/">
                  Bản đồ 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" aria-disabled="true" href="/">
                  Thống kê 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="listCard">
          {content.map((item, index) => {
            if (index >= 0) {
              return <Card data={item} />;
            } else {
              return false;
            }
          })}
        </div>
      </Layout>
    </Fragment>
  );
}

export default Home;
