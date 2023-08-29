import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Divider } from "antd";
import styles from "./Layout.module.scss";
import clsx from "clsx";

import "bootstrap/dist/css/bootstrap.min.css";

import Icon from "@mdi/react";

import { mdiMagnify } from "@mdi/js";

function Layout({ children, name, link }) {
  const [str, setStr] = useState("");
  const [Ketqua, setKetqua] = useState([]);
  const [toggle, setToggle] = useState(false)

  const handleInputChange = (event) => {
    // Lấy giá trị mới từ sự kiện onChange
    const newValue = event.target.value;
    setStr(newValue);
    setToggle(true)
  };
  const handleToggle = () => setToggle(false)


  const handleChoose_Item = (e) => {
      console.log(e.target.parentNode)
      handleToggle()
  }
  return (
    <>
      <div className={clsx(styles.header)} role="alert">
        <Link to={link}>{name}</Link>
      </div>
      <div className={clsx(styles.header_bottom)}>
        <div className={clsx(styles.img)}>
          <img
            src="http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png"
            alt=""
          />
        </div>
        <div
          className={clsx(
            styles.header_input,
            " d-flex flex-row-reverse align-items-center"
          )}
        >
          <p className={clsx("text-light m-0 text-decoration-underline mx-4")}>
            Nâng cao
          </p>
          <Icon
            path={mdiMagnify}
            className={clsx(styles.header_icon, "p-2 text-light")}
          />

          <input
            type="text"
            placeholder="Tìm kiếm"
            className={clsx("form-control rounded-0")}
            value={str}
            onChange={handleInputChange}
          />

          {toggle && <div className={clsx(styles.search,'shadow p-3 mb-5 bg-body-tertiary')} >
            {Ketqua.map((item, index) => {
              if (!item.ten.toLowerCase().includes(str.toLowerCase())) {
                return false;
              } else {
                return (
                  <div className={clsx(styles.itemKQ)} keyItem={item.id} onClick={handleChoose_Item}>
                    <p>{item.ten}</p>
                    <span>{item.ten_khoa_hoc}</span>
                  </div>
                );
              }
            })}
            <p> Xem thêm kết quả khác </p>
          </div>}
        </div>
        <div className={clsx(styles.header_right)}>
          <Link to="/bantin" className={clsx(styles.header_nav)}>
            {" "}
            Bản tin
          </Link>
          <Divider type="vertical" className={clsx(styles.white)} />
          <Link to="/gioithieu" className={clsx(styles.header_nav)}>
            {" "}
            Giới thiệu
          </Link>
          <Divider type="vertical" className={clsx(styles.white)} />
          <Link to="/tailieu" className={clsx(styles.header_nav)}>
            {" "}
            Tài liệu
          </Link>
          <Divider type="vertical" className={clsx(styles.white)} />
          <Link to="/lienhe" className={clsx(styles.header_nav, styles.action)}>
            {" "}
            Liên hệ{" "}
          </Link>
        </div>
      </div>
      {children}
      <div className={clsx("container-fluid")}>
        <footer className={clsx("py-5")}>
          <div className={clsx(styles.my_row, "row")}>
            <div className={clsx(styles.my_col, "col-6 col-md-3 mb-3")}>
              <h5>Giới thiệu</h5>
              <ul className={clsx("nav flex-column")}>
                <li className={clsx("nav-item mb-2")}>Hệ thống</li>
                <li className={clsx("nav-item mb-2")}>Tài trợ</li>
              </ul>
            </div>

            <div className={clsx(styles.my_col, "col-6 col-md-3 mb-3")}>
              <h5>Thông tin - Hướng dẫn</h5>
              <ul className={clsx("nav flex-column")}>
                <li className={clsx("nav-item mb-2")}>Tin tức</li>
                <li className={clsx("nav-item mb-2")}>
                  Tài liệu hướng dẫn tra cứu thông tin
                </li>
                <li className={clsx("nav-item mb-2")}>
                  Video hướng dẫn tra cứu thông tin
                </li>
              </ul>
            </div>

            <div className={clsx(styles.my_col, "col-6 col-md-3 mb-3")}>
              <h5>Văn bản - Tài liệu</h5>
              <ul className={clsx("nav flex-column")}>
                <li className={clsx("nav-item mb-2")}>Văn bản pháp luật</li>
              </ul>
            </div>
            <div className={clsx(styles.my_col, "col-6 col-md-3 mb-3")}>
              <h5>Hỗ trợ</h5>
              <ul className={clsx("nav flex-column")}>
                <li className={clsx("nav-item mb-2")}>Liên hệ</li>
              </ul>
            </div>
          </div>
          <div className={clsx(styles.my_row2, "row")}>
            <p>
              {" "}
              HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP QUÝ HIẾM ĐƯỢC ƯU TIÊN
              BẢO VỆ{" "}
            </p>
            <p>
              <span>Điều khoản & Bảo mật</span>{" "}
              <span>Bản quyền bởi Ban quản lý dự án WLP</span>
            </p>
            <p>
              Được tài trợ bởi: Quỹ môi trường dự án toàn cầu (GEF) THÔNG QUA
              NGÂN HÀNG THẾ GIỚI (WB){" "}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
