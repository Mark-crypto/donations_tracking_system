import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string()
    .min(3)
    .email("Enter a valid  email")
    .required("Please enter email address"),
  password: Yup.string().min(8).required("Please enter password"),
});
