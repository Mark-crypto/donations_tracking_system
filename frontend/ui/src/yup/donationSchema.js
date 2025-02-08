import * as Yup from "yup";

const donationSchema = Yup.object({
  item: Yup.string().required("Please enter item name"),
  quantity: Yup.string().required("Please enter quantity"),
  driver: Yup.string().required("Please enter driver name"),
  destination: Yup.string().required("Please enter destination"),
});

export default donationSchema;
