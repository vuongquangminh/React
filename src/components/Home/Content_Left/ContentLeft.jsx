import { memo } from "react";
import Icon from "@mdi/react";
import { mdiHelpCircle, } from "@mdi/js";

import Option from "./Filter_Option/Option";
import styles from "./ContentLeft.module.scss";
import clsx from "clsx";



function ContentLeft({dataForOption, check_option}) {

  return (
    <>
      <div className={clsx("col-3", styles.left)}>
        <div className={styles.title}>
          <h6>Loại</h6>

          <Icon path={mdiHelpCircle} size={0.7} />
        </div>
        <div className={clsx(styles.check_radio)}>
          <div className={clsx("form-check", styles.radio_item)}>
            <input
              className={clsx("form-check-input")}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
            />
            <label
              className={clsx("form-check-label")}
              htmlFor="flexRadioDefault1"
            >
              Loài
            </label>
          </div>
          <div className={clsx("form-check", styles.radio_item)}>
            <input
              className={clsx("form-check-input")}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              className={clsx("form-check-label")}
              htmlFor="flexRadioDefault2"
            >
              Văn bản tài liệu
            </label>
          </div>
        </div>
        <div className={clsx(styles.title)}>
          <h6>Bộ lọc</h6>
          <Icon path={mdiHelpCircle} size={0.7} />
        </div>
        <div className={clsx(styles.Fill_Option)}>
          {
            dataForOption.map((item, index) => 
              <Option option={item.option} key={index} check_option={check_option}/>
            )
          }
        </div>
      </div>
    </>
  );
}

export default memo(ContentLeft);
