import {
  Fragment,
  useEffect,
  useState,
} from "react";

import ContentLeft from "./Content_Left/ContentLeft";
import ContentRight from "./Content_Right/ContentRight";
import Icon from "@mdi/react";
import { mdiChartBar, mdiDotsGrid, mdiMap, mdiMenu } from "@mdi/js";

import Layout from "../Layout/Layout";
import styles from "./Home.module.scss";
import clsx from "clsx";

function Home() {
  const [my_provinceName, setMy_provinceName] = useState([])
  const [my_provinceId, setMy_provinceId] = useState([])
  const [stringApi, setStringApi] = useState('')

  const handlefill = (e) => {
    if(e.target.checked === true) {
      setStringApi(prev => prev + e.target.getAttribute('name')+ e.target.getAttribute('nameId'))

    }
    else{
      const substringToRemove =`${e.target.getAttribute('name')}${e.target.getAttribute('nameId')}`
      const substringToRemove_Length = substringToRemove.length
      const indexOf_substringToRemove = stringApi.indexOf(substringToRemove)
      const stringBefore  = stringApi.slice(0, indexOf_substringToRemove )
      const stringAfter = stringApi.slice(substringToRemove_Length + indexOf_substringToRemove)
      setStringApi(stringBefore.concat(stringAfter))
    }

  };

  useEffect(() => {
    const province = async() => {
      const res = await fetch('http://wlp.howizbiz.com/api/provinces')
      const my_province = await res.json()
      const my_provinceName = my_province.map(item => item.name)
      const my_provinceId = my_province.map(item => item.id)
      
      setMy_provinceName(my_provinceName)
      setMy_provinceId(my_provinceId)
    }
  
    province()

  },[])

  const dataForOption = [
    {
      option: {
        id: "&province_ids[]=",
        title: "Địa giới hành chính",
        option2: my_provinceName,
        id2: my_provinceId,
      },
    },
    {
      option: {
        id: "&loaihientrang_ids[]=",
        title: "Hiện trạng loài",
        option2: ["Chưa xác định", "Ổn định", "Giảm dần", "Tăng dần"],
        id2: [1, 2, 3, 4],
      },
    },
    {
      option: {
        id: "&hesinhthai_ids[]=",
        title: "Hệ sinh thái",
        option2: ["Trên cạn", "Nước ngọt (Vùng nước nội địa)", "Biển"],
        id2: [1, 2, 3],
      },
    },
    {
      option: {
        id: "&loaidachuu_ids[]=",
        title: "Loài đặc hữu",
        option2: [" Loài đặc hữu ", " Không đặc hữu "],
        id2: [1, 2],
      },
    },
  ];

  return (
    <Fragment>
      <Layout name="Đăng nhập" link="/login">
        <div className="container-fluid text-center">
          <div className={clsx(styles.top_content, "row")}>
            <div className="col-3 p-0"></div>
            <div className="col p-0">
              <ul className="nav">
                <li
                  className={clsx(
                    styles.li_nav_item,
                    styles.action,
                    "nav-item"
                  )}
                >
                  <a
                    className={clsx(styles.nav_item, "nav-link text-light")}
                    aria-current="page"
                    href="/"
                  >
                    <Icon path={mdiDotsGrid} size={1} className="mx-2" />
                    Lưới
                  </a>
                </li>
                <li className={clsx(styles.li_nav_item, "nav-item")}>
                  <a
                    className={clsx(styles.nav_item, "nav-link text-light")}
                    href="/"
                  >
                    <Icon path={mdiMenu} size={1} className="mx-2" />
                    Bảng
                  </a>
                </li>
                <li className={clsx(styles.li_nav_item, "nav-item")}>
                  <a
                    className={clsx(styles.nav_item, "nav-link text-light")}
                    href="/"
                  >
                    <Icon path={mdiMap} size={1} className="mx-2" />
                    Bản đồ
                  </a>
                </li>
                <li className={clsx(styles.li_nav_item, "nav-item")}>
                  <a
                    className={clsx(styles.nav_item, "nav-link text-light")}
                    aria-disabled="true"
                    href="/"
                  >
                    <Icon path={mdiChartBar} size={1} className="mx-2" />
                    Thống kê
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={clsx(styles.main_content, "row ")}>
            <ContentLeft
              dataForOption={dataForOption}
              check_option={handlefill}
            />
            <ContentRight stringApi={stringApi}/>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default Home;
