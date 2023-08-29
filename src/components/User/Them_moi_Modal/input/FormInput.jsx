import { Button, Form, Input, Select, Tag } from "antd";
import { useContext } from "react";
import { loginContext } from "../../../../useContext/loginContext";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { Option } from "antd/es/mentions";


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
        color: "black",
        backgroundColor: "#e2d4ff",
      }}
    >
      {label}
    </Tag>
  );
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const FormInput = () => {
  const [form] = Form.useForm();
  const { setOpen, getTokenFromLocalStorage, setReloadUser, roles } =
    useContext(loginContext);
  const token = getTokenFromLocalStorage();
  const group = [
    {
      group_id: 6,
      name: "Dữ liệu BTL Thủ đô Hà Nội"
    },
    {
      group_id: 1,
      name : "Toàn bộ quân khu"
    }
  ]
  const onFinish = (values) => {
    const PostUser = async () => {
      const res = await fetch("https://gtvtqs.samcom.com.vn/api/users", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const roles = await res.json();
      setOpen(false);
      setReloadUser((prev) => prev + 1);
    };
    PostUser();
  };

  const onReset = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between ">
        <h4>Thêm mới người dùng</h4>
        <Icon path={mdiClose} size={1} onClick={onReset} />
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          className="mb-1"
          name="name"
          label="Tên hiển thị"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="mb-1"
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="mb-1"
          name="username"
          label="Tên đăng nhập"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="mb-1"
          name="mobile"
          label="Mobile Number"
          rules={[
            {
              required: false,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
          <p className="m-0">Trường không bắt buộc</p>

        </Form.Item>
        <Form.Item
          className="mb-1"
          name="cmnd"
          label="CMNN/CCCD"
          rules={[
            {
              required: false,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
          <p className="m-0">Trường không bắt buộc</p>
        </Form.Item>
        <Form.Item
          className="mb-1"
          name="cap_bac"
          label="Cấp bậc"
          rules={[
            {
              required: false,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
          <p className="m-0">Trường không bắt buộc</p>

        </Form.Item>
        <Form.Item
          className="mb-1"
          name="chuc_vu"
          label="Chức vụ"
          rules={[
            {
              required: false,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
          <p>Trường không bắt buộc</p>

        </Form.Item>
        <Form.Item
          className="mb-1"
          name="dia_chi"
          label="Địa chỉ thường trú"
          rules={[
            {
              required: false,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
          <p className="m-0">Trường không bắt buộc</p>

        </Form.Item>
        

        <Form.Item
          className="mb-1"
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className="mb-1"
          name="password_confirmation"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className="mb-1"
          name="role_ids" 
          label="Vai trò">
            <Select
              mode="multiple"
              tagRender={tagRender}
              
              tokenSeparators={[","]}
              style={{
                width: "100%",
              }}
            >
              {roles.map((option) => (
                <Option key={option.role_id}>
                  {option.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item 
            className="mb-1"
            name="donvi" 
            label="Đơn vị">
            <Select
              mode="multiple"
              tagRender={tagRender}
              
              tokenSeparators={[","]}
              style={{
                width: "100%",
              }}
              onChange={(value) => {
                if(!value) {
                  return value = null
                }
              }}
            >
              
            </Select>
          </Form.Item>
          <Form.Item
            className="mb-1" 
            name="group_id" 
            label="Nhóm dữ liệu">
            <Select
              mode="single"
              tagRender={tagRender}
              
              tokenSeparators={[","]}
              style={{
                width: "100%",
              }}
            >
              {group.map((option) => (
                <Option key={option.group_id}>
                  {option.name}
                </Option>
              ))}
            </Select>
          </Form.Item>


        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
      <button type="" htmlType="Huy" onClick={onReset}>
        Hủy
      </button>
    </>
  );
};
export default FormInput;
