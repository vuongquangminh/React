import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import './BasicPopover.scss'
import styles from "./BasicPopover.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { loginContext } from "../../useContext/loginContext";

export default function BasicPopover() {
  const { setAuthentication } = React.useContext(loginContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <p className="text-black">Ban quản lý dự án</p>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className={clsx(styles.infor)}>
            <p className={clsx(styles.hoso)}>Hồ sơ</p>
            <div
              className={clsx(styles.logout)}
              onClick={() => {
                localStorage.removeItem("accessToken"); // Thay 'keyToDelete' bằng tên khóa bạn muốn xóa
                setAuthentication(false)
                return <Link to = '/login' />
              }}
            >
              Đăng xuất
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
