import * as React from "react";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiBookSettings,
  mdiCodeNotEqual,
  mdiMenu,
  mdiPencil,
  mdiPlus,
  mdiSheep,
  mdiSortAscending,
  mdiViewDashboard,
} from "@mdi/js";
import { Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Autocomplete, Box, MenuItem, TextField } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import MyItem from "./itemSideBar/MyItem";
import BasicPopover from "../My_component_Logout/BasicPopover";
import { loginContext } from "../../useContext/loginContext";
import styles from "./User.module.scss";
import clsx from "clsx";
import TableUser from "./Table_User/Table_User";
import { Pagination } from "antd";
import ModalAdd from "./Them_moi_Modal/ModalAdd";
import { useState } from "react";
import { useEffect } from "react";
import FormInput from "./Them_moi_Modal/input/FormInput";

function User() {
  const trang_thai = [
    {
      id: 2,
      value: "Toàn bộ",
    },
    {
      id: 0,
      value: "Hoạt động",
    },
    {
      id: 1,
      value: "Vô hiệu",
    },
  ];
  

  const group_id = [
    { title: "Dữ liệu BTL Thủ đô Hà Nội", id_group: 6 },
    { title: "Toàn bộ quân khu", id_group: 1 },
  ];
  const { data, roles } = React.useContext(loginContext);

  const [search, setSearch] = useState("");
  const [inactive, setInactive] = useState("");
  const [id, setID] = useState("");
  const [id_group, setGroup] = useState("");
  const [strSearch, setStrSearch] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [currentPage, setCurrentPage] = useState("page=1&itemsPerPage=10");
  const strFillter = `${search}${inactive}${id}${id_group}${start}${end}`;

  const handlePage = (page, pageSize) => {
    setCurrentPage(`page=${page}&itemsPerPage=${pageSize}`);

  };
  useEffect(() => {
    setStrSearch(strFillter);
  }, [strFillter]);

  return (
    <div id={clsx(styles.wrapper)}>
      <header id={clsx(styles.header)}>
        <div className={clsx(styles.left)}>
          <Icon path={mdiMenu} size={1} />
          <div className={clsx(styles.img)}>
            <img src="http://wlp.howizbiz.com/static/img/logo.png" alt="" />
          </div>
          <h5>
            {" "}
            HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN
            BẢO VỆ{" "}
          </h5>
        </div>

        <div className={clsx(styles.right)}>
          <div className={clsx(styles.user)}>B</div>
          <BasicPopover />
        </div>
      </header>

      <div id={clsx(styles.content)}>
        <Grid container spacing={2}>
          {/* Left */}

          <Grid xs={2} className={clsx(styles.content_left)}>
            <MyItem myicon={mdiViewDashboard} title="Bảng điều khiển" />
            <MyItem myicon={mdiAccount} title=" Quản lý người dùng " />
            <MyItem myicon={mdiSortAscending} title=" Phân loại học " />
            <MyItem myicon={mdiSheep} title=" Loài nguy cấp quý hiếm " />
            <MyItem myicon={mdiPencil} title=" Bài viết " />
            <MyItem myicon={mdiCodeNotEqual} title="  Phiếu đề xuất  " />
            <MyItem myicon={mdiBookSettings} title="  Danh mục  " />
          </Grid>

          {/* Right */}

          <Grid xs={true} paddingX={3} className={clsx(styles.content_right)}>
            <div className={clsx(styles.content_top)}>
              <div className={clsx(styles.content_title)}>
                <Icon path={mdiAccount} size={1.5} />
                <p> Danh sách người dùng</p>
              </div>
            </div>

            <Grid
              container
              spacing={2}
              paddingTop={3}
              display={"flex"}
              alignItems={"center"}
            >
              <Grid xs={true}>
                <div className={clsx(styles.input)}>
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo tên hoặc số điện thoại"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setCurrentPage("page=1&itemsPerPage=10")
                    }}
                  />
                </div>
              </Grid>

              <Grid
                xs={2}
                display={"flex"}
                alignItems={"center"}
                className={clsx(styles.add)}
              >
                <Icon path={mdiPlus} size={0.7} />
                <ModalAdd children={<FormInput />} text={"Thêm mới"} />
              </Grid>
            </Grid>

            <div className={clsx(styles.fillter, "mt-4")}>
              <Grid container spacing={3}>
                <Grid xs={2}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { width: "160px" },
                    }}
                    noValidate
                    autoComplete="off"
                    className={clsx(styles.item)}
                  >
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        defaultValue="EUR"
                        sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                        onChange={(e) => {
                          const id = e.target.value;
                          if (id === 0) {
                            setInactive("&inactive=false");
                          }
                          if (id === 1) {
                            setInactive("&inactive=true");
                          }
                          if (id === 2) {
                            setInactive("");
                          }
                        }}
                      >
                        {trang_thai.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </Box>
                </Grid>

                <Grid xs={2}>
                  <Stack spacing={2} className={clsx(styles.item)}>
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={roles}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField {...params} label="Vai trò" />
                      )}
                      onChange={(event, newValue) => {
                        if (newValue) {
                          setID(`&role_id=${newValue.role_id}`);
                        } else {
                          setID("");
                        }
                      }}
                    />
                  </Stack>
                </Grid>
                <Grid xs={2}>
                  <Stack spacing={2} className={clsx(styles.item)}>
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={[]}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField {...params} label="Đơn vị" />
                      )}
                      // onChange={(event, newValue) => {
                      //   if (newValue) {
                      //     setGroup(`&group_id=${newValue.id_group}`);
                      //   } else {
                      //     setGroup("");
                      //   }
                      // }}
                    />
                  </Stack>
                </Grid>
                <Grid xs={2}>
                  <Stack spacing={2} className={clsx(styles.item)}>
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={group_id}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField {...params} label="Nhóm dữ liệu" />
                      )}
                      onChange={(event, newValue) => {
                        if (newValue) {
                          setGroup(`&group_id=${newValue.id_group}`);
                        } else {
                          setGroup("");
                        }
                      }}
                    />
                  </Stack>
                </Grid>

                <Grid xs={2}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ height: "63px" }}
                  >
                    <DatePicker
                      label={"Ngày bắt đầu"}
                      sx={{ "& input": { padding: "8px 0 8px 20px" } }}
                      onChange={(newDate) => {
                        const date = newDate.date();
                        const month = newDate.month() + 1;
                        const year = newDate.year();

                        if (date && month && year) {
                          setStart(
                            `&date_filter[]=${year}-${month}-${date}`
                          );
                        } else {
                          setStart("");
                        }
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid xs={2}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ height: "63px" }}
                  >
                    <DatePicker
                      label={"Ngày kết thúc"}
                      sx={{ "& input": { padding: "8px 0 8px 20px" } }}
                      onChange={(newDate) => {

                        const date = newDate.date();
                        const month = newDate.month() + 1;
                        const year = newDate.year();

                        if (date && month && year) {
                          setEnd(
                            `&date_filter[]=${year}-${month}-${date}`
                          );
                        } else {
                          setEnd("");
                        }
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </div>
            <TableUser strSearch={strSearch} currentPage={currentPage} />
            <Pagination
              total={data.pagination.total}
              showSizeChanger
              pageSizeOptions={["5", "10", "25", "50"]}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              defaultPageSize={data.pagination.itemsPerPage}
              defaultCurrent={data.pagination.page}
              onChange={handlePage}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default User;
