import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../action";

const Login = ({ setOpen }) => {
  const dispatch = useDispatch();
  return (
    <>
    <div className="login container">
      <h1>Login  Page</h1>
      <hr />
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={() =>
          dispatch(
            login({
              email: "faris@icube.us",
              fullname: "Faris Nur Zaman"
            })
          )
        }
      >
        {({
          values,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={() => handleSubmit()}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="email"
              style={{marginBottom: "10px"}}
            />
            <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="password"
              style={{marginBottom: "10px"}}
            />
            <br />
            <button type="submit">Login</button>
            <br />
            <p style={{float: "left"}}>Belum punya akun?  
            </p>
            <p>
            <a onClick={() => setOpen(true)} className="register-link" style={{cursor: "pointer", fontWeight: "bolder", float: "left", paddingLeft: 10}}>
               Daftar disini
            </a>
            </p>
          </form>
        )}
      </Formik>
      </div>
    </>
  );
};

export default Login;
