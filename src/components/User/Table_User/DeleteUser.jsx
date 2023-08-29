import React, { useState } from "react";
import { Modal } from "antd";
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";
import { useContext } from "react";
import { loginContext } from "../../../useContext/loginContext";

const DeleteUser = () => {
  const [text, setText] = useState("");
  const { findAncestor, setReloadUser, getTokenFromLocalStorage } = useContext(loginContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemID] = useState("");
  const token = getTokenFromLocalStorage()
  const showModal = (e) => {
    setIsModalOpen(true);
    const parentElement = findAncestor(e.target, "ant-table-row-level-0");
    if (parentElement) {
      console.log(parentElement);
      const childElement = parentElement.querySelectorAll(".ant-table-cell");
      setText(childElement[1].textContent);
      setItemID(parentElement.getAttribute("data-row-key"));
    }
  };
  const handleOk = async () => {
    const apiUrl = `https://gtvtqs.samcom.com.vn/api/users/${itemId}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },

    });

    setIsModalOpen(false);
    setReloadUser((prev) => prev + 1);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Icon path={mdiDeleteOutline} size={0.8} onClick={showModal} />
      <Modal
        title=" Bạn có chắc chắn không? "
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Bạn có chắc muốn xóa <b>{text}</b>? Điều này hoàn toàn không thế hoàn
          tác!
        </p>
      </Modal>
    </>
  );
};
export default DeleteUser;
