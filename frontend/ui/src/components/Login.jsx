import React from "react";
import "../styles/Login.css";
import { useFormik } from "formik";
import { loginValidation } from "../yup/loginValidation";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
  });
  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className="form">
        <h3>Login Here</h3>
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email address"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />{" "}
        {formik.touched.email && formik.errors.email ? (
          <small style={{ color: "red" }}>{formik.errors.email}</small>
        ) : (
          ""
        )}
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <small style={{ color: "red" }}>{formik.errors.password}</small>
        ) : (
          ""
        )}
        <button className="btn-login">Log In</button>
      </form>
    </>
  );
};

export default Login;
