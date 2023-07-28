import React, { Fragment } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import "./Login.scss";

import Layout from "../Layout/Layout";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => (
  <Fragment>
    <Layout name='Home' link='/home'>
      <div id="Login">
        <div className="container">
          <div className="login_Img">
            <img src="http://wlp.howizbiz.com/static/img/logo.png" alt="" />
            <h3> Đăng nhập </h3>
          </div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Tên đăng nhập" className="login_input" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Mật khẩu" className="login_input" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="Login_submit">
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/forgetPassword">Quên mật khẩu</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  </Fragment>
);
export default Login;
