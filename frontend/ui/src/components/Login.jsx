import React from "react";
import "../styles/Login.css";
import { useFormik } from "formik";
import { loginValidation } from "../yup/loginValidation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
  });
  const submitForm = async () => {
    if (!formik.values.email || !formik.values.password) {
      return toast.error("Please fill all the fields");
    }
    if (formik.errors.email || formik.errors.password) {
      return toast.error("Please fill all the fields");
    }
    console.log(formik.values);
    const response = await axios.post(
      "http://localhost:5000/api/login",
      formik.values
    );
    // if(response.data.success){
    //   localStorage.setItem("token",response.data.token)
    //   return toast.success(response.data.message)
    // }else{
    //   return toast.error(response.data.message)
    // }
    toast.success(response.data.message);
  };

  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className="form">
        <ToastContainer />
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
        <button className="btn-login" onClick={submitForm}>
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
