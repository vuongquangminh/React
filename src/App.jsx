
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Card/Card";
import Login from "./components/Login/Login";
import Forget from "./components/ForgetPass/Forget";
import Home from "./components/Home/Home";

function App() {
  const listPath= [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/forgetPassword',
    element: <Forget />
  },

]
  return (
    <div className="App">
      {/* <div className="header" role="alert">
        <Link to='/login'>Đăng nhập</Link>
        <Link to= '/home'>Home</Link>
      </div> */}

      {/* <button className="btn btn-danger">Hello</button>

       */}

      {/* Bên App chỉ để định tuyến các trang thôi đúng k */}


      <Routes>
        {listPath.map((item, index) => <Route key={index} path={item.path} element = {item.element} />)}
      </Routes>

    </div>
  );
}

export default App;
