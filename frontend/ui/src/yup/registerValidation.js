import * as Yup from "yup";

export const registerValidation = Yup.object({
  fname: Yup.string().required("Enter your first name"),
  lname: Yup.string().required("Enter your last name"),
  email: Yup.string()
    .min(3)
    .email("Enter a valid email")
    .required("Enter your email"),
  role: Yup.string().required("Select a role"),
  password: Yup.string()
    .min(8)
    .required("Enter a password")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(
      /[$&+,:;=?@#|'<>.^*()%!-]/,
      "Password requires a special character"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
