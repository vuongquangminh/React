import React from "react";
import {  Space, Switch, Table, Tag } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { loginContext } from "../../../useContext/loginContext";

import {  mdiLockReset, mdiPencil } from "@mdi/js";
import Icon from "@mdi/react";
import ModalAdd from "../Them_moi_Modal/ModalAdd";
import DeleteUser from "./DeleteUser";
import FormUpdateUser from "../Them_moi_Modal/input/FormUpdateUser";
import FormInput from "../Them_moi_Modal/input/FormInput";

const TableUser = ({ strSearch, currentPage }) => {
  const { setData, reloadUser, findAncestor, getTokenFromLocalStorage } = useContext(loginContext);
  const [users, setUsers] = useState([]);
  const [initValue, setInitValue] = useState({
    name: "",
    email: "",
    username: '',
    mobile: "",
    cmnd: "",
    cap_bac: "",
    chuc_vu: "",
    dia_chi: "",
    password: "",
    confirm_password: "",
    role_ids: [],
    group: ""
  })
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const accessToken = getTokenFromLocalStorage()
  useEffect(() => {
    const getUser = async () => {
      const respon = await fetch(
        `https://gtvtqs.samcom.com.vn/api/users?with=roles,createdBy,group,donVi&paginate=true&${currentPage}&search=${strSearch}`,
        {headers: {
          "Authorization": `Bearer ${accessToken}`
        }}

      );
      const data = await respon.json();
      setData(data);
      const listUser = data.list.map((item, index) => {
        const createDay = item.created_at.slice(0,10);
        const listTag = item.roles.map((item) => item.name);
        return {
          key: item.id,
          name: item.name,
          user: item.username,
          phone: item.mobile,
          tags: listTag,
          group: item.group.name,
          createDay: createDay
        };
      });
      setUsers(listUser);
    };
    getUser();
  }, [currentPage]);
  useEffect(() => {
    const getUser2 = async () => {
      const respon = await fetch(
        `https://gtvtqs.samcom.com.vn/api/users?with=roles,createdBy,group,donVi&paginate=true&${currentPage}&search=${strSearch}`,
        {headers: {
          "Authorization": `Bearer ${accessToken}`
        }}
      );
      const data = await respon.json();
      setData(data);
      const listUser = data.list.map((item, index) => {
        const createDay = item.created_at.slice(0,10);
        const listTag = item.roles.map((item) => item.name);
        return {
          key: item.id,
          name: item.name,
          user: item.username,
          phone: item.mobile,
          tags: listTag,
          group: item.group.name,
          createDay: createDay
        };
      });
      setUsers(listUser);
    };
    getUser2();
  }, [strSearch]);
  useEffect(() => {
    const getUser = async () => {
      const respon = await fetch(
        `https://gtvtqs.samcom.com.vn/api/users?with=roles,createdBy,group,donVi&paginate=true&${currentPage}&search=${strSearch}`,
        {headers: {
          "Authorization": `Bearer ${accessToken}`
        }}
      );
      const data = await respon.json();
      setData(data);
      const listUser = data.list.map((item, index) => {
        const createDay = item.created_at.slice(0,10);
        const listTag = item.roles.map((item) => item.name);
        return {
          key: item.id,
          name: item.name,
          user: item.username,
          phone: item.mobile,
          tags: listTag,
          group: item.group.name,
          createDay: createDay,
        };
      });
      setUsers(listUser);
    };
    getUser();
  }, [reloadUser]);

  const columns = [
    {
      title: " Tên hiển thị ",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      
    },
    {
      title: " Tên đăng nhập ",
      dataIndex: "user",
      key: "user",
    },
    {
      title: " Số điện thoại ",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: " Trạng thái ",
      dataIndex: "state",
      key: "state",
      render: (_, { state }) => {
        return (
          <Switch
            defaultChecked
            size="small"
            onChange={onChange}
            className="bg-red"
          />
        );
      },
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;
            if (tag === "Ban quản lý dự án") {
              color = "#e2d4ff";
            }
            if (tag === "Lãnh Đạo") {
              color = "#c7f0fe";
            }
            if (tag === "Trợ lý (biên tập)") {
              color = "#cde5ff";
            }
            if (tag === "Người lái xe") {
              color = "#7fc18a";
            }
            if (tag === "Quản lý người dùng") {
              color = "#9bb2f5";
            }
            return (
              <Tag
                color={color}
                key={tag}
                className="text-black fw-bold p-1 m-1"
              >
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "  Nhóm dữ liệu  ",
      dataIndex: "group",
      key: "group",
      
    },
    {
      title: "  Ngày tạo  ",
      dataIndex: "createDay",
      key: "createDay",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Icon path={mdiLockReset} size={0.8} />
          {/* <Icon
            path={mdiPencil}
            size={0.8}
            onClick={(e) => {
              const parentElement = findAncestor(
                e.target,
                "ant-table-row-level-0"
              );
              if (parentElement) {
                console.log(parentElement.getAttribute("data-row-key"));
              }
            }}
          /> */}
          <ModalAdd children={<FormInput />} text={<Icon path={mdiPencil} size={0.8}  />}/>

          <DeleteUser />
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} pagination={false}  />;
};

export default TableUser;
