import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tree } from "antd";

function ContentLeft() {
    const treeData = [
        {
          title: "Loài đặc hữu",
          key: "loaidachuu",
          children: [
            {
              title: " Loài đặc hữu ",
              key: "loaidachuu_child_1",
            },
            {
              title: " Không đặc hữu ",
              key: "loaidachuu_child_2",
            },
          ],
        },
      ];
    return ( 
        <>
        <div className="col-3 left">
              <div className="title">
                Loại <FontAwesomeIcon icon={faCircleQuestion} />
              </div>
              <div className="check_radio">
                <div className="form-check radio_item">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Loài
                  </label>
                </div>
                <div className="form-check radio_item">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Văn bản tài liệu
                  </label>
                </div>
              </div>
              <div className="title">
                Bộ lọc <FontAwesomeIcon icon={faCircleQuestion} />
              </div>
              <div className="option">
                <Tree checkable treeData={treeData} />
              </div>
            </div>
        </>
     );
}

export default ContentLeft;