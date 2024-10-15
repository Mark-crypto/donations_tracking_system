import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { registerValidation } from "../yup/registerValidation";
import "../styles/Registration.css";
import NavbarTop from "./sub-components/Navbar";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidation,
  });
  return (
    <>
      <NavbarTop />
      <div className="reg-form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="fname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fname}
            />
            {formik.touched.fname && formik.errors.fname ? (
              <small style={{ color: "red" }}>{formik.errors.fname}</small>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Surname"
              name="lname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lname}
            />
            {formik.touched.lname && formik.errors.lname ? (
              <small style={{ color: "red" }}>{formik.errors.lname}</small>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <small style={{ color: "red" }}>{formik.errors.email}</small>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
            >
              <option>Choose a role</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
              <option value="assistant">Assistant</option>
            </Form.Select>
            {formik.touched.role && formik.errors.role ? (
              <small style={{ color: "red" }}>{formik.errors.role}</small>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <small style={{ color: "red" }}>{formik.errors.password}</small>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <small style={{ color: "red" }}>
                {formik.errors.confirmPassword}
              </small>
            ) : (
              ""
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Registration;
