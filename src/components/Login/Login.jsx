import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link  } from "react-router-dom";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import styles from "./Login.module.scss";
import clsx from "clsx";

import Layout from "../Layout/Layout";
import { loginContext } from "../../useContext/loginContext";

const Login = () => {

  const history = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async() => {
    var url = "https://gtvtqs.samcom.com.vn/api/web-authenticate";
    var userData = {
      password: password,
      username: username
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      const accessToken = data.access_token;
      saveTokenToLocalStorage("accessToken",accessToken)
      getUserData(accessToken)
      
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const {handleAuth} = useContext(loginContext)
  const {saveTokenToLocalStorage} = useContext(loginContext)

  async function getUserData(token) {
    var url = "https://gtvtqs.samcom.com.vn/api/me";
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
  
      if (response.status === 200) {
        const userData = await response.json();
        saveTokenToLocalStorage("user",JSON.stringify(userData))
        handleAuth()
        userData && history('/user')
      } else {
        alert("Sai tài khoản hoặc mật khẩu");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  
  return(
  <Fragment>
    <Spin tip="Loading..." delay={6000} spinning={false}>
    <Layout name='Home' link='/home'>
      <div id={clsx(styles.Login)}>
        <div className={clsx(styles.container)}>
          <div className={clsx(styles.login_Img)}>
            <img src="http://wlp.howizbiz.com/static/img/logo.png" alt="" />
            <h3> Đăng nhập </h3>
          </div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            scrollToFirstError= 'true'
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '',
                }
              ]}
            >
              <Input placeholder="Tên đăng nhập" className={clsx(styles.login_input, styles.user)} value={username}
          onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '',
                }
              ]}
            >
              <Input.Password placeholder="Mật khẩu" className={clsx(styles.login_input, styles.pass)} value={password}
          onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={clsx(styles.Login_submit)} onClick={handleLogin}>
                Submit
              </Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </Form.Item>
            <Form.Item>
              <Link to="/forgetPassword">Quên mật khẩu</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
    </Spin>
  </Fragment>
)};
export default Login;
