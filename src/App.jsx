import { Link, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import clsx from "clsx";

import Card from "./components/Home/Card/Card";
import Login from "./components/Login/Login";
import Forget from "./components/ForgetPass/Forget";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import PrivateRoute from "./components/User/PrivateRouter/PrivateRoute";

function App() {
  return (
    <div className={clsx(styles.App)}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/forgetPassword" element={<Forget />} />
        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
